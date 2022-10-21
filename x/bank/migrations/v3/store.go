package v3

import (
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
	v2 "github.com/cosmos/cosmos-sdk/x/bank/migrations/v2"
	"github.com/cosmos/cosmos-sdk/x/bank/types"
)

// MigrateStore performs in-place store migrations from v0.43 to v0.45. The
// migration includes:
//
// - Migrate coin storage to save only amount.
// - Add an additional reverse index from denomination to address.
// - Remove duplicate denom from denom metadata store key.
func MigrateStore(ctx sdk.Context, storeKey storetypes.StoreKey, cdc codec.BinaryCodec) error {
	store := ctx.KVStore(storeKey)
	err := addDenomReverseIndex(store, cdc)
	if err != nil {
		return err
	}

	return migrateDenomMetadata(store)
}

func addDenomReverseIndex(st sdk.KVStore, cdc codec.BinaryCodec) error {
	oldBalancesStore := prefix.NewStore(st, v2.BalancesPrefix)

	oldBalancesIter := oldBalancesStore.Iterator(nil, nil)
	defer oldBalancesIter.Close()

	denomPrefixStores := make(map[string]prefix.Store) // memoize prefix stores

	for ; oldBalancesIter.Valid(); oldBalancesIter.Next() {
		var balance sdk.Coin
		if err := cdc.Unmarshal(oldBalancesIter.Value(), &balance); err != nil {
			return err
		}

		addr, err := v2.AddressFromBalancesStore(oldBalancesIter.Key())
		if err != nil {
			return err
		}

		var coin sdk.DecCoin
		if err := cdc.Unmarshal(oldBalancesIter.Value(), &coin); err != nil {
			return err
		}

		bz, err := coin.Amount.Marshal()
		if err != nil {
			return err
		}

		newStore := store.NewKVStoreWrapper(prefix.NewStore(st, types.CreateAccountBalancesPrefix(addr)))
		newStore.Set([]byte(coin.Denom), bz)

		denomPrefixStore, ok := denomPrefixStores[balance.Denom]
		newDenomPrefixStore := store.NewKVStoreWrapper(denomPrefixStore)
		if !ok {
			denomPrefixStore = prefix.NewStore(st, CreateDenomAddressPrefix(balance.Denom))
			newDenomPrefixStore = store.NewKVStoreWrapper(prefix.NewStore(st, CreateDenomAddressPrefix(balance.Denom)))
			denomPrefixStores[balance.Denom] = denomPrefixStore
		}

		// Store a reverse index from denomination to account address with a
		// sentinel value.
		newDenomPrefixStore.Set(address.MustLengthPrefix(addr), []byte{0})
	}

	return nil
}

func migrateDenomMetadata(st sdk.KVStore) error {
	newStore := store.NewKVStoreWrapper(st)
	oldDenomMetaDataStore := store.NewKVStoreWrapper(prefix.NewStore(st, v2.DenomMetadataPrefix))

	oldDenomMetaDataIter := oldDenomMetaDataStore.Iterator(nil, nil)
	defer oldDenomMetaDataIter.Close()

	for ; oldDenomMetaDataIter.Valid(); oldDenomMetaDataIter.Next() {
		oldKey := oldDenomMetaDataIter.Key()
		l := len(oldKey)/2 + 1

		newKey := make([]byte, len(types.DenomMetadataPrefix)+l)
		// old key: prefix_bytes | denom_bytes | denom_bytes
		copy(newKey, types.DenomMetadataPrefix)
		copy(newKey[len(types.DenomMetadataPrefix):], oldKey[:l])
		newStore.Set(newKey, oldDenomMetaDataIter.Value())
		oldDenomMetaDataStore.Delete(oldKey)
	}

	return nil
}

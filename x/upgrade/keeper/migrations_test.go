package keeper

import (
	"encoding/binary"
	"testing"

	"github.com/stretchr/testify/require"

	store2 "github.com/cosmos/cosmos-sdk/store"
	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/upgrade/types"
)

type storedUpgrade struct {
	name   string
	height int64
}

func encodeOldDoneKey(upgrade storedUpgrade) []byte {
	return append([]byte{types.DoneByte}, []byte(upgrade.name)...)
}

func TestMigrateDoneUpgradeKeys(t *testing.T) {
	upgradeKey := sdk.NewKVStoreKey("upgrade")
	ctx := testutil.DefaultContext(upgradeKey, sdk.NewTransientStoreKey("transient_test"))
	store := ctx.KVStore(upgradeKey)

	testCases := []struct {
		name     string
		upgrades []storedUpgrade
	}{
		{
			name: "valid upgrades",
			upgrades: []storedUpgrade{
				{name: "some-other-upgrade", height: 1},
				{name: "test02", height: 2},
				{name: "test01", height: 3},
			},
		},
	}

	for _, tc := range testCases {
		for _, upgrade := range tc.upgrades {
			bz := make([]byte, 8)
			binary.BigEndian.PutUint64(bz, uint64(upgrade.height))
			oldKey := encodeOldDoneKey(upgrade)
			store2.Set(store, oldKey, bz)
		}

		err := migrateDoneUpgradeKeys(ctx, upgradeKey)
		require.NoError(t, err)

		for _, upgrade := range tc.upgrades {
			newKey := encodeDoneKey(upgrade.name, upgrade.height)
			oldKey := encodeOldDoneKey(upgrade)
			require.Nil(t, store2.Get(store, oldKey))
			require.Equal(t, []byte{1}, store2.Get(store, newKey))
		}
	}
}

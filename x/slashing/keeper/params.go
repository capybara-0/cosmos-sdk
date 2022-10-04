package keeper

import (
	"time"

	store2 "github.com/cosmos/cosmos-sdk/store"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/slashing/types"
)

// SignedBlocksWindow - sliding window for downtime slashing
func (k Keeper) SignedBlocksWindow(ctx sdk.Context) (res int64) {
	return k.GetParams(ctx).SignedBlocksWindow
}

// MinSignedPerWindow - minimum blocks signed per window
func (k Keeper) MinSignedPerWindow(ctx sdk.Context) int64 {
	params := k.GetParams(ctx)
	signedBlocksWindow := k.SignedBlocksWindow(ctx)

	// NOTE: RoundInt64 will never panic as minSignedPerWindow is
	//       less than 1.
	return params.MinSignedPerWindow.MulInt64(signedBlocksWindow).RoundInt64()
}

// DowntimeJailDuration - Downtime unbond duration
func (k Keeper) DowntimeJailDuration(ctx sdk.Context) (res time.Duration) {
	return k.GetParams(ctx).DowntimeJailDuration
}

// SlashFractionDoubleSign - fraction of power slashed in case of double sign
func (k Keeper) SlashFractionDoubleSign(ctx sdk.Context) (res sdk.Dec) {
	return k.GetParams(ctx).SlashFractionDoubleSign
}

// SlashFractionDowntime - fraction of power slashed for downtime
func (k Keeper) SlashFractionDowntime(ctx sdk.Context) (res sdk.Dec) {
	return k.GetParams(ctx).SlashFractionDowntime
}

func (k Keeper) decodeParams(bz []byte) (types.Params, error) {
	var params types.Params
	if bz == nil {
		return params, nil
	}
	k.cdc.MustUnmarshal(bz, &params)
	return params, nil
}

// GetParams returns the current x/slashing module parameters.
func (k Keeper) GetParams(ctx sdk.Context) (params types.Params) {
	store := ctx.KVStore(k.storeKey)
	params, err := store2.GetAndDecode(store, k.decodeParams, types.ParamsKey)
	if err != nil {
		panic(err)
	}
	return params
}

// SetParams sets the x/slashing module parameters.
func (k Keeper) SetParams(ctx sdk.Context, params types.Params) error {
	if err := params.Validate(); err != nil {
		return err
	}

	store := ctx.KVStore(k.storeKey)
	bz := k.cdc.MustMarshal(&params)
	store2.Set(store, types.ParamsKey, bz)

	return nil
}

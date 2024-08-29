const C3 = globalThis.C3;
C3.Plugins.AdsGramSDK.Exps =
    {
        IsRewardDone() { return this._getNumberFromBoolean(this.AdResult.done); },
        RewardDescription() { return this.AdResult.description; },
        RewardState() { return this.AdResult.state; }
    };
// export {};

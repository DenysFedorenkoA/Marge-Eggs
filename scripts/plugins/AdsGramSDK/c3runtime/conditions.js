const C3 = globalThis.C3;
C3.Plugins.AdsGramSDK.Cnds =
    {
        OnRewardEvent() { return true; },
        OnStartEvent() { return true; },
        OnSkipEvent() { return true; },
        OnBannerNotFoundEvent() { return true; },
        OnErrorEvent() { return true; },
        IsLastRewardDone() { return this.AdResult.done; }
    };
// export {};

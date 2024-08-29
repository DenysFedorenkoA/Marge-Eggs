const C3 = globalThis.C3;
class SingleGlobalInstance extends globalThis.ISDKInstanceBase {
    constructor() {
        super();
        this.AdResult = {};
        this.AdController = {};
        this.blockId = '';
        this.debug = true;
        this.debugBannerType = 'RewardedVideo';
        const properties = this._getInitProperties();
        if (properties) // note properties may be null in some cases
         {
            if (typeof properties[0] === 'string') {
                this.blockId = properties[0];
            }
            if (typeof properties[1] === 'boolean') {
                this.debug = properties[1];
            }
            switch (properties[2]) {
                case 0:
                    this.debugBannerType = 'RewardedVideo';
                    break;
                case 1:
                    this.debugBannerType = 'FullscreenMedia';
                    break;
            }
        }
        const adController = window.Adsgram?.init({
            blockId: this.blockId,
            debug: this.debug,
            debugBannerType: this.debugBannerType
        });
        if (adController)
            this.AdController = adController;
        this.AdController.addEventListener('onReward', () => {
            this._trigger(C3.Plugins.AdsGramSDK.Cnds.OnRewardEvent);
        });
        this.AdController.addEventListener('onStart', () => {
            this._trigger(C3.Plugins.AdsGramSDK.Cnds.OnStartEvent);
        });
        this.AdController.addEventListener('onSkip', () => {
            this._trigger(C3.Plugins.AdsGramSDK.Cnds.OnSkipEvent);
        });
        this.AdController.addEventListener('onBannerNotFound', () => {
            this._trigger(C3.Plugins.AdsGramSDK.Cnds.OnBannerNotFoundEvent);
        });
        this.AdController.addEventListener('onError', () => {
            this._trigger(C3.Plugins.AdsGramSDK.Cnds.OnErrorEvent);
        });
    }
    _release() {
        super._release();
    }
    _show() {
        this.AdController.show().then((result) => {
            this.AdResult.done = result.done;
            this.AdResult.description = result.description;
            this.AdResult.state = result.state;
            this.AdResult.error = result.error;
            // user watch ad till the end
            // your code to reward user
        }).catch((result) => {
            // user get error during playing ad or skip ad
            // do nothing or whatever you want
        });
    }
    _getNumberFromBoolean(bool) {
        if (bool) {
            return 1;
        }
        return 0;
    }
}
;
C3.Plugins.AdsGramSDK.Instance = SingleGlobalInstance;
// export {};

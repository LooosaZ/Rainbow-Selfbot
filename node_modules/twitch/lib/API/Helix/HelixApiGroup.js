"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixApiGroup = void 0;
var tslib_1 = require("tslib");
var cache_decorators_1 = require("@d-fischer/cache-decorators");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../BaseApi");
var HelixBitsApi_1 = require("./Bits/HelixBitsApi");
var HelixChannelApi_1 = require("./Channel/HelixChannelApi");
var HelixChannelPointsApi_1 = require("./ChannelPoints/HelixChannelPointsApi");
var HelixChatApi_1 = require("./Chat/HelixChatApi");
var HelixClipApi_1 = require("./Clip/HelixClipApi");
var HelixEventSubApi_1 = require("./EventSub/HelixEventSubApi");
var HelixExtensionsApi_1 = require("./Extensions/HelixExtensionsApi");
var HelixGameApi_1 = require("./Game/HelixGameApi");
var HelixHypeTrainApi_1 = require("./HypeTrain/HelixHypeTrainApi");
var HelixModerationApi_1 = require("./Moderation/HelixModerationApi");
var HelixPollApi_1 = require("./Poll/HelixPollApi");
var HelixPredictionApi_1 = require("./Prediction/HelixPredictionApi");
var HelixScheduleApi_1 = require("./Schedule/HelixScheduleApi");
var HelixSearchApi_1 = require("./Search/HelixSearchApi");
var HelixStreamApi_1 = require("./Stream/HelixStreamApi");
var HelixSubscriptionApi_1 = require("./Subscriptions/HelixSubscriptionApi");
var HelixTagApi_1 = require("./Tag/HelixTagApi");
var HelixTeamApi_1 = require("./Team/HelixTeamApi");
var HelixUserApi_1 = require("./User/HelixUserApi");
var HelixVideoApi_1 = require("./Video/HelixVideoApi");
var HelixWebHooksApi_1 = require("./WebHooks/HelixWebHooksApi");
/**
 * Groups all API calls available in Helix a.k.a. the "New Twitch API".
 *
 * Can be accessed using {@ApiClient#helix}.
 */
var HelixApiGroup = /** @class */ (function (_super) {
    tslib_1.__extends(HelixApiGroup, _super);
    function HelixApiGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelixApiGroup.prototype, "bits", {
        /**
         * The Helix bits API methods.
         */
        get: function () {
            return new HelixBitsApi_1.HelixBitsApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "channels", {
        /**
         * The Helix channels API methods.
         */
        get: function () {
            return new HelixChannelApi_1.HelixChannelApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "channelPoints", {
        /**
         * The Helix channel points API methods.
         */
        get: function () {
            return new HelixChannelPointsApi_1.HelixChannelPointsApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "chat", {
        /**
         * The Helix chat API methods.
         */
        get: function () {
            return new HelixChatApi_1.HelixChatApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "clips", {
        /**
         * The Helix clips API methods.
         */
        get: function () {
            return new HelixClipApi_1.HelixClipApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "eventSub", {
        /**
         * The Helix EventSub API methods.
         */
        get: function () {
            return new HelixEventSubApi_1.HelixEventSubApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "extensions", {
        /**
         * The Helix extensions API methods.
         */
        get: function () {
            return new HelixExtensionsApi_1.HelixExtensionsApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "games", {
        /**
         * The Helix game API methods.
         */
        get: function () {
            return new HelixGameApi_1.HelixGameApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "hypeTrain", {
        /**
         * The Helix Hype Train API methods.
         */
        get: function () {
            return new HelixHypeTrainApi_1.default(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "moderation", {
        /**
         * The Helix moderation API methods.
         */
        get: function () {
            return new HelixModerationApi_1.HelixModerationApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "polls", {
        /**
         * The Helix poll API methods.
         */
        get: function () {
            return new HelixPollApi_1.HelixPollApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "predictions", {
        /**
         * The Helix prediction API methods.
         */
        get: function () {
            return new HelixPredictionApi_1.HelixPredictionApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "schedule", {
        /**
         * The Helix schedule API methods.
         */
        get: function () {
            return new HelixScheduleApi_1.HelixScheduleApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "search", {
        /**
         * The Helix search API methods.
         */
        get: function () {
            return new HelixSearchApi_1.HelixSearchApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "streams", {
        /**
         * The Helix stream API methods.
         */
        get: function () {
            return new HelixStreamApi_1.HelixStreamApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "subscriptions", {
        /**
         * The Helix subscription API methods.
         */
        get: function () {
            return new HelixSubscriptionApi_1.HelixSubscriptionApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "tags", {
        /**
         * The Helix tag API methods.
         */
        get: function () {
            return new HelixTagApi_1.HelixTagApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "teams", {
        /**
         * The Helix team API methods.
         */
        get: function () {
            return new HelixTeamApi_1.HelixTeamApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "users", {
        /**
         * The Helix user API methods.
         */
        get: function () {
            return new HelixUserApi_1.HelixUserApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "videos", {
        /**
         * The Helix video API methods.
         */
        get: function () {
            return new HelixVideoApi_1.HelixVideoApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "webHooks", {
        /**
         * The Helix WebHook API methods.
         */
        get: function () {
            return new HelixWebHooksApi_1.HelixWebHooksApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "bits", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "channels", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "channelPoints", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "chat", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "clips", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "eventSub", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "extensions", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "games", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "hypeTrain", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "moderation", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "polls", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "predictions", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "schedule", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "search", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "streams", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "subscriptions", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "tags", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "teams", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "users", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "videos", null);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixApiGroup.prototype, "webHooks", null);
    HelixApiGroup = tslib_1.__decorate([
        cache_decorators_1.Cacheable,
        twitch_common_1.rtfm('twitch', 'HelixApiGroup')
    ], HelixApiGroup);
    return HelixApiGroup;
}(BaseApi_1.BaseApi));
exports.HelixApiGroup = HelixApiGroup;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixUserSubscription = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * The user info about a (paid) subscription to a broadcaster.
 */
var HelixUserSubscription = /** @class */ (function () {
    /** @private */
    function HelixUserSubscription(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixUserSubscription.prototype, "broadcasterId", {
        /**
         * The user ID of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUserSubscription.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUserSubscription.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the broadcaster.
     */
    HelixUserSubscription.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
            });
        });
    };
    Object.defineProperty(HelixUserSubscription.prototype, "isGift", {
        /**
         * Whether the subscription has been gifted by another user.
         */
        get: function () {
            return this._data.is_gift;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUserSubscription.prototype, "tier", {
        /**
         * The tier of the subscription.
         */
        get: function () {
            return this._data.tier;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixUserSubscription.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixUserSubscription.prototype, "_client", void 0);
    HelixUserSubscription = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixUserSubscription', 'broadcasterId')
    ], HelixUserSubscription);
    return HelixUserSubscription;
}());
exports.HelixUserSubscription = HelixUserSubscription;

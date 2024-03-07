import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
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
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
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
    __decorate([
        Enumerable(false)
    ], HelixUserSubscription.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixUserSubscription.prototype, "_client", void 0);
    HelixUserSubscription = __decorate([
        rtfm('twitch', 'HelixUserSubscription', 'broadcasterId')
    ], HelixUserSubscription);
    return HelixUserSubscription;
}());
export { HelixUserSubscription };

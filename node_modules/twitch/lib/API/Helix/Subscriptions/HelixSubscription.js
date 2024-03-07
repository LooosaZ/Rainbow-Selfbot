"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixSubscription = void 0;
var tslib_1 = require("tslib");
var twitch_common_1 = require("twitch-common");
var HelixUserSubscription_1 = require("./HelixUserSubscription");
/**
 * A (paid) subscription of a user to a broadcaster.
 *
 * @inheritDoc
 */
var HelixSubscription = /** @class */ (function (_super) {
    tslib_1.__extends(HelixSubscription, _super);
    function HelixSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelixSubscription.prototype, "gifterId", {
        /**
         * The user ID of the gifter.
         */
        get: function () {
            return this._data.gifter_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSubscription.prototype, "gifterName", {
        /**
         * The name of the gifter.
         */
        get: function () {
            return this._data.gifter_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSubscription.prototype, "giftName", {
        /**
         * The display name of the gifter.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the gifter.
     */
    HelixSubscription.prototype.getGifter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.gifter_id)];
            });
        });
    };
    Object.defineProperty(HelixSubscription.prototype, "userId", {
        /**
         * The user ID of the subscribed user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSubscription.prototype, "userName", {
        /**
         * The name of the subscribed user.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSubscription.prototype, "userDisplayName", {
        /**
         * The display name of the subscribed user.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the subscribed user.
     */
    HelixSubscription.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    HelixSubscription = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixSubscription', 'userId')
    ], HelixSubscription);
    return HelixSubscription;
}(HelixUserSubscription_1.HelixUserSubscription));
exports.HelixSubscription = HelixSubscription;

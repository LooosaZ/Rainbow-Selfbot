"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessToken = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * Represents the data of an OAuth access token returned by Twitch.
 */
var AccessToken = /** @class */ (function () {
    /** @private */
    function AccessToken(data, obtainmentDate) {
        this._data = data;
        this._obtainmentDate = obtainmentDate !== null && obtainmentDate !== void 0 ? obtainmentDate : new Date();
    }
    Object.defineProperty(AccessToken.prototype, "accessToken", {
        /**
         * The access token which is necessary for every request to the Twitch API.
         */
        get: function () {
            return this._data.access_token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "refreshToken", {
        /**
         * The refresh token which is necessary to refresh the access token once it expires.
         */
        get: function () {
            return this._data.refresh_token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "expiryDate", {
        /**
         * The time when the access token will expire.
         *
         * May be `null`, in which case the token does not expire.
         * This can only be the case with very old Client IDs.
         */
        get: function () {
            if (!this._data.expires_in) {
                return null;
            }
            return new Date(this._obtainmentDate.getTime() + this._data.expires_in * 1000);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "isExpired", {
        get: function () {
            if (!this._data.expires_in) {
                return false;
            }
            return Date.now() > this._obtainmentDate.getTime() + this._data.expires_in * 1000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccessToken.prototype, "scope", {
        /**
         * The scope the access token is valid for, i.e. what the token enables you to do.
         */
        get: function () {
            var _a;
            return (_a = this._data.scope) !== null && _a !== void 0 ? _a : [];
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], AccessToken.prototype, "_data", void 0);
    AccessToken = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch-auth', 'AccessToken')
    ], AccessToken);
    return AccessToken;
}());
exports.AccessToken = AccessToken;

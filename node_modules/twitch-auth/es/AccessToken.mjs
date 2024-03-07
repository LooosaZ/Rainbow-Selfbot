import { __decorate } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
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
    __decorate([
        Enumerable(false)
    ], AccessToken.prototype, "_data", void 0);
    AccessToken = __decorate([
        rtfm('twitch-auth', 'AccessToken')
    ], AccessToken);
    return AccessToken;
}());
export { AccessToken };

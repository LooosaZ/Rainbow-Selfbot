import { __decorate } from "tslib";
/** @private */
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * Information about an access token.
 */
var TokenInfo = /** @class */ (function () {
    /** @private */
    function TokenInfo(data) {
        this._data = data;
        this._obtainmentDate = new Date();
    }
    Object.defineProperty(TokenInfo.prototype, "clientId", {
        /**
         * The client ID.
         */
        get: function () {
            return this._data.client_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenInfo.prototype, "userId", {
        /**
         * The ID of the authenticated user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenInfo.prototype, "userName", {
        /**
         * The name of the authenticated user.
         */
        get: function () {
            return this._data.login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenInfo.prototype, "scopes", {
        /**
         * The scopes for which the token is valid.
         */
        get: function () {
            return this._data.scopes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenInfo.prototype, "expiryDate", {
        /**
         * The time when the token will expire.
         *
         * If this returns null, it means that the token never expires (happens with some old client IDs).
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
    __decorate([
        Enumerable(false)
    ], TokenInfo.prototype, "_data", void 0);
    TokenInfo = __decorate([
        rtfm('twitch-auth', 'TokenInfo', 'clientId')
    ], TokenInfo);
    return TokenInfo;
}());
export { TokenInfo };

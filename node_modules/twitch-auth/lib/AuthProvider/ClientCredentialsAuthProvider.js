"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCredentialsAuthProvider = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var helpers_1 = require("../helpers");
/**
 * An auth provider that retrieve tokens using client credentials.
 */
var ClientCredentialsAuthProvider = /** @class */ (function () {
    /**
     * Creates a new auth provider to receive an application token with using the client ID and secret.
     *
     * @param clientId The client ID of your application.
     * @param clientSecret The client secret of your application.
     */
    function ClientCredentialsAuthProvider(clientId, clientSecret) {
        /**
         * The type of tokens the provider generates.
         *
         * This auth provider generates app tokens.
         */
        this.tokenType = 'app';
        this._clientId = clientId;
        this._clientSecret = clientSecret;
    }
    /**
     * Retrieves an access token.
     *
     * If any scopes are provided, this throws. The client credentials flow does not support scopes.
     *
     * @param scopes The requested scopes.
     */
    ClientCredentialsAuthProvider.prototype.getAccessToken = function (scopes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (scopes && scopes.length > 0) {
                    throw new Error("Scope " + (typeof scopes === 'string' ? scopes : scopes.join(', ')) + " requested but the client credentials flow does not support scopes");
                }
                if (!this._token || this._token.isExpired) {
                    return [2 /*return*/, this.refresh()];
                }
                return [2 /*return*/, this._token];
            });
        });
    };
    /**
     * Retrieves a new app access token.
     */
    ClientCredentialsAuthProvider.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, helpers_1.getAppToken(this._clientId, this._clientSecret)];
                    case 1: return [2 /*return*/, (_a._token = _b.sent())];
                }
            });
        });
    };
    /** @private */
    ClientCredentialsAuthProvider.prototype.setAccessToken = function (token) {
        this._token = token;
    };
    Object.defineProperty(ClientCredentialsAuthProvider.prototype, "clientId", {
        /**
         * The client ID.
         */
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCredentialsAuthProvider.prototype, "currentScopes", {
        /**
         * The scopes that are currently available using the access token.
         */
        get: function () {
            return [];
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], ClientCredentialsAuthProvider.prototype, "_clientSecret", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], ClientCredentialsAuthProvider.prototype, "_token", void 0);
    ClientCredentialsAuthProvider = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch-auth', 'ClientCredentialsAuthProvider', 'clientId')
    ], ClientCredentialsAuthProvider);
    return ClientCredentialsAuthProvider;
}());
exports.ClientCredentialsAuthProvider = ClientCredentialsAuthProvider;

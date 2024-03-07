"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticAuthProvider = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var AccessToken_1 = require("../AccessToken");
var helpers_1 = require("../helpers");
/**
 * An auth provider that always returns the same initially given credentials.
 *
 * You are advised to roll your own auth provider that can handle scope upgrades,
 * or to plan ahead and supply only access tokens that account for all scopes
 * you will ever need.
 */
var StaticAuthProvider = /** @class */ (function () {
    /**
     * Creates a new auth provider with static credentials.
     *
     * @param clientId The client ID.
     * @param accessToken The access token to provide.
     *
     * You need to obtain one using one of the [Twitch OAuth flows](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/).
     * @param scopes The scopes the supplied token has.
     * @param tokenType The type of the supplied token.
     */
    function StaticAuthProvider(clientId, accessToken, scopes, tokenType) {
        if (tokenType === void 0) { tokenType = 'user'; }
        this._clientId = clientId || '';
        this.tokenType = tokenType;
        if (accessToken) {
            this._accessToken =
                typeof accessToken === 'string'
                    ? new AccessToken_1.AccessToken({
                        access_token: accessToken,
                        scope: scopes,
                        refresh_token: ''
                    })
                    : accessToken;
            this._scopes = scopes;
        }
    }
    /**
     * Retrieves an access token.
     *
     * If the current access token does not have the requested scopes, this method throws.
     * This makes supplying an access token with the correct scopes from the beginning necessary.
     *
     * @param scopes The requested scopes.
     */
    StaticAuthProvider.prototype.getAccessToken = function (scopes) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tokenInfo;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(scopes && scopes.length > 0)) return [3 /*break*/, 3];
                        if (!!this._scopes) return [3 /*break*/, 2];
                        if (!this._accessToken) {
                            throw new Error('Auth provider has not been initialized with a token yet and is requesting scopes');
                        }
                        return [4 /*yield*/, helpers_1.getTokenInfo(this._accessToken.accessToken, this._clientId)];
                    case 1:
                        tokenInfo = _b.sent();
                        this._scopes = tokenInfo.scopes;
                        _b.label = 2;
                    case 2:
                        if (typeof scopes === 'string') {
                            scopes = scopes.split(' ');
                        }
                        if (scopes.some(function (scope) { return !_this._scopes.includes(scope); })) {
                            throw new Error("This token does not have the requested scopes (" + scopes.join(', ') + ") and can not be upgraded.\nIf you need dynamically upgrading scopes, please implement the AuthProvider interface accordingly:\n\n\thttps://d-fischer.github.io/twitch-auth/reference/interfaces/AuthProvider.html");
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/, (_a = this._accessToken) !== null && _a !== void 0 ? _a : null];
                }
            });
        });
    };
    /** @private */
    StaticAuthProvider.prototype.setAccessToken = function (token) {
        this._accessToken = token;
    };
    Object.defineProperty(StaticAuthProvider.prototype, "clientId", {
        /**
         * The client ID.
         */
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StaticAuthProvider.prototype, "currentScopes", {
        /**
         * The scopes that are currently available using the access token.
         */
        get: function () {
            var _a;
            return (_a = this._scopes) !== null && _a !== void 0 ? _a : [];
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], StaticAuthProvider.prototype, "_clientId", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], StaticAuthProvider.prototype, "_accessToken", void 0);
    StaticAuthProvider = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch-auth', 'StaticAuthProvider', 'clientId')
    ], StaticAuthProvider);
    return StaticAuthProvider;
}());
exports.StaticAuthProvider = StaticAuthProvider;

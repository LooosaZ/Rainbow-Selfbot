import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * Information about the ban of a user.
 */
var HelixBan = /** @class */ (function () {
    /** @private */
    function HelixBan(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixBan.prototype, "userId", {
        /**
         * The ID of the banned user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBan.prototype, "userName", {
        /**
         * The name of the banned user.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBan.prototype, "userDisplayName", {
        /**
         * The display name of the banned user.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the user.
     */
    HelixBan.prototype.getUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixBan.prototype, "expiryDate", {
        /**
         * The date when the ban will expire; null for permanent bans.
         */
        get: function () {
            return this._data.expires_at ? new Date(this._data.expires_at) : null;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], HelixBan.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixBan.prototype, "_client", void 0);
    HelixBan = __decorate([
        rtfm('twitch', 'HelixBan', 'userId')
    ], HelixBan);
    return HelixBan;
}());
export { HelixBan };

import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * Information about the moderator status of a user.
 */
var HelixModerator = /** @class */ (function () {
    /** @private */
    function HelixModerator(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixModerator.prototype, "userId", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixModerator.prototype, "userName", {
        /**
         * The name of the user.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixModerator.prototype, "userDisplayName", {
        /**
         * The display name of the user.
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
    HelixModerator.prototype.getUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    __decorate([
        Enumerable(false)
    ], HelixModerator.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixModerator.prototype, "_client", void 0);
    HelixModerator = __decorate([
        rtfm('twitch', 'HelixModerator', 'userId')
    ], HelixModerator);
    return HelixModerator;
}());
export { HelixModerator };

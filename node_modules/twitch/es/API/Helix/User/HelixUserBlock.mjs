import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * An user blocked by a previously given user.
 */
var HelixUserBlock = /** @class */ (function () {
    /** @private */
    function HelixUserBlock(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixUserBlock.prototype, "userId", {
        /**
         * The ID of the blocked user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUserBlock.prototype, "userName", {
        /**
         * The name of the blocked user.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUserBlock.prototype, "userDisplayName", {
        /**
         * The display name of the blocked user.
         */
        get: function () {
            return this._data.display_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves additional information about the blocked user.
     */
    HelixUserBlock.prototype.getUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    __decorate([
        Enumerable(false)
    ], HelixUserBlock.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixUserBlock.prototype, "_client", void 0);
    HelixUserBlock = __decorate([
        rtfm('twitch', 'HelixUserBlock', 'userId')
    ], HelixUserBlock);
    return HelixUserBlock;
}());
export { HelixUserBlock };

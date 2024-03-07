import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * A relation of anything with a user.
 */
var HelixUserRelation = /** @class */ (function () {
    /** @private */
    function HelixUserRelation(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixUserRelation.prototype, "id", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUserRelation.prototype, "name", {
        /**
         * The name of the user.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUserRelation.prototype, "displayName", {
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
     * Retrieves additional information about the user.
     */
    HelixUserRelation.prototype.getUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    __decorate([
        Enumerable(false)
    ], HelixUserRelation.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixUserRelation.prototype, "_client", void 0);
    HelixUserRelation = __decorate([
        rtfm('twitch', 'HelixUserRelation', 'id')
    ], HelixUserRelation);
    return HelixUserRelation;
}());
export { HelixUserRelation };

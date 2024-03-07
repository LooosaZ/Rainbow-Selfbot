"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixUserRelation = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixUserRelation.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixUserRelation.prototype, "_client", void 0);
    HelixUserRelation = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixUserRelation', 'id')
    ], HelixUserRelation);
    return HelixUserRelation;
}());
exports.HelixUserRelation = HelixUserRelation;

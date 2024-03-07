"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixUserBlock = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixUserBlock.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixUserBlock.prototype, "_client", void 0);
    HelixUserBlock = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixUserBlock', 'userId')
    ], HelixUserBlock);
    return HelixUserBlock;
}());
exports.HelixUserBlock = HelixUserBlock;

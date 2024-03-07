"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixModerator = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixModerator.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixModerator.prototype, "_client", void 0);
    HelixModerator = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixModerator', 'userId')
    ], HelixModerator);
    return HelixModerator;
}());
exports.HelixModerator = HelixModerator;

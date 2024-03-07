"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixChannelEditor = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * An editor of a previously given channel.
 */
var HelixChannelEditor = /** @class */ (function () {
    /** @private */
    function HelixChannelEditor(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixChannelEditor.prototype, "userId", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelEditor.prototype, "userDisplayName", {
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
    HelixChannelEditor.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixChannelEditor.prototype, "creationDate", {
        /**
         * The date when the user was given editor status.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixChannelEditor.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixChannelEditor.prototype, "_client", void 0);
    HelixChannelEditor = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixChannelEditor', 'userId')
    ], HelixChannelEditor);
    return HelixChannelEditor;
}());
exports.HelixChannelEditor = HelixChannelEditor;

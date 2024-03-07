"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixChatBadgeVersion = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A version of a chat badge.
 */
var HelixChatBadgeVersion = /** @class */ (function () {
    /** @private */
    function HelixChatBadgeVersion(data) {
        this._data = data;
    }
    Object.defineProperty(HelixChatBadgeVersion.prototype, "id", {
        /**
         * The badge version ID.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an image URL for the given scale.
     *
     * @param scale The scale of the badge image.
     */
    HelixChatBadgeVersion.prototype.getImageUrl = function (scale) {
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        return this._data["image_url_" + scale + "x"];
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixChatBadgeVersion.prototype, "_data", void 0);
    HelixChatBadgeVersion = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixChatBadgeVersion', 'id')
    ], HelixChatBadgeVersion);
    return HelixChatBadgeVersion;
}());
exports.HelixChatBadgeVersion = HelixChatBadgeVersion;

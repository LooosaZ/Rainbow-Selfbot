import { __decorate } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
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
    __decorate([
        Enumerable(false)
    ], HelixChatBadgeVersion.prototype, "_data", void 0);
    HelixChatBadgeVersion = __decorate([
        rtfm('twitch', 'HelixChatBadgeVersion', 'id')
    ], HelixChatBadgeVersion);
    return HelixChatBadgeVersion;
}());
export { HelixChatBadgeVersion };

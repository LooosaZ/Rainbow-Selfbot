import { __decorate } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * A Twitch emote.
 */
var HelixEmote = /** @class */ (function () {
    /** @private */
    function HelixEmote(data) {
        this._data = data;
    }
    Object.defineProperty(HelixEmote.prototype, "id", {
        /**
         * The ID of the emote.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixEmote.prototype, "name", {
        /**
         * The name of the emote.
         */
        get: function () {
            return this._data.name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the URL of the emote image in the given scale.
     *
     * @param scale The scale of the image.
     */
    HelixEmote.prototype.getImageUrl = function (scale) {
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        return this._data.images["url_" + scale + "x"];
    };
    __decorate([
        Enumerable(false)
    ], HelixEmote.prototype, "_data", void 0);
    HelixEmote = __decorate([
        rtfm('twitch', 'HelixEmote', 'id')
    ], HelixEmote);
    return HelixEmote;
}());
export { HelixEmote };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixEmote = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
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
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixEmote.prototype, "_data", void 0);
    HelixEmote = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixEmote', 'id')
    ], HelixEmote);
    return HelixEmote;
}());
exports.HelixEmote = HelixEmote;

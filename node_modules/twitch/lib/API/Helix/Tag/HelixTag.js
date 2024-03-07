"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixTag = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A stream tag.
 */
var HelixTag = /** @class */ (function () {
    /** @private */
    function HelixTag(data) {
        this._data = data;
    }
    Object.defineProperty(HelixTag.prototype, "id", {
        /**
         * The ID of the tag.
         */
        get: function () {
            return this._data.tag_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixTag.prototype, "isAuto", {
        /**
         * Whether the tag is automatically assigned by Twitch.
         */
        get: function () {
            return this._data.is_auto;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the name of the tag in the specified language.
     */
    HelixTag.prototype.getName = function (language) {
        return this._data.localization_names[language];
    };
    /**
     * Gets the description of the tag in the specified language.
     */
    HelixTag.prototype.getDescription = function (language) {
        return this._data.localization_descriptions[language];
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixTag.prototype, "_data", void 0);
    HelixTag = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixTag', 'id')
    ], HelixTag);
    return HelixTag;
}());
exports.HelixTag = HelixTag;

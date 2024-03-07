"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixStreamMarker = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A stream marker.
 */
var HelixStreamMarker = /** @class */ (function () {
    /** @private */
    function HelixStreamMarker(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixStreamMarker.prototype, "id", {
        /**
         * The ID of the marker.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStreamMarker.prototype, "creationDate", {
        /**
         * The date and time when the marker was created.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStreamMarker.prototype, "description", {
        /**
         * The description of the marker.
         */
        get: function () {
            return this._data.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStreamMarker.prototype, "positionInSeconds", {
        /**
         * The position in the stream when the marker was created, in seconds.
         */
        get: function () {
            return this._data.position_seconds;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixStreamMarker.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixStreamMarker.prototype, "_client", void 0);
    HelixStreamMarker = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixStreamMarker', 'id')
    ], HelixStreamMarker);
    return HelixStreamMarker;
}());
exports.HelixStreamMarker = HelixStreamMarker;

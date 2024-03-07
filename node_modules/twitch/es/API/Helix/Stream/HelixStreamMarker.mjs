import { __decorate } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
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
    __decorate([
        Enumerable(false)
    ], HelixStreamMarker.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixStreamMarker.prototype, "_client", void 0);
    HelixStreamMarker = __decorate([
        rtfm('twitch', 'HelixStreamMarker', 'id')
    ], HelixStreamMarker);
    return HelixStreamMarker;
}());
export { HelixStreamMarker };

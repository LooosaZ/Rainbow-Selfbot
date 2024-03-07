import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { rtfm } from 'twitch-common';
import { HelixStreamMarker } from "./HelixStreamMarker.mjs";
/**
 * A stream marker, also containing some video data.
 */
var HelixStreamMarkerWithVideo = /** @class */ (function (_super) {
    __extends(HelixStreamMarkerWithVideo, _super);
    /** @private */
    function HelixStreamMarkerWithVideo(data, _videoId, client) {
        var _this = _super.call(this, data, client) || this;
        _this._videoId = _videoId;
        return _this;
    }
    Object.defineProperty(HelixStreamMarkerWithVideo.prototype, "url", {
        /**
         * The URL of the video, which will start playing at the position of the stream marker.
         */
        get: function () {
            return this._data.URL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStreamMarkerWithVideo.prototype, "videoId", {
        /**
         * The ID of the video.
         */
        get: function () {
            return this._videoId;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves the video data of the video the marker was set in.
     */
    HelixStreamMarkerWithVideo.prototype.getVideo = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.videos.getVideoById(this._videoId)];
            });
        });
    };
    HelixStreamMarkerWithVideo = __decorate([
        rtfm('twitch', 'HelixStreamMarkerWithVideo', 'id')
    ], HelixStreamMarkerWithVideo);
    return HelixStreamMarkerWithVideo;
}(HelixStreamMarker));
export { HelixStreamMarkerWithVideo };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixVideo = void 0;
var tslib_1 = require("tslib");
var cache_decorators_1 = require("@d-fischer/cache-decorators");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A video on Twitch.
 */
var HelixVideo = /** @class */ (function () {
    /** @private */
    function HelixVideo(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixVideo.prototype, "id", {
        /**
         * The ID of the video.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "userId", {
        /**
         * The ID of the user who created the video.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "userName", {
        /**
         * The name of the user who created the video.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "userDisplayName", {
        /**
         * The display name of the user who created the video.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the user who created the video.
     */
    HelixVideo.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixVideo.prototype, "title", {
        /**
         * The title of the video.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "description", {
        /**
         * The description of the video.
         */
        get: function () {
            return this._data.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "creationDate", {
        /**
         * The date when the video was created.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "publishDate", {
        /**
         * The date when the video was published.
         */
        get: function () {
            return new Date(this._data.published_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "url", {
        /**
         * The URL of the video.
         */
        get: function () {
            return this._data.url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "thumbnailUrl", {
        /**
         * The URL of the thumbnail of the video.
         */
        get: function () {
            return this._data.thumbnail_url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "isPublic", {
        /**
         * Whether the video is public or not.
         */
        get: function () {
            return this._data.viewable === 'public';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "views", {
        /**
         * The number of views of the video.
         */
        get: function () {
            return this._data.view_count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "language", {
        /**
         * The language of the video.
         */
        get: function () {
            return this._data.language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "type", {
        /**
         * The type of the video.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "duration", {
        /**
         * The duration of the video, as formatted by Twitch.
         */
        get: function () {
            return this._data.duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "durationInSeconds", {
        /**
         * The duration of the video, in seconds.
         */
        get: function () {
            var parts = this._data.duration.match(/\d+[hms]/g);
            if (!parts) {
                throw new twitch_common_1.HellFreezesOverError("Could not parse duration string: " + this._data.duration);
            }
            return parts
                .map(function (part) {
                var partialMatch = /(\d+)([hms])/.exec(part);
                if (!partialMatch) {
                    throw new twitch_common_1.HellFreezesOverError("Could not parse partial duration string: " + part);
                }
                var _a = tslib_1.__read(partialMatch, 3), num = _a[1], unit = _a[2];
                return parseInt(num, 10) * { h: 3600, m: 60, s: 1 }[unit];
            })
                .reduce(function (a, b) { return a + b; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "streamId", {
        /**
         * The ID of the stream this video belongs to.
         *
         * Returns null if the video is not an archived stream.
         */
        get: function () {
            return this._data.stream_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixVideo.prototype, "mutedSegmentData", {
        /**
         * The raw data of muted segments of the video.
         */
        get: function () {
            return this._data.muted_segments.slice();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Checks whether the video is muted at a given offset or range.
     *
     * @param offset The start of your range, in seconds from the start of the video,
     * or if no duration is given, the exact offset that is checked.
     * @param duration The duration of your range, in seconds.
     * @param partial Whether the range check is only partial.
     *
     * By default, this function returns true only if the passed range is entirely contained in a muted segment.
     */
    HelixVideo.prototype.isMutedAt = function (offset, duration, partial) {
        if (partial === void 0) { partial = false; }
        if (duration == null) {
            return this._data.muted_segments.some(function (seg) { return seg.offset <= offset && offset <= seg.offset + seg.duration; });
        }
        var end = offset + duration;
        if (partial) {
            return this._data.muted_segments.some(function (seg) {
                var segEnd = seg.offset + seg.duration;
                return offset < segEnd && seg.offset < end;
            });
        }
        return this._data.muted_segments.some(function (seg) {
            var segEnd = seg.offset + seg.duration;
            return seg.offset <= offset && end <= segEnd;
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixVideo.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixVideo.prototype, "_client", void 0);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixVideo.prototype, "durationInSeconds", null);
    HelixVideo = tslib_1.__decorate([
        cache_decorators_1.Cacheable,
        twitch_common_1.rtfm('twitch', 'HelixVideo', 'id')
    ], HelixVideo);
    return HelixVideo;
}());
exports.HelixVideo = HelixVideo;

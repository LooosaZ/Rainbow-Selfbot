"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixStream = exports.HelixStreamType = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var HelixStreamType;
(function (HelixStreamType) {
    /**
     * Returned by Twitch in case of an error.
     */
    HelixStreamType["None"] = "";
    /**
     * A live stream.
     */
    HelixStreamType["Live"] = "live";
    /**
     * A vodcast.
     *
     * Currently not supported by Twitch - but one can only hope and leave it in here.
     */
    HelixStreamType["Vodcast"] = "vodcast";
})(HelixStreamType || (HelixStreamType = {}));
exports.HelixStreamType = HelixStreamType;
/**
 * A Twitch stream.
 */
var HelixStream = /** @class */ (function () {
    /** @private */
    function HelixStream(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixStream.prototype, "id", {
        /**
         * The stream ID.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "userId", {
        /**
         * The user ID.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "userName", {
        /**
         * The user's name.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "userDisplayName", {
        /**
         * The user's display name.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the user broadcasting the stream.
     */
    HelixStream.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixStream.prototype, "gameId", {
        /**
         * The game ID, or an empty string if the stream doesn't currently have a game.
         */
        get: function () {
            return this._data.game_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "gameName", {
        /**
         * The game name, or an empty string if the stream doesn't currently have a game.
         */
        get: function () {
            return this._data.game_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the game that is being played on the stream.
     *
     * Returns null if the stream doesn't currently have a game.
     */
    HelixStream.prototype.getGame = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._data.game_id ? this._client.helix.games.getGameById(this._data.game_id) : null];
            });
        });
    };
    Object.defineProperty(HelixStream.prototype, "type", {
        /**
         * The type of the stream.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "title", {
        /**
         * The title of the stream.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "viewers", {
        /**
         * The number of viewers the stream currently has.
         */
        get: function () {
            return this._data.viewer_count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "startDate", {
        /**
         * The time when the stream started.
         */
        get: function () {
            return new Date(this._data.started_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "language", {
        /**
         * The language of the stream.
         */
        get: function () {
            return this._data.language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixStream.prototype, "thumbnailUrl", {
        /**
         * The URL of the thumbnail of the stream.
         */
        get: function () {
            return this._data.thumbnail_url;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Builds the thumbnail URL of the stream using the given dimensions.
     *
     * @param width The width of the thumbnail.
     * @param height The height of the thumbnail.
     */
    HelixStream.prototype.getThumbnailUrl = function (width, height) {
        return this._data.thumbnail_url.replace('{width}', width.toString()).replace('{height}', height.toString());
    };
    Object.defineProperty(HelixStream.prototype, "tagIds", {
        /**
         * The IDs of the tags of the stream.
         */
        get: function () {
            var _a;
            return (_a = this._data.tag_ids) !== null && _a !== void 0 ? _a : [];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves the tags of the stream.
     */
    HelixStream.prototype.getTags = function () {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                return [2 /*return*/, this._client.helix.tags.getStreamTagsByIds((_a = this._data.tag_ids) !== null && _a !== void 0 ? _a : [])];
            });
        });
    };
    Object.defineProperty(HelixStream.prototype, "isMature", {
        /**
         * Whether the stream is set to be targeted to mature audiences only.
         */
        get: function () {
            return this._data.is_mature;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixStream.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixStream.prototype, "_client", void 0);
    HelixStream = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixStream', 'id')
    ], HelixStream);
    return HelixStream;
}());
exports.HelixStream = HelixStream;

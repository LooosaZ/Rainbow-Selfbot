import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * The result of a channel search.
 */
var HelixChannelSearchResult = /** @class */ (function () {
    /** @private */
    function HelixChannelSearchResult(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixChannelSearchResult.prototype, "language", {
        /**
         * The language of the channel.
         */
        get: function () {
            return this._data.broadcaster_language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelSearchResult.prototype, "id", {
        /**
         * The ID of the channel.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelSearchResult.prototype, "name", {
        /**
         * The name of the channel.
         */
        get: function () {
            return this._data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelSearchResult.prototype, "displayName", {
        /**
         * The display name of the channel.
         */
        get: function () {
            return this._data.display_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves additional information about the owner of the channel.
     */
    HelixChannelSearchResult.prototype.getUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.id)];
            });
        });
    };
    Object.defineProperty(HelixChannelSearchResult.prototype, "gameId", {
        /**
         * The ID of the game currently played on the channel.
         */
        get: function () {
            return this._data.game_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelSearchResult.prototype, "gameName", {
        /**
         * The name of the game currently played on the channel.
         */
        get: function () {
            return this._data.game_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the game that is being played on the stream.
     */
    HelixChannelSearchResult.prototype.getGame = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.games.getGameById(this._data.game_id)];
            });
        });
    };
    Object.defineProperty(HelixChannelSearchResult.prototype, "isLive", {
        /**
         * Whether the channel is currently live.
         */
        get: function () {
            return this._data.is_live;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelSearchResult.prototype, "tagIds", {
        /**
         * The IDs of the tags set on the channel.
         */
        get: function () {
            return this._data.tag_ids;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves the tags of the channel.
     */
    HelixChannelSearchResult.prototype.getTags = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.tags.getStreamTagsByIds(this._data.tag_ids)];
            });
        });
    };
    Object.defineProperty(HelixChannelSearchResult.prototype, "thumbnailUrl", {
        /**
         * The thumbnail URL of the stream.
         */
        get: function () {
            return this._data.thumbnail_url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelSearchResult.prototype, "startDate", {
        /**
         * The start date of the stream. Returns `null` if the stream is not live.
         */
        get: function () {
            return this._data.is_live ? new Date(this._data.started_at) : null;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], HelixChannelSearchResult.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixChannelSearchResult.prototype, "_client", void 0);
    HelixChannelSearchResult = __decorate([
        rtfm('twitch', 'HelixChannelSearchResult', 'id')
    ], HelixChannelSearchResult);
    return HelixChannelSearchResult;
}());
export { HelixChannelSearchResult };

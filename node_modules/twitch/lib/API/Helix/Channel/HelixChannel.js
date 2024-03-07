"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixChannel = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A Twitch channel.
 */
var HelixChannel = /** @class */ (function () {
    /** @private */
    function HelixChannel(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixChannel.prototype, "id", {
        /**
         * The ID of the channel.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannel.prototype, "name", {
        /**
         * The name of the channel.
         */
        get: function () {
            return this._data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannel.prototype, "displayName", {
        /**
         * The display name of the channel.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannel.prototype, "language", {
        /**
         * The language of the channel.
         */
        get: function () {
            return this._data.broadcaster_language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannel.prototype, "gameId", {
        /**
         * The ID of the game currently played on the channel.
         */
        get: function () {
            return this._data.game_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannel.prototype, "gameName", {
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
    HelixChannel.prototype.getGame = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.games.getGameById(this._data.game_id)];
            });
        });
    };
    Object.defineProperty(HelixChannel.prototype, "title", {
        /**
         * The title of the channel.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannel.prototype, "delay", {
        /**
         * The stream delay of the channel, in seconds.
         */
        get: function () {
            return this._data.delay;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixChannel.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixChannel.prototype, "_client", void 0);
    HelixChannel = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixChannel', 'id')
    ], HelixChannel);
    return HelixChannel;
}());
exports.HelixChannel = HelixChannel;

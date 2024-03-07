"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixGame = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A game as displayed on Twitch.
 */
var HelixGame = /** @class */ (function () {
    /** @private */
    function HelixGame(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixGame.prototype, "id", {
        /**
         * The ID of the game.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixGame.prototype, "name", {
        /**
         * The name of the game.
         */
        get: function () {
            return this._data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixGame.prototype, "boxArtUrl", {
        /**
         * The URL of the box art of the game.
         */
        get: function () {
            return this._data.box_art_url;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves streams that are currently playing the game.
     */
    HelixGame.prototype.getStreams = function (pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.streams.getStreams(tslib_1.__assign(tslib_1.__assign({}, pagination), { game: this._data.id }))];
            });
        });
    };
    /**
     * Creates a paginator for streams that are currently playing the game.
     */
    HelixGame.prototype.getStreamsPaginated = function () {
        return this._client.helix.streams.getStreamsPaginated({ game: this._data.id });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixGame.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixGame.prototype, "_client", void 0);
    HelixGame = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixGame', 'id')
    ], HelixGame);
    return HelixGame;
}());
exports.HelixGame = HelixGame;

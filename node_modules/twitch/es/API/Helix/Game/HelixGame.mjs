import { __assign, __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
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
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.streams.getStreams(__assign(__assign({}, pagination), { game: this._data.id }))];
            });
        });
    };
    /**
     * Creates a paginator for streams that are currently playing the game.
     */
    HelixGame.prototype.getStreamsPaginated = function () {
        return this._client.helix.streams.getStreamsPaginated({ game: this._data.id });
    };
    __decorate([
        Enumerable(false)
    ], HelixGame.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixGame.prototype, "_client", void 0);
    HelixGame = __decorate([
        rtfm('twitch', 'HelixGame', 'id')
    ], HelixGame);
    return HelixGame;
}());
export { HelixGame };

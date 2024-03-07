"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixBitsLeaderboardEntry = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A Bits leaderboard entry.
 */
var HelixBitsLeaderboardEntry = /** @class */ (function () {
    /** @private */
    function HelixBitsLeaderboardEntry(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixBitsLeaderboardEntry.prototype, "userId", {
        /**
         * The ID of the user on the leaderboard.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBitsLeaderboardEntry.prototype, "userName", {
        /**
         * The name of the user on the leaderboard.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBitsLeaderboardEntry.prototype, "userDisplayName", {
        /**
         * The display name of the user on the leaderboard.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBitsLeaderboardEntry.prototype, "rank", {
        /**
         * The position of the user on the leaderboard.
         */
        get: function () {
            return this._data.rank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBitsLeaderboardEntry.prototype, "amount", {
        /**
         * The amount of bits used in the given period of time.
         */
        get: function () {
            return this._data.score;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves the user of entry on the leaderboard.
     */
    HelixBitsLeaderboardEntry.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixBitsLeaderboardEntry.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixBitsLeaderboardEntry.prototype, "_client", void 0);
    HelixBitsLeaderboardEntry = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixBitsLeaderboardEntry', 'userId')
    ], HelixBitsLeaderboardEntry);
    return HelixBitsLeaderboardEntry;
}());
exports.HelixBitsLeaderboardEntry = HelixBitsLeaderboardEntry;

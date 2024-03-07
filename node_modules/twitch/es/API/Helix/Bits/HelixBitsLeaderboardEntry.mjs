import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
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
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    __decorate([
        Enumerable(false)
    ], HelixBitsLeaderboardEntry.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixBitsLeaderboardEntry.prototype, "_client", void 0);
    HelixBitsLeaderboardEntry = __decorate([
        rtfm('twitch', 'HelixBitsLeaderboardEntry', 'userId')
    ], HelixBitsLeaderboardEntry);
    return HelixBitsLeaderboardEntry;
}());
export { HelixBitsLeaderboardEntry };

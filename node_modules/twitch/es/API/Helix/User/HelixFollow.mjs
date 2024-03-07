import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * A relation of a user following a broadcaster.
 */
var HelixFollow = /** @class */ (function () {
    /** @private */
    function HelixFollow(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixFollow.prototype, "userId", {
        /**
         * The user ID of the following user.
         */
        get: function () {
            return this._data.from_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixFollow.prototype, "userName", {
        /**
         * The name of the following user.
         */
        get: function () {
            return this._data.from_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixFollow.prototype, "userDisplayName", {
        /**
         * The display name of the following user.
         */
        get: function () {
            return this._data.from_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves the data of the following user.
     */
    HelixFollow.prototype.getUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.from_id)];
            });
        });
    };
    Object.defineProperty(HelixFollow.prototype, "followedUserId", {
        /**
         * The user ID of the followed broadcaster.
         */
        get: function () {
            return this._data.to_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixFollow.prototype, "followedUserName", {
        /**
         * The name of the followed user.
         */
        get: function () {
            return this._data.to_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixFollow.prototype, "followedUserDisplayName", {
        /**
         * The display name of the followed user.
         */
        get: function () {
            return this._data.to_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves the data of the followed broadcaster.
     */
    HelixFollow.prototype.getFollowedUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.to_id)];
            });
        });
    };
    Object.defineProperty(HelixFollow.prototype, "followDate", {
        /**
         * The date when the user followed the broadcaster.
         */
        get: function () {
            return new Date(this._data.followed_at);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], HelixFollow.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixFollow.prototype, "_client", void 0);
    HelixFollow = __decorate([
        rtfm('twitch', 'HelixFollow')
    ], HelixFollow);
    return HelixFollow;
}());
export { HelixFollow };

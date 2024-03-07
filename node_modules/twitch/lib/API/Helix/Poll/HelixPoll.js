"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixPoll = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var HelixPollChoice_1 = require("./HelixPollChoice");
var twitch_common_1 = require("twitch-common");
/**
 * A channel poll.
 */
var HelixPoll = /** @class */ (function () {
    /** @private */
    function HelixPoll(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixPoll.prototype, "id", {
        /**
         * The ID of the poll.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "broadcasterId", {
        /**
         * The ID of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the broadcaster.
     */
    HelixPoll.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Object.defineProperty(HelixPoll.prototype, "title", {
        /**
         * The title of the poll.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "isBitsVotingEnabled", {
        /**
         * Whether voting with bits is enabled for the poll.
         */
        get: function () {
            return this._data.bits_voting_enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "bitsPerVote", {
        /**
         * The amount of bits that a vote costs.
         */
        get: function () {
            return this._data.bits_per_vote;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "isChannelPointsVotingEnabled", {
        /**
         * Whether voting with channel points is enabled for the poll.
         */
        get: function () {
            return this._data.channel_points_voting_enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "channelPointsPerVote", {
        /**
         * The amount of channel points that a vote costs.
         */
        get: function () {
            return this._data.channel_points_per_vote;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "status", {
        /**
         * The status of the poll.
         */
        get: function () {
            return this._data.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "durationInSeconds", {
        /**
         * The duration of the poll, in seconds.
         */
        get: function () {
            return this._data.duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "startDate", {
        /**
         * The date when the poll started.
         */
        get: function () {
            return new Date(this._data.started_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "endDate", {
        /**
         * The date when the poll ended or will end.
         */
        get: function () {
            return new Date(this.startDate.getTime() + this._data.duration * 1000);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPoll.prototype, "choices", {
        /**
         * The choices of the poll.
         */
        get: function () {
            return this._data.choices.map(function (data) { return new HelixPollChoice_1.HelixPollChoice(data); });
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixPoll.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixPoll.prototype, "_client", void 0);
    HelixPoll = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixPoll', 'id')
    ], HelixPoll);
    return HelixPoll;
}());
exports.HelixPoll = HelixPoll;

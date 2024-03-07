"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixPollChoice = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A choice in a channel poll.
 */
var HelixPollChoice = /** @class */ (function () {
    /** @private */
    function HelixPollChoice(data) {
        this._data = data;
    }
    Object.defineProperty(HelixPollChoice.prototype, "id", {
        /**
         * The ID of the choice.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPollChoice.prototype, "title", {
        /**
         * The title of the choice.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPollChoice.prototype, "totalVotes", {
        /**
         * The total votes the choice received.
         */
        get: function () {
            return this._data.votes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPollChoice.prototype, "channelPointsVotes", {
        /**
         * The votes the choice received by spending channel points.
         */
        get: function () {
            return this._data.channel_points_votes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPollChoice.prototype, "bitsVotes", {
        /**
         * The votes the choice received by spending bits.
         */
        get: function () {
            return this._data.bits_votes;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixPollChoice.prototype, "_data", void 0);
    HelixPollChoice = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixPollChoice', 'id')
    ], HelixPollChoice);
    return HelixPollChoice;
}());
exports.HelixPollChoice = HelixPollChoice;

import { __decorate } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
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
    __decorate([
        Enumerable(false)
    ], HelixPollChoice.prototype, "_data", void 0);
    HelixPollChoice = __decorate([
        rtfm('twitch', 'HelixPollChoice', 'id')
    ], HelixPollChoice);
    return HelixPollChoice;
}());
export { HelixPollChoice };

import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * A user that took part in a prediction.
 */
var HelixPredictor = /** @class */ (function () {
    /** @private */
    function HelixPredictor(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixPredictor.prototype, "userId", {
        /**
         * The user ID of the predictor.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPredictor.prototype, "userName", {
        /**
         * The name of the predictor.
         */
        get: function () {
            return this._data.login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPredictor.prototype, "userDisplayName", {
        /**
         * The display name of the predictor.
         */
        get: function () {
            return this._data.name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the predictor.
     */
    HelixPredictor.prototype.getUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.id)];
            });
        });
    };
    Object.defineProperty(HelixPredictor.prototype, "channelPointsUsed", {
        /**
         * The amount of channel points the predictor used for the prediction.
         */
        get: function () {
            return this._data.channel_points_used;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPredictor.prototype, "channelPointsWon", {
        /**
         * The amount of channel points the predictor won for the prediction, or null if the prediction is not resolved yet, was cancelled or lost.
         */
        get: function () {
            return this._data.channel_points_won;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], HelixPredictor.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixPredictor.prototype, "_client", void 0);
    HelixPredictor = __decorate([
        rtfm('twitch', 'HelixPredictor', 'userId')
    ], HelixPredictor);
    return HelixPredictor;
}());
export { HelixPredictor };

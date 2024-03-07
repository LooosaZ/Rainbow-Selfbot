"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixPredictionOutcome = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var HelixPredictor_1 = require("./HelixPredictor");
var twitch_common_1 = require("twitch-common");
/**
 * A possible outcome in a channel prediction.
 */
var HelixPredictionOutcome = /** @class */ (function () {
    /** @private */
    function HelixPredictionOutcome(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixPredictionOutcome.prototype, "id", {
        /**
         * The ID of the outcome.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPredictionOutcome.prototype, "title", {
        /**
         * The title of the outcome.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPredictionOutcome.prototype, "users", {
        /**
         * The number of users that guessed the outcome.
         */
        get: function () {
            return this._data.users;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPredictionOutcome.prototype, "totalChannelPoints", {
        /**
         * The total number of channel points that were spent on guessing the outcome.
         */
        get: function () {
            return this._data.channel_points;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPredictionOutcome.prototype, "color", {
        /**
         * The color of the outcome.
         */
        get: function () {
            return this._data.color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPredictionOutcome.prototype, "topPredictors", {
        /**
         * The top predictors of the outcome.
         */
        get: function () {
            var _this = this;
            var _a, _b;
            return (_b = (_a = this._data.top_predictors) === null || _a === void 0 ? void 0 : _a.map(function (data) { return new HelixPredictor_1.HelixPredictor(data, _this._client); })) !== null && _b !== void 0 ? _b : [];
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixPredictionOutcome.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixPredictionOutcome.prototype, "_client", void 0);
    HelixPredictionOutcome = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixPredictionOutcome', 'id')
    ], HelixPredictionOutcome);
    return HelixPredictionOutcome;
}());
exports.HelixPredictionOutcome = HelixPredictionOutcome;

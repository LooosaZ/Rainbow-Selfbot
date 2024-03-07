"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixPrediction = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var HelixPredictionOutcome_1 = require("./HelixPredictionOutcome");
var twitch_common_1 = require("twitch-common");
/**
 * A channel prediction.
 */
var HelixPrediction = /** @class */ (function () {
    /** @private */
    function HelixPrediction(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixPrediction.prototype, "id", {
        /**
         * The ID of the prediction.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPrediction.prototype, "broadcasterId", {
        /**
         * The ID of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPrediction.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPrediction.prototype, "broadcasterDisplayName", {
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
    HelixPrediction.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Object.defineProperty(HelixPrediction.prototype, "title", {
        /**
         * The title of the prediction.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPrediction.prototype, "status", {
        /**
         * The status of the prediction.
         */
        get: function () {
            return this._data.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPrediction.prototype, "autoLockAfter", {
        /**
         * The time after which the prediction will be automatically locked, in seconds from creation.
         */
        get: function () {
            return this._data.prediction_window;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPrediction.prototype, "creationDate", {
        /**
         * The date when the prediction started.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPrediction.prototype, "endDate", {
        /**
         * The date when the prediction ended, or null if it didn't end yet.
         */
        get: function () {
            return this._data.ended_at ? new Date(this._data.ended_at) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPrediction.prototype, "lockDate", {
        /**
         * The date when the prediction was locked, or null if it wasn't locked yet.
         */
        get: function () {
            return this._data.locked_at ? new Date(this._data.locked_at) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixPrediction.prototype, "outcomes", {
        /**
         * The possible outcomes of the prediction.
         */
        get: function () {
            var _this = this;
            return this._data.outcomes.map(function (data) { return new HelixPredictionOutcome_1.HelixPredictionOutcome(data, _this._client); });
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixPrediction.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixPrediction.prototype, "_client", void 0);
    HelixPrediction = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixPrediction', 'id')
    ], HelixPrediction);
    return HelixPrediction;
}());
exports.HelixPrediction = HelixPrediction;

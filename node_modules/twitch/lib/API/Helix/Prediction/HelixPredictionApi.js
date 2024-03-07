"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixPredictionApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixPrediction_1 = require("./HelixPrediction");
/**
 * The Helix API methods that deal with predictions.
 *
 * Can be accessed using `client.helix.predictions` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: predictions } = await api.helix.predictions.getPredictions('61369223');
 * ```
 */
var HelixPredictionApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixPredictionApi, _super);
    function HelixPredictionApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of predictions for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve predictions for.
     * @param pagination
     *
     * @expandParams
     */
    HelixPredictionApi.prototype.getPredictions = function (broadcaster, pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'predictions',
                            scope: 'channel:read:predictions',
                            query: tslib_1.__assign({ broadcaster_id: twitch_common_1.extractUserId(broadcaster) }, HelixPagination_1.makePaginationQuery(pagination))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixPrediction_1.HelixPrediction, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for predictions for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve predictions for.
     */
    HelixPredictionApi.prototype.getPredictionsPaginated = function (broadcaster) {
        var _this = this;
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'predictions',
            scope: 'channel:read:predictions',
            query: {
                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
            }
        }, this._client, function (data) { return new HelixPrediction_1.HelixPrediction(data, _this._client); }, 20);
    };
    /**
     * Retrieves predictions by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the predictions for.
     * @param ids The IDs of the predictions.
     */
    HelixPredictionApi.prototype.getPredictionsByIds = function (broadcaster, ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!ids.length) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'predictions',
                                scope: 'channel:read:predictions',
                                query: {
                                    broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                    id: ids
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixPrediction_1.HelixPrediction(data, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves a prediction by ID.
     *
     * @param broadcaster The broadcaster to retrieve the prediction for.
     * @param id The ID of the prediction.
     */
    HelixPredictionApi.prototype.getPredictionById = function (broadcaster, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var predictions;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPredictionsByIds(broadcaster, [id])];
                    case 1:
                        predictions = _a.sent();
                        return [2 /*return*/, predictions.length ? predictions[0] : null];
                }
            });
        });
    };
    /**
     * Creates a new prediction.
     *
     * @param broadcaster The broadcaster to create the prediction for.
     * @param data
     *
     * @expandParams
     */
    HelixPredictionApi.prototype.createPrediction = function (broadcaster, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'predictions',
                            method: 'POST',
                            scope: 'channel:manage:predictions',
                            jsonBody: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                title: data.title,
                                outcomes: data.outcomes.map(function (title) { return ({ title: title }); }),
                                prediction_window: data.autoLockAfter
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixPrediction_1.HelixPrediction(result.data[0], this._client)];
                }
            });
        });
    };
    /**
     * Locks a prediction.
     *
     * @param broadcaster The broadcaster to lock the prediction for.
     * @param id The ID of the prediction to lock.
     */
    HelixPredictionApi.prototype.lockPrediction = function (broadcaster, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._endPrediction(broadcaster, id, 'LOCKED')];
            });
        });
    };
    /**
     * Resolves a prediction.
     *
     * @param broadcaster The broadcaster to resolve the prediction for.
     * @param id The ID of the prediction to resolve.
     * @param outcomeId The ID of the winning outcome.
     */
    HelixPredictionApi.prototype.resolvePrediction = function (broadcaster, id, outcomeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._endPrediction(broadcaster, id, 'RESOLVED', outcomeId)];
            });
        });
    };
    /**
     * Cancels a prediction.
     *
     * @param broadcaster The broadcaster to cancel the prediction for.
     * @param id The ID of the prediction to cancel.
     */
    HelixPredictionApi.prototype.cancelPrediction = function (broadcaster, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._endPrediction(broadcaster, id, 'LOCKED')];
            });
        });
    };
    HelixPredictionApi.prototype._endPrediction = function (broadcaster, id, status, outcomeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'predictions',
                            method: 'PATCH',
                            scope: 'channel:manage:predictions',
                            jsonBody: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                id: id,
                                status: status,
                                winning_outcome_id: outcomeId
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixPrediction_1.HelixPrediction(result.data[0], this._client)];
                }
            });
        });
    };
    HelixPredictionApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixPredictionApi')
    ], HelixPredictionApi);
    return HelixPredictionApi;
}(BaseApi_1.BaseApi));
exports.HelixPredictionApi = HelixPredictionApi;

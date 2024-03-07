"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixPollApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixPoll_1 = require("./HelixPoll");
/**
 * The Helix API methods that deal with polls.
 *
 * Can be accessed using `client.helix.polls` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: polls } = await api.helix.polls.getPolls('61369223');
 * ```
 */
var HelixPollApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixPollApi, _super);
    function HelixPollApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of polls for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve polls for.
     * @param pagination
     *
     * @expandParams
     */
    HelixPollApi.prototype.getPolls = function (broadcaster, pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'polls',
                            scope: 'channel:read:polls',
                            query: tslib_1.__assign({ broadcaster_id: twitch_common_1.extractUserId(broadcaster) }, HelixPagination_1.makePaginationQuery(pagination))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixPoll_1.HelixPoll, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for polls for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve polls for.
     */
    HelixPollApi.prototype.getPollsPaginated = function (broadcaster) {
        var _this = this;
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'polls',
            scope: 'channel:read:polls',
            query: {
                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
            }
        }, this._client, function (data) { return new HelixPoll_1.HelixPoll(data, _this._client); }, 20);
    };
    /**
     * Retrieves polls by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the polls for.
     * @param ids The IDs of the polls.
     */
    HelixPollApi.prototype.getPollsByIds = function (broadcaster, ids) {
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
                                url: 'polls',
                                scope: 'channel:read:polls',
                                query: {
                                    broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                    id: ids
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixPoll_1.HelixPoll(data, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves a poll by ID.
     *
     * @param broadcaster The broadcaster to retrieve the poll for.
     * @param id The ID of the poll.
     */
    HelixPollApi.prototype.getPollById = function (broadcaster, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var polls;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPollsByIds(broadcaster, [id])];
                    case 1:
                        polls = _a.sent();
                        return [2 /*return*/, polls.length ? polls[0] : null];
                }
            });
        });
    };
    /**
     * Creates a new poll.
     *
     * @param broadcaster The broadcaster to create the poll for.
     * @param data
     *
     * @expandParams
     */
    HelixPollApi.prototype.createPoll = function (broadcaster, data) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'polls',
                            method: 'POST',
                            scope: 'channel:manage:polls',
                            jsonBody: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                title: data.title,
                                choices: data.choices.map(function (title) { return ({ title: title }); }),
                                duration: data.duration,
                                bits_voting_enabled: data.bitsPerVote != null,
                                bits_per_vote: (_a = data.bitsPerVote) !== null && _a !== void 0 ? _a : 0,
                                channel_points_voting_enabled: data.channelPointsPerVote != null,
                                channel_points_per_vote: (_b = data.channelPointsPerVote) !== null && _b !== void 0 ? _b : 0
                            }
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, new HelixPoll_1.HelixPoll(result.data[0], this._client)];
                }
            });
        });
    };
    /**
     * Ends a poll.
     *
     * @param broadcaster The broadcaster to end the poll for.
     * @param id The ID of the poll to end.
     * @param showResult Whether to allow the result to be viewed publicly.
     */
    HelixPollApi.prototype.endPoll = function (broadcaster, id, showResult) {
        if (showResult === void 0) { showResult = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'polls',
                            method: 'PATCH',
                            scope: 'channel:manage:polls',
                            jsonBody: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                id: id,
                                status: showResult ? 'TERMINATED' : 'ARCHIVED'
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixPoll_1.HelixPoll(result.data[0], this._client)];
                }
            });
        });
    };
    HelixPollApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixPollApi')
    ], HelixPollApi);
    return HelixPollApi;
}(BaseApi_1.BaseApi));
exports.HelixPollApi = HelixPollApi;

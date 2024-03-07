import { __assign, __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { makePaginationQuery } from "../HelixPagination.mjs";
import { HelixPoll } from "./HelixPoll.mjs";
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
    __extends(HelixPollApi, _super);
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
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'polls',
                            scope: 'channel:read:polls',
                            query: __assign({ broadcaster_id: extractUserId(broadcaster) }, makePaginationQuery(pagination))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixPoll, this._client)];
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
        return new HelixPaginatedRequest({
            url: 'polls',
            scope: 'channel:read:polls',
            query: {
                broadcaster_id: extractUserId(broadcaster)
            }
        }, this._client, function (data) { return new HelixPoll(data, _this._client); }, 20);
    };
    /**
     * Retrieves polls by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the polls for.
     * @param ids The IDs of the polls.
     */
    HelixPollApi.prototype.getPollsByIds = function (broadcaster, ids) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!ids.length) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'polls',
                                scope: 'channel:read:polls',
                                query: {
                                    broadcaster_id: extractUserId(broadcaster),
                                    id: ids
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixPoll(data, _this._client); })];
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
        return __awaiter(this, void 0, Promise, function () {
            var polls;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'polls',
                            method: 'POST',
                            scope: 'channel:manage:polls',
                            jsonBody: {
                                broadcaster_id: extractUserId(broadcaster),
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
                        return [2 /*return*/, new HelixPoll(result.data[0], this._client)];
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
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'polls',
                            method: 'PATCH',
                            scope: 'channel:manage:polls',
                            jsonBody: {
                                broadcaster_id: extractUserId(broadcaster),
                                id: id,
                                status: showResult ? 'TERMINATED' : 'ARCHIVED'
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixPoll(result.data[0], this._client)];
                }
            });
        });
    };
    HelixPollApi = __decorate([
        rtfm('twitch', 'HelixPollApi')
    ], HelixPollApi);
    return HelixPollApi;
}(BaseApi));
export { HelixPollApi };

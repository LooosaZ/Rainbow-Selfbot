import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { HttpStatusCodeError, TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { HelixPaginatedRequestWithTotal } from "../HelixPaginatedRequestWithTotal.mjs";
import { createPaginatedResult, createPaginatedResultWithTotal } from "../HelixPaginatedResult.mjs";
import { HelixSubscription } from "./HelixSubscription.mjs";
import { HelixSubscriptionEvent } from "./HelixSubscriptionEvent.mjs";
import { HelixUserSubscription } from "./HelixUserSubscription.mjs";
/**
 * The Helix API methods that deal with subscriptions.
 *
 * Can be accessed using `client.helix.subscriptions` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const subscription = await api.helix.subscriptions.getSubscriptionForUser('61369223', '125328655');
 * ```
 */
var HelixSubscriptionApi = /** @class */ (function (_super) {
    __extends(HelixSubscriptionApi, _super);
    function HelixSubscriptionApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of all subscriptions to a given broadcaster.
     *
     * @param broadcaster The broadcaster to list subscriptions to.
     */
    HelixSubscriptionApi.prototype.getSubscriptions = function (broadcaster) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            url: 'subscriptions',
                            scope: 'channel:read:subscriptions',
                            type: TwitchApiCallType.Helix,
                            query: {
                                broadcaster_id: extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResultWithTotal(result, HelixSubscription, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for all subscriptions to a given broadcaster.
     *
     * @param broadcaster The broadcaster to list subscriptions to.
     */
    HelixSubscriptionApi.prototype.getSubscriptionsPaginated = function (broadcaster) {
        var _this = this;
        return new HelixPaginatedRequestWithTotal({
            url: 'subscriptions',
            scope: 'channel:read:subscriptions',
            query: {
                broadcaster_id: extractUserId(broadcaster)
            }
        }, this._client, function (data) { return new HelixSubscription(data, _this._client); });
    };
    /**
     * Retrieves the subset of the given user list that is subscribed to the given broadcaster.
     *
     * @param broadcaster The broadcaster to find subscriptions to.
     * @param users The users that should be checked for subscriptions.
     */
    HelixSubscriptionApi.prototype.getSubscriptionsForUsers = function (broadcaster, users) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            url: 'subscriptions',
                            scope: 'channel:read:subscriptions',
                            type: TwitchApiCallType.Helix,
                            query: {
                                broadcaster_id: extractUserId(broadcaster),
                                user_id: users.map(extractUserId)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixSubscription(data, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves the subscription data for a given user to a given broadcaster.
     *
     * This checks with the authorization of a broadcaster.
     * If you only have the authorization of a user, check {@HelixSubscriptionApi#checkUserSubscription}.
     *
     * @param broadcaster The broadcaster to check.
     * @param user The user to check.
     */
    HelixSubscriptionApi.prototype.getSubscriptionForUser = function (broadcaster, user) {
        return __awaiter(this, void 0, Promise, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSubscriptionsForUsers(broadcaster, [user])];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, list.length ? list[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the most recent subscription events for a given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve subscription events for.
     */
    HelixSubscriptionApi.prototype.getSubscriptionEventsForBroadcaster = function (broadcaster) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getSubscriptionEvents('broadcaster_id', extractUserId(broadcaster))];
            });
        });
    };
    /**
     * Creates a paginator for the recent subscription events for a given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve subscription events for.
     */
    HelixSubscriptionApi.prototype.getSubscriptionEventsForBroadcasterPaginated = function (broadcaster) {
        var _this = this;
        return new HelixPaginatedRequest({
            url: 'subscriptions/events',
            scope: 'channel:read:subscriptions',
            query: {
                broadcaster_id: extractUserId(broadcaster)
            }
        }, this._client, function (data) { return new HelixSubscriptionEvent(data, _this._client); });
    };
    /**
     * Retrieves a single subscription event by ID.
     *
     * @param id The event ID.
     */
    HelixSubscriptionApi.prototype.getSubscriptionEventById = function (id) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var events;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._getSubscriptionEvents('id', id)];
                    case 1:
                        events = _b.sent();
                        return [2 /*return*/, (_a = events.data[0]) !== null && _a !== void 0 ? _a : null];
                }
            });
        });
    };
    /**
     * Checks if a given user is subscribed to a given broadcaster. Returns null if not subscribed.
     *
     * This checks with the authorization of a user.
     * If you only have the authorization of a broadcaster, check {@HelixSubscriptionApi#getSubscriptionForUser}.
     *
     * @param user The broadcaster to check the user's subscription for.
     * @param broadcaster The user to check.
     */
    HelixSubscriptionApi.prototype.checkUserSubscription = function (user, broadcaster) {
        return __awaiter(this, void 0, Promise, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'subscriptions/user',
                                scope: 'user:read:subscriptions',
                                query: {
                                    broadcaster_id: extractUserId(broadcaster),
                                    user_id: extractUserId(user)
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixUserSubscription(result.data[0], this._client)];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof HttpStatusCodeError && e_1.statusCode === 404) {
                            return [2 /*return*/, null];
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HelixSubscriptionApi.prototype._getSubscriptionEvents = function (by, id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'subscriptions/events',
                            scope: 'channel:read:subscriptions',
                            query: (_a = {},
                                _a[by] = id,
                                _a)
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixSubscriptionEvent, this._client)];
                }
            });
        });
    };
    HelixSubscriptionApi = __decorate([
        rtfm('twitch', 'HelixSubscriptionApi')
    ], HelixSubscriptionApi);
    return HelixSubscriptionApi;
}(BaseApi));
export { HelixSubscriptionApi };

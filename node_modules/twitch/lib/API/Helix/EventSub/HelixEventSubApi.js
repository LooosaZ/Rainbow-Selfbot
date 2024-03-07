"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixEventSubApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequestWithTotal_1 = require("../HelixPaginatedRequestWithTotal");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixEventSubSubscription_1 = require("./HelixEventSubSubscription");
/**
 * The API methods that deal with WebHooks.
 *
 * Can be accessed using `client.helix.eventSub` on an {@ApiClient} instance.
 *
 * ## Before using these methods...
 *
 * All of the methods in this class assume that you are already running a working EventSub listener at the given callback URL.
 *
 * If you don't already have one, we recommend use of the `twitch-eventsub` library, which handles subscribing and unsubscribing to these topics automatically.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * await api.helix.eventSub.subscribeToUserFollowsTo('125328655', { callbackUrl: 'https://example.com' });
 * ```
 */
var HelixEventSubApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixEventSubApi, _super);
    function HelixEventSubApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the current WebHook subscriptions for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param pagination
     *
     * @expandParams
     */
    HelixEventSubApi.prototype.getSubscriptions = function (pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'eventsub/subscriptions',
                            query: HelixPagination_1.makePaginationQuery(pagination)
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResultWithTotal(result, HelixEventSubSubscription_1.HelixEventSubSubscription, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for the current WebHook subscriptions for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     */
    HelixEventSubApi.prototype.getSubscriptionsPaginated = function () {
        var _this = this;
        return new HelixPaginatedRequestWithTotal_1.HelixPaginatedRequestWithTotal({
            url: 'eventsub/subscriptions'
        }, this._client, function (data) { return new HelixEventSubSubscription_1.HelixEventSubSubscription(data, _this._client); });
    };
    /**
     * Retrieves the current WebHook subscriptions with the given status for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param status The status of the subscriptions to retrieve.
     * @param pagination
     *
     * @expandParams
     */
    HelixEventSubApi.prototype.getSubscriptionsForStatus = function (status, pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'eventsub/subscriptions',
                            query: tslib_1.__assign(tslib_1.__assign({}, HelixPagination_1.makePaginationQuery(pagination)), { status: status })
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResultWithTotal(result, HelixEventSubSubscription_1.HelixEventSubSubscription, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for the current WebHook subscriptions with the given status for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param status The status of the subscriptions to retrieve.
     */
    HelixEventSubApi.prototype.getSubscriptionsForStatusPaginated = function (status) {
        var _this = this;
        return new HelixPaginatedRequestWithTotal_1.HelixPaginatedRequestWithTotal({
            url: 'eventsub/subscriptions',
            query: { status: status }
        }, this._client, function (data) { return new HelixEventSubSubscription_1.HelixEventSubSubscription(data, _this._client); });
    };
    /**
     * Retrieves the current WebHook subscriptions with the given type for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param type The type of the subscriptions to retrieve.
     * @param pagination
     *
     * @expandParams
     */
    HelixEventSubApi.prototype.getSubscriptionsForType = function (type, pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'eventsub/subscriptions',
                            query: tslib_1.__assign(tslib_1.__assign({}, HelixPagination_1.makePaginationQuery(pagination)), { type: type })
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResultWithTotal(result, HelixEventSubSubscription_1.HelixEventSubSubscription, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for the current WebHook subscriptions with the given type for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param type The type of the subscriptions to retrieve.
     */
    HelixEventSubApi.prototype.getSubscriptionsForTypePaginated = function (type) {
        var _this = this;
        return new HelixPaginatedRequestWithTotal_1.HelixPaginatedRequestWithTotal({
            url: 'eventsub/subscriptions',
            query: { type: type }
        }, this._client, function (data) { return new HelixEventSubSubscription_1.HelixEventSubSubscription(data, _this._client); });
    };
    /**
     * Sends an arbitrary request to subscribe to an event.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param type The type of the event.
     * @param version The version of the event.
     * @param condition The condition of the subscription.
     * @param transport The transport of the subscription.
     */
    HelixEventSubApi.prototype.createSubscription = function (type, version, condition, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'eventsub/subscriptions',
                            method: 'POST',
                            jsonBody: {
                                type: type,
                                version: version,
                                condition: condition,
                                transport: transport
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixEventSubSubscription_1.HelixEventSubSubscription(result.data[0], this._client)];
                }
            });
        });
    };
    /**
     * Deletes a subscription.
     *
     * @param id The ID of the subscription.
     */
    HelixEventSubApi.prototype.deleteSubscription = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'eventsub/subscriptions',
                            method: 'DELETE',
                            query: {
                                id: id
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes *all* subscriptions.
     */
    HelixEventSubApi.prototype.deleteAllSubscriptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._deleteSubscriptionsWithCondition()];
            });
        });
    };
    /**
     * Deletes all broken subscriptions, i.e. all that are not enabled or pending verification.
     */
    HelixEventSubApi.prototype.deleteBrokenSubscriptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._deleteSubscriptionsWithCondition(function (sub) { return sub.status !== 'enabled' && sub.status !== 'webhook_callback_verification_pending'; })];
            });
        });
    };
    /**
     * Subscribe to events that represent a stream going live.
     *
     * @param broadcaster The broadcaster you want to listen to online events for.
     * @param transport The transport options
     */
    HelixEventSubApi.prototype.subscribeToStreamOnlineEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('stream.online', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a stream going offline.
     *
     * @param broadcaster The broadcaster you want to listen to online events for.
     * @param transport The transport options
     */
    HelixEventSubApi.prototype.subscribeToStreamOfflineEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('stream.offline', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a channel updating their metadata.
     *
     * @param broadcaster The broadcaster you want to listen to update events for.
     * @param transport The transport options
     */
    HelixEventSubApi.prototype.subscribeToChannelUpdateEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.update', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user following a channel.
     *
     * @param broadcaster  The broadcaster you want to listen to follow events for.
     * @param transport The transport options
     */
    HelixEventSubApi.prototype.subscribeToChannelFollowEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.follow', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user subscribing to a channel.
     *
     * @param broadcaster The broadcaster you want to listen to subscribe events for.
     * @param transport The transport options
     */
    HelixEventSubApi.prototype.subscribeToChannelSubscriptionEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.subscribe', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user gifting another user a subscription to a channel.
     *
     * @param broadcaster The broadcaster you want to listen to subscription gift events for.
     * @param transport The transport options
     */
    HelixEventSubApi.prototype.subscribeToChannelSubscriptionGiftEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.subscription.gift', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user's subscription to a channel being announced.
     *
     * @param broadcaster The broadcaster you want to listen to subscription message events for.
     * @param transport The transport options
     */
    HelixEventSubApi.prototype.subscribeToChannelSubscriptionMessageEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.subscription.message', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user's subscription to a channel ending.
     *
     * @param broadcaster The broadcaster you want to listen to subscription end events for.
     * @param transport The transport options
     */
    HelixEventSubApi.prototype.subscribeToChannelSubscriptionEndEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.subscription.end', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user cheering bits to a channel.
     *
     * @param broadcaster The broadcaster you want to listen to cheer events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelCheerEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.cheer', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user being banned in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to ban events for.
     * @param transport The transport option.
     */
    HelixEventSubApi.prototype.subscribeToChannelBanEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.ban', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user being unbanned in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to unban events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelUnbanEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.unban', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a moderator being added to a channel.
     *
     * @param broadcaster The broadcaster you want to listen for moderator add events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelModeratorAddEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.moderator.add', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a moderator being removed from a channel.
     *
     * @param broadcaster The broadcaster you want to listen for moderator remove events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelModeratorRemoveEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.moderator.remove', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a broadcaster raiding another broadcaster.
     *
     * @param broadcaster The broadcaster you want to listen to outgoing raid events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRaidEventsFrom = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.raid', '1', { from_broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a broadcaster being raided by another broadcaster.
     *
     * @param broadcaster The broadcaster you want to listen to incoming raid events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRaidEventsTo = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.raid', '1', { to_broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a Channel Points reward being added to a channel.
     *
     * @param broadcaster The broadcaster you want to listen to reward add events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRewardAddEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.channel_points_custom_reward.add', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a Channel Points reward being updated in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to reward update events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRewardUpdateEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.channel_points_custom_reward.update', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a specific Channel Points reward being updated.
     *
     * @param broadcaster The broadcaster you want to listen to reward update events for.
     * @param rewardId The ID of the reward you want to listen to update events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRewardUpdateEventsForReward = function (broadcaster, rewardId, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.channel_points_custom_reward.update', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster), reward_id: rewardId }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a Channel Points reward being removed from a channel.
     *
     * @param broadcaster The broadcaster you want to listen to reward remove events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRewardRemoveEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.channel_points_custom_reward.remove', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a specific Channel Points reward being removed from a channel.
     *
     * @param broadcaster The broadcaster you want to listen to reward remove events for.
     * @param rewardId The ID of the reward you want to listen to remove events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRewardRemoveEventsForReward = function (broadcaster, rewardId, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.channel_points_custom_reward.remove', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster), reward_id: rewardId }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a Channel Points reward being redeemed.
     *
     * @param broadcaster The broadcaster you want to listen to redemption events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRedemptionAddEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.channel_points_custom_reward_redemption.add', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a specific Channel Points reward being redeemed.
     *
     * @param broadcaster The broadcaster you want to listen to redemption events for.
     * @param rewardId The ID of the reward you want to listen to redemption events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRedemptionAddEventsForReward = function (broadcaster, rewardId, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.channel_points_custom_reward_redemption.add', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster), reward_id: rewardId }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a Channel Points redemption being updated.
     *
     * @param broadcaster The broadcaster you want to listen to redemption update events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRedemptionUpdateEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.channel_points_custom_reward_redemption.update', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a specific Channel Points reward's redemption being updated.
     *
     * @param broadcaster The broadcaster you want to listen to redemption update events for.
     * @param rewardId The ID of the reward you want to listen to redemption updates for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelRedemptionUpdateEventsForReward = function (broadcaster, rewardId, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.channel_points_custom_reward_redemption.update', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster), reward_id: rewardId }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a poll starting in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to poll begin events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelPollBeginEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.poll.begin', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a poll being voted on in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to poll progress events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelPollProgressEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.poll.progress', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a poll ending in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to poll end events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelPollEndEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.poll.end', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a prediction starting in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to prediction begin events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelPredictionBeginEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.prediction.begin', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a prediction being voted on in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to prediction preogress events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelPredictionProgressEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.prediction.progress', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a prediction being locked in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to prediction lock events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelPredictionLockEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.prediction.lock', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a prediction ending in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to prediction end events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelPredictionEndEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.prediction.end', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent the beginning of a Hype Train event in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to Hype train begin events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelHypeTrainBeginEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.hype_train.begin', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent progress towards the Hype Train goal.
     *
     * @param broadcaster The broadcaster for which you want to listen to Hype Train progress events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelHypeTrainProgressEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.hype_train.progress', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent the end of a Hype Train event.
     *
     * @param broadcaster The broadcaster for which you want to listen to Hype Train end events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToChannelHypeTrainEndEvents = function (broadcaster, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('channel.hype_train.end', '1', { broadcaster_user_id: twitch_common_1.extractUserId(broadcaster) }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a extension Bits transaction.
     *
     * @param clientId The Client ID for the extension you want to listen to Bits transactions for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToExtensionBitsTransactionCreateEvents = function (clientId, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('extension.bits_transaction.create', '1', { extension_client_id: this._client.clientId }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user revoking their authorization from an application.
     *
     * @param clientId The Client ID for the application you want to listen to authorization revoke events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToUserAuthorizationRevokeEvents = function (clientId, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('user.authorization.revoke', '1', { client_id: clientId }, transport)];
            });
        });
    };
    /**
     * Subscribe to events that represent a user updating their account details.
     *
     * @param user The user you want to listen to user update events for.
     * @param transport The transport options.
     */
    HelixEventSubApi.prototype.subscribeToUserUpdateEvents = function (user, transport) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.createSubscription('user.update', '1', { user_id: twitch_common_1.extractUserId(user) }, transport)];
            });
        });
    };
    HelixEventSubApi.prototype._deleteSubscriptionsWithCondition = function (cond) {
        var e_1, _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var subsPaginator, subsPaginator_1, subsPaginator_1_1, sub, e_1_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        subsPaginator = this.getSubscriptionsPaginated();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, 8, 13]);
                        subsPaginator_1 = tslib_1.__asyncValues(subsPaginator);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, subsPaginator_1.next()];
                    case 3:
                        if (!(subsPaginator_1_1 = _b.sent(), !subsPaginator_1_1.done)) return [3 /*break*/, 6];
                        sub = subsPaginator_1_1.value;
                        if (!(!cond || cond(sub))) return [3 /*break*/, 5];
                        return [4 /*yield*/, sub.unsubscribe()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(subsPaginator_1_1 && !subsPaginator_1_1.done && (_a = subsPaginator_1.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(subsPaginator_1)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    HelixEventSubApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixEventSubApi')
    ], HelixEventSubApi);
    return HelixEventSubApi;
}(BaseApi_1.BaseApi));
exports.HelixEventSubApi = HelixEventSubApi;

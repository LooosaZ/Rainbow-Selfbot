"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixChatApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixChannelEmote_1 = require("./HelixChannelEmote");
var HelixChatBadgeSet_1 = require("./HelixChatBadgeSet");
var HelixEmote_1 = require("./HelixEmote");
var HelixEmoteFromSet_1 = require("./HelixEmoteFromSet");
/**
 * The Helix API methods that deal with chat.
 *
 * Can be accessed using `client.helix.chat` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const rewards = await api.helix.chat.getChannelBadges('125328655');
 * ```
 */
var HelixChatApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixChatApi, _super);
    function HelixChatApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves all global badges.
     */
    HelixChatApi.prototype.getGlobalBadges = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'chat/badges/global'
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixChatBadgeSet_1.HelixChatBadgeSet(data); })];
                }
            });
        });
    };
    /**
     * Retrieves all badges specific to the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve badges for.
     */
    HelixChatApi.prototype.getChannelBadges = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'chat/badges',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixChatBadgeSet_1.HelixChatBadgeSet(data); })];
                }
            });
        });
    };
    /**
     * Retrieves all global emotes.
     */
    HelixChatApi.prototype.getGlobalEmotes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'chat/emotes/global'
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixEmote_1.HelixEmote(data); })];
                }
            });
        });
    };
    /**
     * Retrieves all emotes from a channel.
     *
     * @param channel The channel to retrieve emotes from.
     */
    HelixChatApi.prototype.getChannelEmotes = function (channel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'chat/emotes',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(channel)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixChannelEmote_1.HelixChannelEmote(data, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves all emotes from a list of emote sets.
     *
     * @param setIds The IDs of the emote sets to retrieve emotes from.
     */
    HelixChatApi.prototype.getEmotesFromSets = function (setIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'chat/emotes/set',
                            query: {
                                emote_set_id: setIds
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixEmoteFromSet_1.HelixEmoteFromSet(data, _this._client); })];
                }
            });
        });
    };
    HelixChatApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixChatApi')
    ], HelixChatApi);
    return HelixChatApi;
}(BaseApi_1.BaseApi));
exports.HelixChatApi = HelixChatApi;

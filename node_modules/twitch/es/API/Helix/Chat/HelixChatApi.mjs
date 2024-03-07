import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixChannelEmote } from "./HelixChannelEmote.mjs";
import { HelixChatBadgeSet } from "./HelixChatBadgeSet.mjs";
import { HelixEmote } from "./HelixEmote.mjs";
import { HelixEmoteFromSet } from "./HelixEmoteFromSet.mjs";
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
    __extends(HelixChatApi, _super);
    function HelixChatApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves all global badges.
     */
    HelixChatApi.prototype.getGlobalBadges = function () {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'chat/badges/global'
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixChatBadgeSet(data); })];
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
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'chat/badges',
                            query: {
                                broadcaster_id: extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixChatBadgeSet(data); })];
                }
            });
        });
    };
    /**
     * Retrieves all global emotes.
     */
    HelixChatApi.prototype.getGlobalEmotes = function () {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'chat/emotes/global'
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixEmote(data); })];
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
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'chat/emotes',
                            query: {
                                broadcaster_id: extractUserId(channel)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixChannelEmote(data, _this._client); })];
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
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'chat/emotes/set',
                            query: {
                                emote_set_id: setIds
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixEmoteFromSet(data, _this._client); })];
                }
            });
        });
    };
    HelixChatApi = __decorate([
        rtfm('twitch', 'HelixChatApi')
    ], HelixChatApi);
    return HelixChatApi;
}(BaseApi));
export { HelixChatApi };

import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixChannel } from "./HelixChannel.mjs";
import { HelixChannelEditor } from "./HelixChannelEditor.mjs";
/**
 * The Helix API methods that deal with channels.
 *
 * Can be accessed using `client.helix.channels` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const channel = await api.helix.channels.getChannelInfo('125328655');
 * ```
 */
var HelixChannelApi = /** @class */ (function (_super) {
    __extends(HelixChannelApi, _super);
    function HelixChannelApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the channel data for the given user.
     *
     * @param user The user you want to get channel info for.
     */
    HelixChannelApi.prototype.getChannelInfo = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            var userId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = extractUserId(user);
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'channels',
                                query: {
                                    broadcaster_id: userId
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? new HelixChannel(result.data[0], this._client) : null];
                }
            });
        });
    };
    /**
     * Updates the given user's channel data.
     *
     * @param user The user you want to update channel info for.
     * @param data The channel info to set.
     */
    HelixChannelApi.prototype.updateChannelInfo = function (user, data) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var userId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = extractUserId(user);
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'channels',
                                method: 'PATCH',
                                scope: 'user:edit:broadcast',
                                query: {
                                    broadcaster_id: userId
                                },
                                jsonBody: {
                                    game_id: data.gameId,
                                    broadcaster_language: data.language,
                                    title: data.title,
                                    delay: (_a = data.delay) === null || _a === void 0 ? void 0 : _a.toString()
                                }
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Starts a commercial on a channel.
     *
     * @param broadcaster The broadcaster on whose channel the commercial is started.
     * @param length The length of the commercial, in seconds.
     */
    HelixChannelApi.prototype.startChannelCommercial = function (broadcaster, length) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'channels/commercial',
                            method: 'POST',
                            scope: 'channel:edit:commercial',
                            jsonBody: {
                                broadcaster_id: extractUserId(broadcaster),
                                length: length
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
     * Retrieves a list of users who have editor permissions on your channel.
     */
    HelixChannelApi.prototype.getChannelEditors = function (broadcaster) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'channels/editors',
                            scope: 'channel:read:editors',
                            query: {
                                broadcaster_id: extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixChannelEditor(data, _this._client); })];
                }
            });
        });
    };
    HelixChannelApi = __decorate([
        rtfm('twitch', 'HelixChannelApi')
    ], HelixChannelApi);
    return HelixChannelApi;
}(BaseApi));
export { HelixChannelApi };

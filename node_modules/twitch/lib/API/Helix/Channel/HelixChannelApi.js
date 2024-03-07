"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixChannelApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixChannel_1 = require("./HelixChannel");
var HelixChannelEditor_1 = require("./HelixChannelEditor");
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
    tslib_1.__extends(HelixChannelApi, _super);
    function HelixChannelApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the channel data for the given user.
     *
     * @param user The user you want to get channel info for.
     */
    HelixChannelApi.prototype.getChannelInfo = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = twitch_common_1.extractUserId(user);
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'channels',
                                query: {
                                    broadcaster_id: userId
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? new HelixChannel_1.HelixChannel(result.data[0], this._client) : null];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = twitch_common_1.extractUserId(user);
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'channels/commercial',
                            method: 'POST',
                            scope: 'channel:edit:commercial',
                            jsonBody: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'channels/editors',
                            scope: 'channel:read:editors',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixChannelEditor_1.HelixChannelEditor(data, _this._client); })];
                }
            });
        });
    };
    HelixChannelApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixChannelApi')
    ], HelixChannelApi);
    return HelixChannelApi;
}(BaseApi_1.BaseApi));
exports.HelixChannelApi = HelixChannelApi;

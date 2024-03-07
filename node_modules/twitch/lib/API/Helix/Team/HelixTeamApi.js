"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixTeamApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixTeam_1 = require("./HelixTeam");
var HelixTeamWithUsers_1 = require("./HelixTeamWithUsers");
/**
 * The Helix API methods that deal with teams.
 *
 * Can be accessed using `client.helix.teams` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const tags = await api.helix.teams.getChannelTeams('125328655');
 * ```
 */
var HelixTeamApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixTeamApi, _super);
    function HelixTeamApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of all teams a broadcaster is a member of.
     *
     * @param broadcaster The broadcaster to retrieve the teams of.
     */
    HelixTeamApi.prototype.getTeamsForBroadcaster = function (broadcaster) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'teams/channel',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.map(function (data) { return new HelixTeam_1.HelixTeam(data, _this._client); })) !== null && _b !== void 0 ? _b : []];
                }
            });
        });
    };
    /**
     * Retrieves a team by ID.
     *
     * Returns null if there is no team with the given ID.
     *
     * @param id The ID of the team.
     */
    HelixTeamApi.prototype.getTeamById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'teams',
                                query: {
                                    id: id
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixTeamWithUsers_1.HelixTeamWithUsers(result.data[0], this._client)];
                    case 2:
                        e_1 = _a.sent();
                        // Twitch, please...
                        if (e_1 instanceof twitch_api_call_1.HttpStatusCodeError && e_1.statusCode === 500) {
                            return [2 /*return*/, null];
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a team by name.
     *
     * Returns null if there is no team with the given name.
     *
     * @param name The name of the team.
     */
    HelixTeamApi.prototype.getTeamByName = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'teams',
                                query: {
                                    name: name
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixTeamWithUsers_1.HelixTeamWithUsers(result.data[0], this._client)];
                    case 2:
                        e_2 = _a.sent();
                        // ...but this one is fine
                        if (e_2 instanceof twitch_api_call_1.HttpStatusCodeError && e_2.statusCode === 404) {
                            return [2 /*return*/, null];
                        }
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HelixTeamApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixTeamApi')
    ], HelixTeamApi);
    return HelixTeamApi;
}(BaseApi_1.BaseApi));
exports.HelixTeamApi = HelixTeamApi;

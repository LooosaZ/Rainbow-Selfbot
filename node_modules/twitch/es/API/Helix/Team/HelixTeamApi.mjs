import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { HttpStatusCodeError, TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixTeam } from "./HelixTeam.mjs";
import { HelixTeamWithUsers } from "./HelixTeamWithUsers.mjs";
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
    __extends(HelixTeamApi, _super);
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
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'teams/channel',
                            query: {
                                broadcaster_id: extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.map(function (data) { return new HelixTeam(data, _this._client); })) !== null && _b !== void 0 ? _b : []];
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
        return __awaiter(this, void 0, Promise, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'teams',
                                query: {
                                    id: id
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixTeamWithUsers(result.data[0], this._client)];
                    case 2:
                        e_1 = _a.sent();
                        // Twitch, please...
                        if (e_1 instanceof HttpStatusCodeError && e_1.statusCode === 500) {
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
        return __awaiter(this, void 0, Promise, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'teams',
                                query: {
                                    name: name
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixTeamWithUsers(result.data[0], this._client)];
                    case 2:
                        e_2 = _a.sent();
                        // ...but this one is fine
                        if (e_2 instanceof HttpStatusCodeError && e_2.statusCode === 404) {
                            return [2 /*return*/, null];
                        }
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HelixTeamApi = __decorate([
        rtfm('twitch', 'HelixTeamApi')
    ], HelixTeamApi);
    return HelixTeamApi;
}(BaseApi));
export { HelixTeamApi };

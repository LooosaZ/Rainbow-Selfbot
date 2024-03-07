import { __assign, __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, extractUserName, HellFreezesOverError, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { HelixPaginatedRequestWithTotal } from "../HelixPaginatedRequestWithTotal.mjs";
import { createPaginatedResult, createPaginatedResultWithTotal } from "../HelixPaginatedResult.mjs";
import { makePaginationQuery } from "../HelixPagination.mjs";
import { HelixInstalledExtensionList } from "./Extensions/HelixInstalledExtensionList.mjs";
import { HelixUserExtension } from "./Extensions/HelixUserExtension.mjs";
import { HelixFollow } from "./HelixFollow.mjs";
import { HelixPrivilegedUser } from "./HelixPrivilegedUser.mjs";
import { HelixUser } from "./HelixUser.mjs";
import { HelixUserBlock } from "./HelixUserBlock.mjs";
/** @private */
export var UserLookupType;
(function (UserLookupType) {
    UserLookupType["Id"] = "id";
    UserLookupType["Login"] = "login";
})(UserLookupType || (UserLookupType = {}));
/**
 * The Helix API methods that deal with users.
 *
 * Can be accessed using `client.helix.users` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const user = await api.helix.users.getUserById('125328655');
 * ```
 */
var HelixUserApi = /** @class */ (function (_super) {
    __extends(HelixUserApi, _super);
    function HelixUserApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelixUserApi_1 = HelixUserApi;
    /**
     * Retrieves the user data for the given list of user IDs.
     *
     * @param userIds The user IDs you want to look up.
     */
    HelixUserApi.prototype.getUsersByIds = function (userIds) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getUsers(UserLookupType.Id, userIds.map(extractUserId))];
            });
        });
    };
    /**
     * Retrieves the user data for the given list of user names.
     *
     * @param userNames The user names you want to look up.
     */
    HelixUserApi.prototype.getUsersByNames = function (userNames) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getUsers(UserLookupType.Login, userNames.map(extractUserName))];
            });
        });
    };
    /**
     * Retrieves the user data for the given user ID.
     *
     * @param userId The user ID you want to look up.
     */
    HelixUserApi.prototype.getUserById = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getUsers(UserLookupType.Id, [extractUserId(userId)])];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users.length ? users[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the user data for the given user name.
     *
     * @param userName The user name you want to look up.
     */
    HelixUserApi.prototype.getUserByName = function (userName) {
        return __awaiter(this, void 0, Promise, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getUsers(UserLookupType.Login, [extractUserName(userName)])];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users.length ? users[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the user data of the currently authenticated user.
     *
     * @param withEmail Whether you need the user's email address.
     */
    HelixUserApi.prototype.getMe = function (withEmail) {
        var _a;
        if (withEmail === void 0) { withEmail = false; }
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'users',
                            scope: withEmail ? 'user:read:email' : ''
                        })];
                    case 1:
                        result = _b.sent();
                        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                        if (!((_a = result.data) === null || _a === void 0 ? void 0 : _a.length)) {
                            throw new HellFreezesOverError('Could not get authenticated user');
                        }
                        return [2 /*return*/, new HelixPrivilegedUser(result.data[0], this._client)];
                }
            });
        });
    };
    /**
     * Updates the currently authenticated user's data.
     *
     * @param data The data to update.
     */
    HelixUserApi.prototype.updateUser = function (data) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'users',
                            method: 'PUT',
                            scope: 'user:edit',
                            query: {
                                description: data.description
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixPrivilegedUser(result.data[0], this._client)];
                }
            });
        });
    };
    /**
     * Retrieves a list of follow relations.
     *
     * @param filter Several filtering and pagination parameters. See the {@HelixFollowFilter} documentation.
     */
    HelixUserApi.prototype.getFollows = function (filter) {
        return __awaiter(this, void 0, Promise, function () {
            var query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = HelixUserApi_1._makeFollowsQuery(filter);
                        return [4 /*yield*/, this._client.callApi({
                                url: 'users/follows',
                                type: TwitchApiCallType.Helix,
                                query: query
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResultWithTotal(result, HelixFollow, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for follow relations.
     *
     * @param filter Several filtering and pagination parameters. See the {@HelixFollowFilter} documentation.
     */
    HelixUserApi.prototype.getFollowsPaginated = function (filter) {
        var _this = this;
        var query = HelixUserApi_1._makeFollowsQuery(filter);
        return new HelixPaginatedRequestWithTotal({
            url: 'users/follows',
            query: query
        }, this._client, function (data) { return new HelixFollow(data, _this._client); });
    };
    /**
     * Retrieves the follow relation bewteen a given user and a given broadcaster.
     *
     * @param user The user to retrieve the follow relation for.
     * @param broadcaster The broadcaster to retrieve the follow relation for.
     */
    HelixUserApi.prototype.getFollowFromUserToBroadcaster = function (user, broadcaster) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFollows({ user: user, followedUser: broadcaster })];
                    case 1:
                        result = (_a.sent()).data;
                        return [2 /*return*/, result.length ? result[0] : null];
                }
            });
        });
    };
    /**
     * Checks whether the given user follows the given broadcaster.
     *
     * @param user The user to check the follow for.
     * @param broadcaster The broadcaster to check the follow for.
     */
    HelixUserApi.prototype.userFollowsBroadcaster = function (user, broadcaster) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFollowFromUserToBroadcaster(user, broadcaster)];
                    case 1: return [2 /*return*/, (_a.sent()) !== null];
                }
            });
        });
    };
    /**
     * Creates a new follow from a user to another user.
     *
     * @param fromUser The user to create the follow for.
     * @param toUser The user to follow.
     * @param allowNotifications Whether email or push notifications are allowed to be created.
     *
     * The user `fromUser` still needs to have this enabled in their settings as well.
     */
    HelixUserApi.prototype.createFollow = function (fromUser, toUser, allowNotifications) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'users/follows',
                            method: 'POST',
                            scope: 'user:edit:follows',
                            jsonBody: {
                                from_id: extractUserId(fromUser),
                                to_id: extractUserId(toUser),
                                allow_notifications: allowNotifications
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
     * Removes a follow from a user to another user.
     *
     * @param fromUser The user to remove the follow for.
     * @param toUser The user to unfollow.
     */
    HelixUserApi.prototype.deleteFollow = function (fromUser, toUser) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'users/follows',
                            method: 'DELETE',
                            scope: 'user:edit:follows',
                            jsonBody: {
                                from_id: extractUserId(fromUser),
                                to_id: extractUserId(toUser)
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
     * Retrieves a list of users blocked by the given user.
     *
     * @param user The user to retrieve blocks for.
     * @param pagination
     *
     * @expandParams
     */
    HelixUserApi.prototype.getBlocks = function (user, pagination) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'users/blocks',
                            scope: 'user:read:blocked_users',
                            query: __assign({ broadcaster_id: extractUserId(user) }, makePaginationQuery(pagination))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixUserBlock, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for users blocked by the given user.
     *
     * @param user The user to retrieve blocks for.
     */
    HelixUserApi.prototype.getBlocksPaginated = function (user) {
        var _this = this;
        return new HelixPaginatedRequest({
            url: 'users/blocks',
            scope: 'user:read:blocked_users',
            query: {
                broadcaster_id: extractUserId(user)
            }
        }, this._client, function (data) { return new HelixUserBlock(data, _this._client); });
    };
    /**
     * Blocks the given user.
     *
     * @param target The user to block.
     * @param additionalInfo Additional info to give context to the block.
     *
     * @expandParams
     */
    HelixUserApi.prototype.createBlock = function (target, additionalInfo) {
        if (additionalInfo === void 0) { additionalInfo = {}; }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'users/blocks',
                            method: 'PUT',
                            scope: 'user:manage:blocked_users',
                            query: {
                                target_user_id: extractUserId(target),
                                source_context: additionalInfo.sourceContext,
                                reason: additionalInfo.reason
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
     * Unblocks the given user.
     *
     * @param target The user to unblock.
     */
    HelixUserApi.prototype.deleteBlock = function (target) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'users/blocks',
                            method: 'DELETE',
                            scope: 'user:manage:blocked_users',
                            query: {
                                target_user_id: extractUserId(target)
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
     * Retrieves a list of all extensions for the authenticated user.
     */
    HelixUserApi.prototype.getMyExtensions = function () {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'users/extensions/list'
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixUserExtension(data); })];
                }
            });
        });
    };
    /**
     * Retrieves a list of all installed extensions for the given user.
     *
     * @param user The user to get the installed extensions for.
     *
     * If not given, get the installed extensions for the authenticated user.
     */
    HelixUserApi.prototype.getActiveExtensions = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            var userId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = user ? extractUserId(user) : undefined;
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'users/extensions',
                                query: {
                                    user_id: userId
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixInstalledExtensionList(result.data)];
                }
            });
        });
    };
    /**
     * Updates the installed extensions for the authenticated user.
     *
     * @param data The extension installation payload.
     *
     * The format is shown on the [Twitch documentation](https://dev.twitch.tv/docs/api/reference#update-user-extensions).
     * Don't use the "data" wrapper though.
     */
    HelixUserApi.prototype.updateMyActiveExtensions = function (data) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'users/extensions',
                            jsonBody: { data: data }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixInstalledExtensionList(result.data)];
                }
            });
        });
    };
    HelixUserApi._makeFollowsQuery = function (filter) {
        var query = {};
        var hasUserIdParam = false;
        if (filter.user) {
            query.from_id = extractUserId(filter.user);
            hasUserIdParam = true;
        }
        if (filter.followedUser) {
            query.to_id = extractUserId(filter.followedUser);
            hasUserIdParam = true;
        }
        if (!hasUserIdParam) {
            throw new TypeError('At least one of user and followedUser have to be set');
        }
        return query;
    };
    HelixUserApi.prototype._getUsers = function (lookupType, param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (param.length === 0) {
                            return [2 /*return*/, []];
                        }
                        query = (_a = {}, _a[lookupType] = param, _a);
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'users',
                                query: query
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result.data.map(function (userData) { return new HelixUser(userData, _this._client); })];
                }
            });
        });
    };
    var HelixUserApi_1;
    HelixUserApi = HelixUserApi_1 = __decorate([
        rtfm('twitch', 'HelixUserApi')
    ], HelixUserApi);
    return HelixUserApi;
}(BaseApi));
export { HelixUserApi };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixUserApi = exports.UserLookupType = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedRequestWithTotal_1 = require("../HelixPaginatedRequestWithTotal");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixInstalledExtensionList_1 = require("./Extensions/HelixInstalledExtensionList");
var HelixUserExtension_1 = require("./Extensions/HelixUserExtension");
var HelixFollow_1 = require("./HelixFollow");
var HelixPrivilegedUser_1 = require("./HelixPrivilegedUser");
var HelixUser_1 = require("./HelixUser");
var HelixUserBlock_1 = require("./HelixUserBlock");
var UserLookupType;
(function (UserLookupType) {
    UserLookupType["Id"] = "id";
    UserLookupType["Login"] = "login";
})(UserLookupType || (UserLookupType = {}));
exports.UserLookupType = UserLookupType;
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
    tslib_1.__extends(HelixUserApi, _super);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getUsers(UserLookupType.Id, userIds.map(twitch_common_1.extractUserId))];
            });
        });
    };
    /**
     * Retrieves the user data for the given list of user names.
     *
     * @param userNames The user names you want to look up.
     */
    HelixUserApi.prototype.getUsersByNames = function (userNames) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getUsers(UserLookupType.Login, userNames.map(twitch_common_1.extractUserName))];
            });
        });
    };
    /**
     * Retrieves the user data for the given user ID.
     *
     * @param userId The user ID you want to look up.
     */
    HelixUserApi.prototype.getUserById = function (userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var users;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getUsers(UserLookupType.Id, [twitch_common_1.extractUserId(userId)])];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var users;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getUsers(UserLookupType.Login, [twitch_common_1.extractUserName(userName)])];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'users',
                            scope: withEmail ? 'user:read:email' : ''
                        })];
                    case 1:
                        result = _b.sent();
                        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                        if (!((_a = result.data) === null || _a === void 0 ? void 0 : _a.length)) {
                            throw new twitch_common_1.HellFreezesOverError('Could not get authenticated user');
                        }
                        return [2 /*return*/, new HelixPrivilegedUser_1.HelixPrivilegedUser(result.data[0], this._client)];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'users',
                            method: 'PUT',
                            scope: 'user:edit',
                            query: {
                                description: data.description
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixPrivilegedUser_1.HelixPrivilegedUser(result.data[0], this._client)];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = HelixUserApi_1._makeFollowsQuery(filter);
                        return [4 /*yield*/, this._client.callApi({
                                url: 'users/follows',
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                query: query
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResultWithTotal(result, HelixFollow_1.HelixFollow, this._client)];
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
        return new HelixPaginatedRequestWithTotal_1.HelixPaginatedRequestWithTotal({
            url: 'users/follows',
            query: query
        }, this._client, function (data) { return new HelixFollow_1.HelixFollow(data, _this._client); });
    };
    /**
     * Retrieves the follow relation bewteen a given user and a given broadcaster.
     *
     * @param user The user to retrieve the follow relation for.
     * @param broadcaster The broadcaster to retrieve the follow relation for.
     */
    HelixUserApi.prototype.getFollowFromUserToBroadcaster = function (user, broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'users/follows',
                            method: 'POST',
                            scope: 'user:edit:follows',
                            jsonBody: {
                                from_id: twitch_common_1.extractUserId(fromUser),
                                to_id: twitch_common_1.extractUserId(toUser),
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'users/follows',
                            method: 'DELETE',
                            scope: 'user:edit:follows',
                            jsonBody: {
                                from_id: twitch_common_1.extractUserId(fromUser),
                                to_id: twitch_common_1.extractUserId(toUser)
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'users/blocks',
                            scope: 'user:read:blocked_users',
                            query: tslib_1.__assign({ broadcaster_id: twitch_common_1.extractUserId(user) }, HelixPagination_1.makePaginationQuery(pagination))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixUserBlock_1.HelixUserBlock, this._client)];
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
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'users/blocks',
            scope: 'user:read:blocked_users',
            query: {
                broadcaster_id: twitch_common_1.extractUserId(user)
            }
        }, this._client, function (data) { return new HelixUserBlock_1.HelixUserBlock(data, _this._client); });
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'users/blocks',
                            method: 'PUT',
                            scope: 'user:manage:blocked_users',
                            query: {
                                target_user_id: twitch_common_1.extractUserId(target),
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'users/blocks',
                            method: 'DELETE',
                            scope: 'user:manage:blocked_users',
                            query: {
                                target_user_id: twitch_common_1.extractUserId(target)
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'users/extensions/list'
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixUserExtension_1.HelixUserExtension(data); })];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = user ? twitch_common_1.extractUserId(user) : undefined;
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'users/extensions',
                                query: {
                                    user_id: userId
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixInstalledExtensionList_1.HelixInstalledExtensionList(result.data)];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'users/extensions',
                            jsonBody: { data: data }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixInstalledExtensionList_1.HelixInstalledExtensionList(result.data)];
                }
            });
        });
    };
    HelixUserApi._makeFollowsQuery = function (filter) {
        var query = {};
        var hasUserIdParam = false;
        if (filter.user) {
            query.from_id = twitch_common_1.extractUserId(filter.user);
            hasUserIdParam = true;
        }
        if (filter.followedUser) {
            query.to_id = twitch_common_1.extractUserId(filter.followedUser);
            hasUserIdParam = true;
        }
        if (!hasUserIdParam) {
            throw new TypeError('At least one of user and followedUser have to be set');
        }
        return query;
    };
    HelixUserApi.prototype._getUsers = function (lookupType, param) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, result;
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (param.length === 0) {
                            return [2 /*return*/, []];
                        }
                        query = (_a = {}, _a[lookupType] = param, _a);
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'users',
                                query: query
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result.data.map(function (userData) { return new HelixUser_1.HelixUser(userData, _this._client); })];
                }
            });
        });
    };
    var HelixUserApi_1;
    HelixUserApi = HelixUserApi_1 = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixUserApi')
    ], HelixUserApi);
    return HelixUserApi;
}(BaseApi_1.BaseApi));
exports.HelixUserApi = HelixUserApi;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixStreamApi = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var StreamNotLiveError_1 = require("../../../Errors/StreamNotLiveError");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixTag_1 = require("../Tag/HelixTag");
var HelixStream_1 = require("./HelixStream");
var HelixStreamMarker_1 = require("./HelixStreamMarker");
var HelixStreamMarkerWithVideo_1 = require("./HelixStreamMarkerWithVideo");
/**
 * The Helix API methods that deal with streams.
 *
 * Can be accessed using `client.helix.streams` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const stream = await api.helix.streams.getStreamByUserId('125328655');
 * ```
 */
var HelixStreamApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixStreamApi, _super);
    function HelixStreamApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelixStreamApi_1 = HelixStreamApi;
    /**
     * Retrieves a list of streams.
     *
     * @expandParams
     */
    HelixStreamApi.prototype.getStreams = function (filter) {
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            url: 'streams',
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            query: tslib_1.__assign(tslib_1.__assign({}, HelixPagination_1.makePaginationQuery(filter)), { community_id: filter.community, game_id: filter.game, language: filter.language, type: filter.type, user_id: filter.userId, user_login: filter.userName })
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixStream_1.HelixStream, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for streams.
     *
     * @expandParams
     */
    HelixStreamApi.prototype.getStreamsPaginated = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'streams',
            query: {
                community_id: filter.community,
                game_id: filter.game,
                language: filter.language,
                type: filter.type,
                user_id: filter.userId,
                user_login: filter.userName
            }
        }, this._client, function (data) { return new HelixStream_1.HelixStream(data, _this._client); });
    };
    /**
     * Retrieves the current stream for the given user name.
     *
     * @param user The user name to retrieve the stream for.
     */
    HelixStreamApi.prototype.getStreamByUserName = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStreams({ userName: twitch_common_1.extractUserName(user) })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? result.data[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the current stream for the given user ID.
     *
     * @param user The user ID to retrieve the stream for.
     */
    HelixStreamApi.prototype.getStreamByUserId = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStreams({ userId: twitch_common_1.extractUserId(user) })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? result.data[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves a list of all stream markers for an user.
     *
     * @param user The user to list the stream markers for.
     */
    HelixStreamApi.prototype.getStreamMarkersForUser = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getStreamMarkers('user_id', twitch_common_1.extractUserId(user))];
            });
        });
    };
    /**
     * Creates a paginator for all stream markers for an user.
     *
     * @param user The user to list the stream markers for.
     */
    HelixStreamApi.prototype.getStreamMarkersForUserPaginated = function (user) {
        return this._getStreamMarkersPaginated('user_id', twitch_common_1.extractUserId(user));
    };
    /**
     * Retrieves a list of all stream markers for a video.
     *
     * @param videoId The video to list the stream markers for.
     */
    HelixStreamApi.prototype.getStreamMarkersForVideo = function (videoId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getStreamMarkers('video_id', videoId)];
            });
        });
    };
    /**
     * Creates a paginator for all stream markers for a video.
     *
     * @param videoId The video to list the stream markers for.
     */
    HelixStreamApi.prototype.getStreamMarkersForVideoPaginated = function (videoId) {
        return this._getStreamMarkersPaginated('video_id', videoId);
    };
    /**
     * Creates a new stream marker.
     *
     * Only works while the specified user's stream is live.
     *
     * @param broadcaster The broadcaster to create a stream marker for.
     * @param description The description of the marker.
     */
    HelixStreamApi.prototype.createStreamMarker = function (broadcaster, description) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._client.callApi({
                                url: 'streams/markers',
                                method: 'POST',
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                scope: 'user:edit:broadcast',
                                query: {
                                    user_id: twitch_common_1.extractUserId(broadcaster),
                                    description: description
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixStreamMarker_1.HelixStreamMarker(result.data[0], this._client)];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof twitch_api_call_1.HttpStatusCodeError && e_1.statusCode === 404) {
                            throw new StreamNotLiveError_1.StreamNotLiveError();
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves the tags of a stream.
     *
     * @param broadcaster The broadcaster of the stream.
     */
    HelixStreamApi.prototype.getStreamTags = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'streams/tags',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixTag_1.HelixTag(data); })];
                }
            });
        });
    };
    /**
     * Replaces the tags of a stream.
     *
     * @param broadcaster The broadcaster of the stream.
     * @param tagIds The tags to set. If not given, removes all tags.
     */
    HelixStreamApi.prototype.replaceStreamTags = function (broadcaster, tagIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'streams/tags',
                            scope: 'user:edit:broadcast',
                            method: 'PUT',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
                            },
                            jsonBody: {
                                tag_ids: tagIds
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
     * Retrieves the stream key of a stream.
     *
     * @param broadcaster The broadcaster to retrieve the stream key for.
     */
    HelixStreamApi.prototype.getStreamKey = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'streams/key',
                            scope: 'channel:read:stream_key',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data[0].stream_key];
                }
            });
        });
    };
    /**
     * Retrieves the streams that are currently live and are followed by the given user.
     *
     * @param user The user to check followed streams for.
     * @param pagination
     *
     * @expandParams
     */
    HelixStreamApi.prototype.getFollowedStreams = function (user, pagination) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'streams/followed',
                            scope: 'user:read:follows',
                            query: tslib_1.__assign({ user_id: twitch_common_1.extractUserId(user) }, HelixPagination_1.makePaginationQuery(pagination))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixStream_1.HelixStream, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for the streams that are currently live and are followed by the given user.
     *
     * @param user The user to check followed streams for.
     */
    HelixStreamApi.prototype.getFollowedStreamsPaginated = function (user) {
        var _this = this;
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'stream/followed',
            scope: 'user:read:follows',
            query: {
                user_id: twitch_common_1.extractUserId(user)
            }
        }, this._client, function (data) { return new HelixStream_1.HelixStream(data, _this._client); });
    };
    HelixStreamApi.prototype._getStreamMarkers = function (queryType, id) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            url: 'streams/markers',
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            query: (_b = {},
                                _b[queryType] = id,
                                _b),
                            scope: 'user:read:broadcast'
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, {
                                data: shared_utils_1.flatten(result.data.map(HelixStreamApi_1._mapGetStreamMarkersResult.bind(this._client))),
                                cursor: (_a = result.pagination) === null || _a === void 0 ? void 0 : _a.cursor
                            }];
                }
            });
        });
    };
    HelixStreamApi.prototype._getStreamMarkersPaginated = function (queryType, id) {
        var _a;
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'streams/markers',
            query: (_a = {},
                _a[queryType] = id,
                _a),
            scope: 'user:read:broadcast'
        }, this._client, HelixStreamApi_1._mapGetStreamMarkersResult.bind(this._client));
    };
    HelixStreamApi._mapGetStreamMarkersResult = function (data) {
        var _this = this;
        return data.videos.reduce(function (result, video) { return tslib_1.__spread(result, video.markers.map(function (marker) { return new HelixStreamMarkerWithVideo_1.HelixStreamMarkerWithVideo(marker, video.video_id, _this); })); }, []);
    };
    var HelixStreamApi_1;
    HelixStreamApi = HelixStreamApi_1 = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixStreamApi')
    ], HelixStreamApi);
    return HelixStreamApi;
}(BaseApi_1.BaseApi));
exports.HelixStreamApi = HelixStreamApi;

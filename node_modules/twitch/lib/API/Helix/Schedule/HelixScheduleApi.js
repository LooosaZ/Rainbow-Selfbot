"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixScheduleApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPagination_1 = require("../HelixPagination");
var HelixPaginatedScheduleSegmentRequest_1 = require("./HelixPaginatedScheduleSegmentRequest");
var HelixSchedule_1 = require("./HelixSchedule");
var HelixScheduleSegment_1 = require("./HelixScheduleSegment");
/**
 * The Helix API methods that deal with schedules.
 *
 * Can be accessed using `client.helix.schedule` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: schedule } = await api.helix.schedule.getSchedule('61369223');
 */
var HelixScheduleApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixScheduleApi, _super);
    function HelixScheduleApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the schedule for a given broadcaster.
     *
     * @param broadcaster The broadcaster to get the schedule of.
     * @param filter
     *
     * @expandParams
     */
    HelixScheduleApi.prototype.getSchedule = function (broadcaster, filter) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'schedule',
                            query: tslib_1.__assign({ broadcaster_id: twitch_common_1.extractUserId(broadcaster), start_time: filter === null || filter === void 0 ? void 0 : filter.startDate, utc_offset: (_a = filter === null || filter === void 0 ? void 0 : filter.utcOffset) === null || _a === void 0 ? void 0 : _a.toString() }, HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, {
                                data: new HelixSchedule_1.HelixSchedule(result.data, this._client),
                                cursor: result.pagination.cursor
                            }];
                }
            });
        });
    };
    /**
     * Creates a paginator for schedule segments for a given broadcaster.
     *
     * @param broadcaster The broadcaster to get the schedule segments of.
     * @param filter
     *
     * @expandParams
     */
    HelixScheduleApi.prototype.getScheduleSegmentsPaginated = function (broadcaster, filter) {
        return new HelixPaginatedScheduleSegmentRequest_1.HelixPaginatedScheduleSegmentRequest(broadcaster, this._client, filter);
    };
    /**
     * Retrieves a set of schedule segments by IDs.
     *
     * @param broadcaster The broadcaster to get schedule segments of.
     * @param ids The IDs of the schedule segments.
     */
    HelixScheduleApi.prototype.getScheduleSegmentsByIds = function (broadcaster, ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'schedule',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                id: ids
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.segments.map(function (data) { return new HelixScheduleSegment_1.HelixScheduleSegment(data, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves a single schedule segment by ID.
     *
     * @param broadcaster The broadcaster to get a schedule segment of.
     * @param id The ID of the schedule segment.
     */
    HelixScheduleApi.prototype.getScheduleSegmentById = function (broadcaster, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var segments;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getScheduleSegmentsByIds(broadcaster, [id])];
                    case 1:
                        segments = _a.sent();
                        return [2 /*return*/, segments.length ? segments[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the schedule for a given broadcaster in iCal format.
     *
     * @param broadcaster The broadcaster to get the schedule for.
     */
    HelixScheduleApi.prototype.getScheduleAsIcal = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.callApi({
                        type: twitch_api_call_1.TwitchApiCallType.Helix,
                        url: 'schedule/icalendar',
                        query: {
                            broadcaster_id: twitch_common_1.extractUserId(broadcaster)
                        }
                    })];
            });
        });
    };
    /**
     * Updates the schedule settings of a given broadcaster.
     *
     * @param broadcaster The broadcaster to update the schedule settings for.
     * @param settings
     *
     * @expandParams
     */
    HelixScheduleApi.prototype.updateScheduleSettings = function (broadcaster, settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var vacationUpdateQuery;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vacationUpdateQuery = settings.vacation
                            ? {
                                is_vacation_enabled: 'true',
                                vacation_start_time: settings.vacation.startDate,
                                vacation_end_time: settings.vacation.endDate,
                                timezone: settings.vacation.timezone
                            }
                            : {
                                is_vacation_enabled: 'false'
                            };
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'schedule/settings',
                                method: 'PATCH',
                                scope: 'channel:manage:schedule',
                                query: tslib_1.__assign({ broadcaster_id: twitch_common_1.extractUserId(broadcaster) }, vacationUpdateQuery)
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates a new segment in a given broadcaster's schedule.
     *
     * @param broadcaster The broadcaster to create a new schedule segment for.
     * @param data
     *
     * @expandParams
     */
    HelixScheduleApi.prototype.createScheduleSegment = function (broadcaster, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'schedule/segment',
                            method: 'POST',
                            scope: 'channel:manage:schedule',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
                            },
                            jsonBody: {
                                start_time: data.startDate,
                                timezone: data.timezone,
                                is_recurring: data.isRecurring,
                                duration: data.duration,
                                category_id: data.categoryId,
                                title: data.title
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixScheduleSegment_1.HelixScheduleSegment(result.data.segments[0], this._client)];
                }
            });
        });
    };
    /**
     * Updates a segment in a given broadcaster's schedule.
     *
     * @param broadcaster The broadcaster to create a new schedule segment for.
     * @param segmentId The ID of the segment to update.
     * @param data
     *
     * @expandParams
     */
    HelixScheduleApi.prototype.updateScheduleSegment = function (broadcaster, segmentId, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'schedule/segment',
                            method: 'PATCH',
                            scope: 'channel:manage:schedule',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                id: segmentId
                            },
                            jsonBody: {
                                start_time: data.startDate,
                                timezone: data.timezone,
                                is_canceled: data.isCanceled,
                                duration: data.duration,
                                category_id: data.categoryId,
                                title: data.title
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixScheduleSegment_1.HelixScheduleSegment(result.data.segments[0], this._client)];
                }
            });
        });
    };
    /**
     * Deletes a segment in a given broadcaster's schedule.
     *
     * @param broadcaster The broadcaster to create a new schedule segment for.
     * @param segmentId The ID of the segment to update.
     */
    HelixScheduleApi.prototype.deleteScheduleSegment = function (broadcaster, segmentId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'schedule/segment',
                            method: 'DELETE',
                            scope: 'channel:manage:schedule',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                id: segmentId
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HelixScheduleApi;
}(BaseApi_1.BaseApi));
exports.HelixScheduleApi = HelixScheduleApi;

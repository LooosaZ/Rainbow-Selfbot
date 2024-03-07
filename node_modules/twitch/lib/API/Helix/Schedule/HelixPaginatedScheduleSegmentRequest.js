"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixPaginatedScheduleSegmentRequest = void 0;
var tslib_1 = require("tslib");
var twitch_common_1 = require("twitch-common");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixScheduleSegment_1 = require("./HelixScheduleSegment");
/**
 * A paginator specifically for schedule segments.
 */
var HelixPaginatedScheduleSegmentRequest = /** @class */ (function (_super) {
    tslib_1.__extends(HelixPaginatedScheduleSegmentRequest, _super);
    /** @private */
    function HelixPaginatedScheduleSegmentRequest(broadcaster, client, filter) {
        var _a;
        return _super.call(this, {
            url: 'schedule',
            query: {
                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                start_time: filter === null || filter === void 0 ? void 0 : filter.startDate,
                utc_offset: (_a = filter === null || filter === void 0 ? void 0 : filter.utcOffset) === null || _a === void 0 ? void 0 : _a.toString()
            }
        }, client, function (data) { return new HelixScheduleSegment_1.HelixScheduleSegment(data, client); }, 25) || this;
    }
    // sadly, this hack is necessary to work around the weird data model of schedules
    // while still keeping the pagination code as generic as possible
    /** @private */
    HelixPaginatedScheduleSegmentRequest.prototype._fetchData = function (additionalOptions) {
        if (additionalOptions === void 0) { additionalOptions = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var origData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype._fetchData.call(this, additionalOptions)];
                    case 1:
                        origData = (_a.sent());
                        return [2 /*return*/, {
                                data: origData.data.segments,
                                pagination: origData.pagination
                            }];
                }
            });
        });
    };
    return HelixPaginatedScheduleSegmentRequest;
}(HelixPaginatedRequest_1.HelixPaginatedRequest));
exports.HelixPaginatedScheduleSegmentRequest = HelixPaginatedScheduleSegmentRequest;

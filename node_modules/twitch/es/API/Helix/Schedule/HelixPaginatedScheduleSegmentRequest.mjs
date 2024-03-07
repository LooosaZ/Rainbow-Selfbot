import { __awaiter, __extends, __generator } from "tslib";
import { extractUserId } from 'twitch-common';
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { HelixScheduleSegment } from "./HelixScheduleSegment.mjs";
/**
 * A paginator specifically for schedule segments.
 */
var HelixPaginatedScheduleSegmentRequest = /** @class */ (function (_super) {
    __extends(HelixPaginatedScheduleSegmentRequest, _super);
    /** @private */
    function HelixPaginatedScheduleSegmentRequest(broadcaster, client, filter) {
        var _a;
        return _super.call(this, {
            url: 'schedule',
            query: {
                broadcaster_id: extractUserId(broadcaster),
                start_time: filter === null || filter === void 0 ? void 0 : filter.startDate,
                utc_offset: (_a = filter === null || filter === void 0 ? void 0 : filter.utcOffset) === null || _a === void 0 ? void 0 : _a.toString()
            }
        }, client, function (data) { return new HelixScheduleSegment(data, client); }, 25) || this;
    }
    // sadly, this hack is necessary to work around the weird data model of schedules
    // while still keeping the pagination code as generic as possible
    /** @private */
    HelixPaginatedScheduleSegmentRequest.prototype._fetchData = function (additionalOptions) {
        if (additionalOptions === void 0) { additionalOptions = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var origData;
            return __generator(this, function (_a) {
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
}(HelixPaginatedRequest));
export { HelixPaginatedScheduleSegmentRequest };

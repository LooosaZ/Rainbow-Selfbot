import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { rtfm } from 'twitch-common';
import { HelixPaginatedRequest } from "./HelixPaginatedRequest.mjs";
/**
 * A special case of {@HelixPaginatedRequest} with support for fetching the total number of entities, whenever an endpoint supports it.
 */
var HelixPaginatedRequestWithTotal = /** @class */ (function (_super) {
    __extends(HelixPaginatedRequestWithTotal, _super);
    function HelixPaginatedRequestWithTotal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves and returns the total number of entities existing in the queried result set.
     */
    HelixPaginatedRequestWithTotal.prototype.getTotalCount = function () {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var data, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!((_a = this._currentData) !== null && _a !== void 0)) return [3 /*break*/, 1];
                        _b = _a;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this._fetchData({ query: { after: undefined } })];
                    case 2:
                        _b = (_c.sent());
                        _c.label = 3;
                    case 3:
                        data = _b;
                        return [2 /*return*/, data.total];
                }
            });
        });
    };
    HelixPaginatedRequestWithTotal = __decorate([
        rtfm('twitch', 'HelixPaginatedRequestWithTotal')
    ], HelixPaginatedRequestWithTotal);
    return HelixPaginatedRequestWithTotal;
}(HelixPaginatedRequest));
export { HelixPaginatedRequestWithTotal };

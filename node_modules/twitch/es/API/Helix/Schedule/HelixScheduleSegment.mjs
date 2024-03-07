import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
/**
 * A segment of a schedule.
 */
var HelixScheduleSegment = /** @class */ (function () {
    /** @private */
    function HelixScheduleSegment(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixScheduleSegment.prototype, "id", {
        /**
         * The ID of the segment.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixScheduleSegment.prototype, "startDate", {
        /**
         * The date when the segment starts.
         */
        get: function () {
            return new Date(this._data.start_time);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixScheduleSegment.prototype, "endDate", {
        /**
         * The date when the segment ends.
         */
        get: function () {
            return new Date(this._data.end_time);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixScheduleSegment.prototype, "title", {
        /**
         * The title of the segment.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixScheduleSegment.prototype, "cancelEndDate", {
        /**
         * The date up to which the segment is canceled.
         */
        get: function () {
            return this._data.canceled_until ? new Date(this._data.canceled_until) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixScheduleSegment.prototype, "categoryId", {
        /**
         * The ID of the category the segment is scheduled for, or null if no category is specified.
         */
        get: function () {
            var _a, _b;
            return (_b = (_a = this._data.category) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixScheduleSegment.prototype, "categoryName", {
        /**
         * The name of the category the segment is scheduled for, or null if no category is specified.
         */
        get: function () {
            var _a, _b;
            return (_b = (_a = this._data.category) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the category the segment is scheduled for, or null if no category is specified.
     */
    HelixScheduleSegment.prototype.getCategory = function () {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var categoryId;
            return __generator(this, function (_b) {
                categoryId = (_a = this._data.category) === null || _a === void 0 ? void 0 : _a.id;
                return [2 /*return*/, categoryId ? this._client.helix.games.getGameById(categoryId) : null];
            });
        });
    };
    Object.defineProperty(HelixScheduleSegment.prototype, "isRecurring", {
        /**
         * Whether the segment is recurring every week.
         */
        get: function () {
            return this._data.is_recurring;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], HelixScheduleSegment.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixScheduleSegment.prototype, "_client", void 0);
    return HelixScheduleSegment;
}());
export { HelixScheduleSegment };

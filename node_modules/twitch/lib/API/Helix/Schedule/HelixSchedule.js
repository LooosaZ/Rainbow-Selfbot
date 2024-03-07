"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixSchedule = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var HelixScheduleSegment_1 = require("./HelixScheduleSegment");
/**
 * A schedule of a channel.
 */
var HelixSchedule = /** @class */ (function () {
    /** @private */
    function HelixSchedule(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixSchedule.prototype, "segments", {
        /**
         * The segments of the schedule.
         */
        get: function () {
            var _this = this;
            return this._data.segments.map(function (data) { return new HelixScheduleSegment_1.HelixScheduleSegment(data, _this._client); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSchedule.prototype, "broadcasterId", {
        /**
         * The ID of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSchedule.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSchedule.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the broadcaster.
     */
    HelixSchedule.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Object.defineProperty(HelixSchedule.prototype, "vacationStartDate", {
        /**
         * The date when the current vacation started, or null if the schedule is not in vacation mode.
         */
        get: function () {
            var _a;
            var timestamp = (_a = this._data.vacation) === null || _a === void 0 ? void 0 : _a.start_time;
            return timestamp ? new Date(timestamp) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSchedule.prototype, "vacationEndDate", {
        /**
         * The date when the current vacation ends, or null if the schedule is not in vacation mode.
         */
        get: function () {
            var _a;
            var timestamp = (_a = this._data.vacation) === null || _a === void 0 ? void 0 : _a.end_time;
            return timestamp ? new Date(timestamp) : null;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixSchedule.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixSchedule.prototype, "_client", void 0);
    return HelixSchedule;
}());
exports.HelixSchedule = HelixSchedule;

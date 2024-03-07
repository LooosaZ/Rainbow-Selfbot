"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixChatBadgeSet = void 0;
var tslib_1 = require("tslib");
var cache_decorators_1 = require("@d-fischer/cache-decorators");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var HelixChatBadgeVersion_1 = require("./HelixChatBadgeVersion");
/**
 * A version of a chat badge.
 */
var HelixChatBadgeSet = /** @class */ (function () {
    /** @private */
    function HelixChatBadgeSet(data) {
        this._data = data;
    }
    Object.defineProperty(HelixChatBadgeSet.prototype, "id", {
        /**
         * The badge set ID.
         */
        get: function () {
            return this._data.set_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChatBadgeSet.prototype, "versions", {
        /**
         * All versions of the badge.
         */
        get: function () {
            return this._data.versions.map(function (data) { return new HelixChatBadgeVersion_1.HelixChatBadgeVersion(data); });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves a specific version of the badge.
     *
     * @param versionId The ID of the version.
     */
    HelixChatBadgeSet.prototype.getVersion = function (versionId) {
        var _a;
        return (_a = this.versions.find(function (v) { return v.id === versionId; })) !== null && _a !== void 0 ? _a : null;
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixChatBadgeSet.prototype, "_data", void 0);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixChatBadgeSet.prototype, "versions", null);
    HelixChatBadgeSet = tslib_1.__decorate([
        cache_decorators_1.Cacheable,
        twitch_common_1.rtfm('twitch', 'HelixChatBadgeSet', 'id')
    ], HelixChatBadgeSet);
    return HelixChatBadgeSet;
}());
exports.HelixChatBadgeSet = HelixChatBadgeSet;

import { __decorate } from "tslib";
import { Cacheable, CachedGetter } from '@d-fischer/cache-decorators';
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
import { HelixChatBadgeVersion } from "./HelixChatBadgeVersion.mjs";
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
            return this._data.versions.map(function (data) { return new HelixChatBadgeVersion(data); });
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
    __decorate([
        Enumerable(false)
    ], HelixChatBadgeSet.prototype, "_data", void 0);
    __decorate([
        CachedGetter()
    ], HelixChatBadgeSet.prototype, "versions", null);
    HelixChatBadgeSet = __decorate([
        Cacheable,
        rtfm('twitch', 'HelixChatBadgeSet', 'id')
    ], HelixChatBadgeSet);
    return HelixChatBadgeSet;
}());
export { HelixChatBadgeSet };

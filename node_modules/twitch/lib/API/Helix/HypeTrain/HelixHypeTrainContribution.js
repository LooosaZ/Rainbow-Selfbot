"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixHypeTrainContribution = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A Hype Train contributor.
 */
var HelixHypeTrainContribution = /** @class */ (function () {
    /** @private */
    function HelixHypeTrainContribution(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixHypeTrainContribution.prototype, "userId", {
        /**
         * The ID of the user contributing to the Hype Train.
         */
        get: function () {
            return this._data.user;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves additional information about the user contributing to the Hype Train.
     */
    HelixHypeTrainContribution.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user)];
            });
        });
    };
    Object.defineProperty(HelixHypeTrainContribution.prototype, "type", {
        /**
         * The Hype Train event type.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainContribution.prototype, "total", {
        /**
         * The total contribution amount in subs or bits.
         */
        get: function () {
            return this._data.total;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixHypeTrainContribution.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixHypeTrainContribution.prototype, "_client", void 0);
    HelixHypeTrainContribution = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixHypeTrainContribution', 'userId')
    ], HelixHypeTrainContribution);
    return HelixHypeTrainContribution;
}());
exports.HelixHypeTrainContribution = HelixHypeTrainContribution;

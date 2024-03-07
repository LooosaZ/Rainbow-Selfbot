import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
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
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
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
    __decorate([
        Enumerable(false)
    ], HelixHypeTrainContribution.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixHypeTrainContribution.prototype, "_client", void 0);
    HelixHypeTrainContribution = __decorate([
        rtfm('twitch', 'HelixHypeTrainContribution', 'userId')
    ], HelixHypeTrainContribution);
    return HelixHypeTrainContribution;
}());
export { HelixHypeTrainContribution };

import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * An EventSub subscription.
 */
var HelixEventSubSubscription = /** @class */ (function () {
    /** @private */
    function HelixEventSubSubscription(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixEventSubSubscription.prototype, "id", {
        /**
         * The ID of the subscription.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixEventSubSubscription.prototype, "status", {
        /**
         * The status of the subscription.
         */
        get: function () {
            return this._data.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixEventSubSubscription.prototype, "type", {
        /**
         * The event type that the subscription is listening to.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixEventSubSubscription.prototype, "condition", {
        /**
         * The condition of the subscription.
         */
        get: function () {
            return this._data.condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixEventSubSubscription.prototype, "creationDate", {
        /**
         * The date and time of creation of the subscription.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * End the EventSub subscription.
     */
    HelixEventSubSubscription.prototype.unsubscribe = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.eventSub.deleteSubscription(this._data.id)];
            });
        });
    };
    Object.defineProperty(HelixEventSubSubscription.prototype, "_transport", {
        /** @private */
        get: function () {
            return this._data.transport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixEventSubSubscription.prototype, "_status", {
        /** @private */
        set: function (status) {
            this._data.status = status;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], HelixEventSubSubscription.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixEventSubSubscription.prototype, "_client", void 0);
    HelixEventSubSubscription = __decorate([
        rtfm('twitch', 'HelixEventSubSubscription', 'id')
    ], HelixEventSubSubscription);
    return HelixEventSubSubscription;
}());
export { HelixEventSubSubscription };

import { __decorate, __extends } from "tslib";
import { rtfm } from 'twitch-common';
import { HelixSubscription } from "./HelixSubscription.mjs";
/**
 * The different types a subscription event can have.
 */
export var HelixSubscriptionEventType;
(function (HelixSubscriptionEventType) {
    /**
     * Sent when a new user subscribes.
     */
    HelixSubscriptionEventType["Subscribe"] = "subscriptions.subscribe";
    /**
     * Sent when a previous subscriber stops subscribing.
     */
    HelixSubscriptionEventType["Unsubscribe"] = "subscriptions.unsubscribe";
    /**
     * Sent when a new or recurring subscriber sends their monthly notification.
     */
    HelixSubscriptionEventType["Notification"] = "subscriptions.notification";
})(HelixSubscriptionEventType || (HelixSubscriptionEventType = {}));
/**
 * An event that indicates the change of a subscription status, i.e. subscribing, unsubscribing or sending the monthly notification.
 */
var HelixSubscriptionEvent = /** @class */ (function (_super) {
    __extends(HelixSubscriptionEvent, _super);
    /** @private */
    function HelixSubscriptionEvent(eventData, client) {
        var _this = _super.call(this, eventData.event_data, client) || this;
        _this._eventData = eventData;
        return _this;
    }
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventId", {
        /**
         * The unique ID of the subscription event.
         */
        get: function () {
            return this._eventData.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventType", {
        /**
         * The type of the subscription event.
         */
        get: function () {
            return this._eventData.event_type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventDate", {
        /**
         * The date of the subscription event.
         */
        get: function () {
            return new Date(this._eventData.event_timestamp);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventVersion", {
        /**
         * The version of the subscription event.
         */
        get: function () {
            return this._eventData.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixSubscriptionEvent.prototype, "eventMessage", {
        /**
         * The message sent with the subscription event.
         */
        get: function () {
            var _a;
            return (_a = this._eventData.event_data.message) !== null && _a !== void 0 ? _a : '';
        },
        enumerable: false,
        configurable: true
    });
    HelixSubscriptionEvent = __decorate([
        rtfm('twitch', 'HelixSubscriptionEvent', 'userId')
    ], HelixSubscriptionEvent);
    return HelixSubscriptionEvent;
}(HelixSubscription));
export { HelixSubscriptionEvent };

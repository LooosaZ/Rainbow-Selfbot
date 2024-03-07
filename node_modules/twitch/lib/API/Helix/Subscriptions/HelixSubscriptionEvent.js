"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixSubscriptionEvent = exports.HelixSubscriptionEventType = void 0;
var tslib_1 = require("tslib");
var twitch_common_1 = require("twitch-common");
var HelixSubscription_1 = require("./HelixSubscription");
var HelixSubscriptionEventType;
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
exports.HelixSubscriptionEventType = HelixSubscriptionEventType;
/**
 * An event that indicates the change of a subscription status, i.e. subscribing, unsubscribing or sending the monthly notification.
 */
var HelixSubscriptionEvent = /** @class */ (function (_super) {
    tslib_1.__extends(HelixSubscriptionEvent, _super);
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
    HelixSubscriptionEvent = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixSubscriptionEvent', 'userId')
    ], HelixSubscriptionEvent);
    return HelixSubscriptionEvent;
}(HelixSubscription_1.HelixSubscription));
exports.HelixSubscriptionEvent = HelixSubscriptionEvent;

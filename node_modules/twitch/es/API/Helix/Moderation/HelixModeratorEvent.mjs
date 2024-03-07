import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { rtfm } from 'twitch-common';
import { HelixModerator } from "./HelixModerator.mjs";
/**
 * The different types a moderator event can have.
 */
export var HelixModeratorEventType;
(function (HelixModeratorEventType) {
    /**
     * Sent when a user gains moderation privileges.
     */
    HelixModeratorEventType["Add"] = "moderation.moderator.add";
    /**
     * Sent when a user loses moderation privileges.
     */
    HelixModeratorEventType["Remove"] = "moderation.moderator.remove";
})(HelixModeratorEventType || (HelixModeratorEventType = {}));
/**
 * An event that indicates the change of a moderator status, i.e. gaining or losing moderation privileges.
 */
var HelixModeratorEvent = /** @class */ (function (_super) {
    __extends(HelixModeratorEvent, _super);
    /** @private */
    function HelixModeratorEvent(eventData, client) {
        var _this = _super.call(this, eventData.event_data, client) || this;
        _this._eventData = eventData;
        return _this;
    }
    Object.defineProperty(HelixModeratorEvent.prototype, "eventId", {
        /**
         * The unique ID of the moderator event.
         */
        get: function () {
            return this._eventData.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "eventType", {
        /**
         * The type of the moderator event.
         */
        get: function () {
            return this._eventData.event_type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "eventDate", {
        /**
         * The date of the moderator event.
         */
        get: function () {
            return new Date(this._eventData.event_timestamp);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "eventVersion", {
        /**
         * The version of the moderator event.
         */
        get: function () {
            return this._eventData.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "broadcasterId", {
        /**
         * The id of the broadcaster where the user gained/lost moderation privileges.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster where the user gained/lost moderation privileges.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixModeratorEvent.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster where the user gained/lost moderation privileges.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the broadcaster.
     */
    HelixModeratorEvent.prototype.getBroadcaster = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._eventData.event_data.broadcaster_id)];
            });
        });
    };
    HelixModeratorEvent = __decorate([
        rtfm('twitch', 'HelixModeratorEvent', 'userId')
    ], HelixModeratorEvent);
    return HelixModeratorEvent;
}(HelixModerator));
export { HelixModeratorEvent };

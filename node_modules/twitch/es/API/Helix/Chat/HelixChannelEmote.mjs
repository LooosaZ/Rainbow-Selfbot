import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
import { HelixEmote } from "./HelixEmote.mjs";
/**
 * A Twitch Channel emote.
 *
 * @inheritDoc
 */
var HelixChannelEmote = /** @class */ (function (_super) {
    __extends(HelixChannelEmote, _super);
    function HelixChannelEmote(data, client) {
        var _this = _super.call(this, data) || this;
        _this._client = client;
        return _this;
    }
    Object.defineProperty(HelixChannelEmote.prototype, "tier", {
        /**
         * The subscription tier necessary to unlock the emote, or null if the emote is not a subscription emote.
         */
        get: function () {
            return this._data.tier || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelEmote.prototype, "type", {
        /**
         * The type of the emote.
         *
         * There are many types of emotes that Twitch seems to arbitrarily assign. Do not rely on this value.
         */
        get: function () {
            return this._data.emote_type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelEmote.prototype, "emoteSetId", {
        /**
         * The ID of the emote set the emote is part of.
         */
        get: function () {
            return this._data.emote_set_id;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves all emotes from the emote's set.
     */
    HelixChannelEmote.prototype.getAllEmotesFromSet = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.chat.getEmotesFromSets([this._data.emote_set_id])];
            });
        });
    };
    __decorate([
        Enumerable(false)
    ], HelixChannelEmote.prototype, "_client", void 0);
    HelixChannelEmote = __decorate([
        rtfm('twitch', 'HelixChannelEmote', 'id')
    ], HelixChannelEmote);
    return HelixChannelEmote;
}(HelixEmote));
export { HelixChannelEmote };

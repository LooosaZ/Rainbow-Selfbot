"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixChannelEmote = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var HelixEmote_1 = require("./HelixEmote");
/**
 * A Twitch Channel emote.
 *
 * @inheritDoc
 */
var HelixChannelEmote = /** @class */ (function (_super) {
    tslib_1.__extends(HelixChannelEmote, _super);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.chat.getEmotesFromSets([this._data.emote_set_id])];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixChannelEmote.prototype, "_client", void 0);
    HelixChannelEmote = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixChannelEmote', 'id')
    ], HelixChannelEmote);
    return HelixChannelEmote;
}(HelixEmote_1.HelixEmote));
exports.HelixChannelEmote = HelixChannelEmote;

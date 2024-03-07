"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixEmoteFromSet = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var HelixEmote_1 = require("./HelixEmote");
/**
 * A Twitch Channel emote.
 *
 * @inheritDoc
 */
var HelixEmoteFromSet = /** @class */ (function (_super) {
    tslib_1.__extends(HelixEmoteFromSet, _super);
    function HelixEmoteFromSet(data, client) {
        var _this = _super.call(this, data) || this;
        _this._client = client;
        return _this;
    }
    Object.defineProperty(HelixEmoteFromSet.prototype, "type", {
        /**
         * The type of the emote.
         *
         * Known values are: `subscriptions`, `bitstier`, `follower`, `rewards`, `globals`, `smilies`, `prime`, `limitedtime`.
         *
         * This list may be non-exhaustive.
         */
        get: function () {
            return this._data.emote_type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixEmoteFromSet.prototype, "emoteSetId", {
        /**
         * The ID of the emote set the emote is part of.
         */
        get: function () {
            return this._data.emote_set_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixEmoteFromSet.prototype, "ownerId", {
        /**
         * The ID of the user that owns the emote, or null if the emote is not owned by a user.
         */
        get: function () {
            switch (this._data.owner_id) {
                case '0':
                case 'twitch': {
                    return null;
                }
                default: {
                    return this._data.owner_id;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more info about the user that owns the emote, or null if the emote is not owned by a user.
     */
    HelixEmoteFromSet.prototype.getOwner = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (this._data.owner_id) {
                    case '0':
                    case 'twitch': {
                        return [2 /*return*/, null];
                    }
                    default: {
                        return [2 /*return*/, this._client.helix.users.getUserById(this._data.owner_id)];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixEmoteFromSet.prototype, "_client", void 0);
    HelixEmoteFromSet = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixEmoteFromSet', 'id')
    ], HelixEmoteFromSet);
    return HelixEmoteFromSet;
}(HelixEmote_1.HelixEmote));
exports.HelixEmoteFromSet = HelixEmoteFromSet;

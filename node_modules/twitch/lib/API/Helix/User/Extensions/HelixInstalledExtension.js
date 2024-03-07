"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixInstalledExtension = void 0;
var tslib_1 = require("tslib");
var twitch_common_1 = require("twitch-common");
var HelixExtension_1 = require("./HelixExtension");
/**
 * A Twitch Extension that is installed in a slot of a channel.
 *
 * @inheritDoc
 */
var HelixInstalledExtension = /** @class */ (function (_super) {
    tslib_1.__extends(HelixInstalledExtension, _super);
    /** @private */
    function HelixInstalledExtension(slotType, slotId, data) {
        var _this = _super.call(this, data) || this;
        _this._slotType = slotType;
        _this._slotId = slotId;
        return _this;
    }
    Object.defineProperty(HelixInstalledExtension.prototype, "slotType", {
        /**
         * The type of the slot the extension is in.
         */
        get: function () {
            return this._slotType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixInstalledExtension.prototype, "slotId", {
        /**
         * The ID of the slot the extension is in.
         */
        get: function () {
            return this._slotId;
        },
        enumerable: false,
        configurable: true
    });
    HelixInstalledExtension = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixInstalledExtension', 'id')
    ], HelixInstalledExtension);
    return HelixInstalledExtension;
}(HelixExtension_1.HelixExtension));
exports.HelixInstalledExtension = HelixInstalledExtension;

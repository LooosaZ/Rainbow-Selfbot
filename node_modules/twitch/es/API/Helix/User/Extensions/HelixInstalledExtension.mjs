import { __decorate, __extends } from "tslib";
import { rtfm } from 'twitch-common';
import { HelixExtension } from "./HelixExtension.mjs";
/**
 * A Twitch Extension that is installed in a slot of a channel.
 *
 * @inheritDoc
 */
var HelixInstalledExtension = /** @class */ (function (_super) {
    __extends(HelixInstalledExtension, _super);
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
    HelixInstalledExtension = __decorate([
        rtfm('twitch', 'HelixInstalledExtension', 'id')
    ], HelixInstalledExtension);
    return HelixInstalledExtension;
}(HelixExtension));
export { HelixInstalledExtension };

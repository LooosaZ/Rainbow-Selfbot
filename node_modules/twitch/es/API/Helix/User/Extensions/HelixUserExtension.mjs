import { __decorate, __extends } from "tslib";
import { rtfm } from 'twitch-common';
import { HelixExtension } from "./HelixExtension.mjs";
/**
 * A Twitch Extension that was installed by a user.
 *
 * @inheritDoc
 */
var HelixUserExtension = /** @class */ (function (_super) {
    __extends(HelixUserExtension, _super);
    function HelixUserExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelixUserExtension.prototype, "canActivate", {
        /**
         * Whether the user has configured the extension to be able to activate it.
         */
        get: function () {
            return this._data.can_activate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUserExtension.prototype, "types", {
        /**
         * The available types of the extension.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: false,
        configurable: true
    });
    HelixUserExtension = __decorate([
        rtfm('twitch', 'HelixUserExtension', 'id')
    ], HelixUserExtension);
    return HelixUserExtension;
}(HelixExtension));
export { HelixUserExtension };

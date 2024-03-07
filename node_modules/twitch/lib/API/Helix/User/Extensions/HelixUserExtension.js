"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixUserExtension = void 0;
var tslib_1 = require("tslib");
var twitch_common_1 = require("twitch-common");
var HelixExtension_1 = require("./HelixExtension");
/**
 * A Twitch Extension that was installed by a user.
 *
 * @inheritDoc
 */
var HelixUserExtension = /** @class */ (function (_super) {
    tslib_1.__extends(HelixUserExtension, _super);
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
    HelixUserExtension = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixUserExtension', 'id')
    ], HelixUserExtension);
    return HelixUserExtension;
}(HelixExtension_1.HelixExtension));
exports.HelixUserExtension = HelixUserExtension;

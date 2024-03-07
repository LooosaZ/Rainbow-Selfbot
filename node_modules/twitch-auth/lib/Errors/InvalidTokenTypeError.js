"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTokenTypeError = void 0;
var tslib_1 = require("tslib");
var twitch_common_1 = require("twitch-common");
/**
 * Thrown whenever a different token type (user vs. app) is expected in the method you're calling.
 */
var InvalidTokenTypeError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidTokenTypeError, _super);
    function InvalidTokenTypeError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidTokenTypeError;
}(twitch_common_1.CustomError));
exports.InvalidTokenTypeError = InvalidTokenTypeError;

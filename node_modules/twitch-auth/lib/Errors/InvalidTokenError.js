"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTokenError = void 0;
var tslib_1 = require("tslib");
var twitch_common_1 = require("twitch-common");
/**
 * Thrown whenever an invalid token is supplied.
 */
var InvalidTokenError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidTokenError, _super);
    /** @private */
    function InvalidTokenError() {
        return _super.call(this, 'Invalid token supplied') || this;
    }
    return InvalidTokenError;
}(twitch_common_1.CustomError));
exports.InvalidTokenError = InvalidTokenError;

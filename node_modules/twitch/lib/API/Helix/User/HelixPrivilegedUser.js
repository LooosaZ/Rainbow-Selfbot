"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixPrivilegedUser = void 0;
var tslib_1 = require("tslib");
var twitch_common_1 = require("twitch-common");
var HelixUser_1 = require("./HelixUser");
/**
 * A user you have extended privilges for, i.e. yourself.
 *
 * @inheritDoc
 */
var HelixPrivilegedUser = /** @class */ (function (_super) {
    tslib_1.__extends(HelixPrivilegedUser, _super);
    function HelixPrivilegedUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelixPrivilegedUser.prototype, "email", {
        /**
         * The email address of the user.
         */
        get: function () {
            return this._data.email;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Changes the description of the user.
     *
     * @param description The new description.
     */
    HelixPrivilegedUser.prototype.setDescription = function (description) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.updateUser({ description: description })];
            });
        });
    };
    HelixPrivilegedUser = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixPrivilegedUser', 'id')
    ], HelixPrivilegedUser);
    return HelixPrivilegedUser;
}(HelixUser_1.HelixUser));
exports.HelixPrivilegedUser = HelixPrivilegedUser;

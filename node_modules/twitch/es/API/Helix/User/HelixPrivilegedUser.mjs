import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { rtfm } from 'twitch-common';
import { HelixUser } from "./HelixUser.mjs";
/**
 * A user you have extended privilges for, i.e. yourself.
 *
 * @inheritDoc
 */
var HelixPrivilegedUser = /** @class */ (function (_super) {
    __extends(HelixPrivilegedUser, _super);
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
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.updateUser({ description: description })];
            });
        });
    };
    HelixPrivilegedUser = __decorate([
        rtfm('twitch', 'HelixPrivilegedUser', 'id')
    ], HelixPrivilegedUser);
    return HelixPrivilegedUser;
}(HelixUser));
export { HelixPrivilegedUser };

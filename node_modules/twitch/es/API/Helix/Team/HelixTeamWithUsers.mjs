import { __decorate, __extends } from "tslib";
import { rtfm } from 'twitch-common';
import { HelixUserRelation } from "../Relations/HelixUserRelation.mjs";
import { HelixTeam } from "./HelixTeam.mjs";
/**
 * A Stream Team with its member relations.
 *
 * @inheritDoc
 */
var HelixTeamWithUsers = /** @class */ (function (_super) {
    __extends(HelixTeamWithUsers, _super);
    function HelixTeamWithUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelixTeamWithUsers.prototype, "userRelations", {
        /**
         * The relations to the members of the team.
         */
        get: function () {
            var _this = this;
            return this._data.users.map(function (data) { return new HelixUserRelation(data, _this._client); });
        },
        enumerable: false,
        configurable: true
    });
    HelixTeamWithUsers = __decorate([
        rtfm('twitch', 'HelixTeamWithUsers', 'id')
    ], HelixTeamWithUsers);
    return HelixTeamWithUsers;
}(HelixTeam));
export { HelixTeamWithUsers };

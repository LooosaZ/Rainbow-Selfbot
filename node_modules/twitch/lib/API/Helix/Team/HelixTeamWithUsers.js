"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixTeamWithUsers = void 0;
var tslib_1 = require("tslib");
var twitch_common_1 = require("twitch-common");
var HelixUserRelation_1 = require("../Relations/HelixUserRelation");
var HelixTeam_1 = require("./HelixTeam");
/**
 * A Stream Team with its member relations.
 *
 * @inheritDoc
 */
var HelixTeamWithUsers = /** @class */ (function (_super) {
    tslib_1.__extends(HelixTeamWithUsers, _super);
    function HelixTeamWithUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelixTeamWithUsers.prototype, "userRelations", {
        /**
         * The relations to the members of the team.
         */
        get: function () {
            var _this = this;
            return this._data.users.map(function (data) { return new HelixUserRelation_1.HelixUserRelation(data, _this._client); });
        },
        enumerable: false,
        configurable: true
    });
    HelixTeamWithUsers = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixTeamWithUsers', 'id')
    ], HelixTeamWithUsers);
    return HelixTeamWithUsers;
}(HelixTeam_1.HelixTeam));
exports.HelixTeamWithUsers = HelixTeamWithUsers;

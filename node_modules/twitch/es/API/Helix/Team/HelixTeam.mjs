import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * A Stream Team.
 */
var HelixTeam = /** @class */ (function () {
    /** @private */
    function HelixTeam(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixTeam.prototype, "id", {
        /**
         * The ID of the team.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixTeam.prototype, "name", {
        /**
         * The name of the team.
         */
        get: function () {
            return this._data.team_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixTeam.prototype, "displayName", {
        /**
         * The display name of the team.
         */
        get: function () {
            return this._data.team_display_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixTeam.prototype, "backgroundImageUrl", {
        /**
         * The URL of the background image of the team.
         */
        get: function () {
            return this._data.background_image_url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixTeam.prototype, "bannerUrl", {
        /**
         * The URL of the banner of the team.
         */
        get: function () {
            return this._data.banner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixTeam.prototype, "creationDate", {
        /**
         * The date when the team was created.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixTeam.prototype, "updateDate", {
        /**
         * The date when the team was last updated.
         */
        get: function () {
            return new Date(this._data.updated_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixTeam.prototype, "info", {
        /**
         * The info of the team.
         *
         * May contain HTML tags.
         */
        get: function () {
            return this._data.info;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixTeam.prototype, "logoThumbnailUrl", {
        /**
         * The URL of the thumbnail of the team's logo.
         */
        get: function () {
            return this._data.thumbnail_url;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves the relations to the members of the team.
     */
    HelixTeam.prototype.getUserRelations = function () {
        return __awaiter(this, void 0, Promise, function () {
            var teamWithUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.helix.teams.getTeamById(this.id)];
                    case 1:
                        teamWithUsers = _a.sent();
                        return [2 /*return*/, teamWithUsers.userRelations];
                }
            });
        });
    };
    __decorate([
        Enumerable(false)
    ], HelixTeam.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixTeam.prototype, "_client", void 0);
    HelixTeam = __decorate([
        rtfm('twitch', 'HelixTeam', 'id')
    ], HelixTeam);
    return HelixTeam;
}());
export { HelixTeam };

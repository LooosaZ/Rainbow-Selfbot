"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixTeam = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var teamWithUsers;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.helix.teams.getTeamById(this.id)];
                    case 1:
                        teamWithUsers = _a.sent();
                        return [2 /*return*/, teamWithUsers.userRelations];
                }
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixTeam.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixTeam.prototype, "_client", void 0);
    HelixTeam = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixTeam', 'id')
    ], HelixTeam);
    return HelixTeam;
}());
exports.HelixTeam = HelixTeam;

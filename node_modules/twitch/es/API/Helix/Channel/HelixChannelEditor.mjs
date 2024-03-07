import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * An editor of a previously given channel.
 */
var HelixChannelEditor = /** @class */ (function () {
    /** @private */
    function HelixChannelEditor(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixChannelEditor.prototype, "userId", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixChannelEditor.prototype, "userDisplayName", {
        /**
         * The display name of the user.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves additional information about the user.
     */
    HelixChannelEditor.prototype.getUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixChannelEditor.prototype, "creationDate", {
        /**
         * The date when the user was given editor status.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], HelixChannelEditor.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixChannelEditor.prototype, "_client", void 0);
    HelixChannelEditor = __decorate([
        rtfm('twitch', 'HelixChannelEditor', 'userId')
    ], HelixChannelEditor);
    return HelixChannelEditor;
}());
export { HelixChannelEditor };

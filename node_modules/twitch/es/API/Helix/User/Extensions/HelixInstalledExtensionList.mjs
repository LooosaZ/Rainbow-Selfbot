/// <reference lib="es2019.array" />
import { __decorate, __read, __spread } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
import { HelixInstalledExtension } from "./HelixInstalledExtension.mjs";
/**
 * A list of extensions installed in a channel.
 */
var HelixInstalledExtensionList = /** @class */ (function () {
    /** @private */
    function HelixInstalledExtensionList(data) {
        this._data = data;
    }
    HelixInstalledExtensionList.prototype.getExtensionAtSlot = function (type, slotId) {
        var data = this._data[type][slotId];
        return data.active ? new HelixInstalledExtension(type, slotId, data) : null;
    };
    HelixInstalledExtensionList.prototype.getExtensionsForSlotType = function (type) {
        return __spread(Object.entries(this._data[type])).filter(function (entry) { return entry[1].active; })
            .map(function (_a) {
            var _b = __read(_a, 2), slotId = _b[0], slotData = _b[1];
            return new HelixInstalledExtension(type, slotId, slotData);
        });
    };
    HelixInstalledExtensionList.prototype.getAllExtensions = function () {
        return __spread(Object.entries(this._data)).flatMap(function (_a) {
            var _b = __read(_a, 2), type = _b[0], typeEntries = _b[1];
            return __spread(Object.entries(typeEntries)).filter(function (entry) { return entry[1].active; })
                .map(function (_a) {
                var _b = __read(_a, 2), slotId = _b[0], slotData = _b[1];
                return new HelixInstalledExtension(type, slotId, slotData);
            });
        });
    };
    __decorate([
        Enumerable(false)
    ], HelixInstalledExtensionList.prototype, "_data", void 0);
    HelixInstalledExtensionList = __decorate([
        rtfm('twitch', 'HelixInstalledExtensionList')
    ], HelixInstalledExtensionList);
    return HelixInstalledExtensionList;
}());
export { HelixInstalledExtensionList };

"use strict";
/// <reference lib="es2019.array" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixInstalledExtensionList = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var HelixInstalledExtension_1 = require("./HelixInstalledExtension");
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
        return data.active ? new HelixInstalledExtension_1.HelixInstalledExtension(type, slotId, data) : null;
    };
    HelixInstalledExtensionList.prototype.getExtensionsForSlotType = function (type) {
        return tslib_1.__spread(Object.entries(this._data[type])).filter(function (entry) { return entry[1].active; })
            .map(function (_a) {
            var _b = tslib_1.__read(_a, 2), slotId = _b[0], slotData = _b[1];
            return new HelixInstalledExtension_1.HelixInstalledExtension(type, slotId, slotData);
        });
    };
    HelixInstalledExtensionList.prototype.getAllExtensions = function () {
        return tslib_1.__spread(Object.entries(this._data)).flatMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), type = _b[0], typeEntries = _b[1];
            return tslib_1.__spread(Object.entries(typeEntries)).filter(function (entry) { return entry[1].active; })
                .map(function (_a) {
                var _b = tslib_1.__read(_a, 2), slotId = _b[0], slotData = _b[1];
                return new HelixInstalledExtension_1.HelixInstalledExtension(type, slotId, slotData);
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixInstalledExtensionList.prototype, "_data", void 0);
    HelixInstalledExtensionList = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixInstalledExtensionList')
    ], HelixInstalledExtensionList);
    return HelixInstalledExtensionList;
}());
exports.HelixInstalledExtensionList = HelixInstalledExtensionList;

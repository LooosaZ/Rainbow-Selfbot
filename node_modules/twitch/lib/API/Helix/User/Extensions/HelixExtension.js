"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixExtension = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
/** @protected */
var HelixExtension = /** @class */ (function () {
    /** @private */
    function HelixExtension(data) {
        this._data = data;
    }
    Object.defineProperty(HelixExtension.prototype, "id", {
        /**
         * The ID of the extension.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtension.prototype, "version", {
        /**
         * The version of the extension.
         */
        get: function () {
            return this._data.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtension.prototype, "name", {
        /**
         * The name of the extension.
         */
        get: function () {
            return this._data.name;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixExtension.prototype, "_data", void 0);
    return HelixExtension;
}());
exports.HelixExtension = HelixExtension;

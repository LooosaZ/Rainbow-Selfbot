import { __assign, __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { makePaginationQuery } from "../HelixPagination.mjs";
import { HelixExtensionTransaction } from "./HelixExtensionTransaction.mjs";
/**
 * The Helix API methods that deal with extensions.
 *
 * Can be accessed using `client.helix.extensions` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const transactions = await api.helix.extionsions.getExtensionTransactions('abcd');
 * ```
 */
var HelixExtensionsApi = /** @class */ (function (_super) {
    __extends(HelixExtensionsApi, _super);
    function HelixExtensionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of transactions for the given extension.
     *
     * @param extensionId The ID of the extension to retrieve transactions for.
     * @param filter Additional filters.
     */
    HelixExtensionsApi.prototype.getExtensionTransactions = function (extensionId, filter) {
        if (filter === void 0) { filter = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'extensions/transactions',
                            query: __assign({ extension_id: extensionId, id: filter.transactionIds }, makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixExtensionTransaction, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for transactions for the given extension.
     *
     * @param extensionId The ID of the extension to retrieve transactions for.
     * @param filter Additional filters.
     */
    HelixExtensionsApi.prototype.getExtensionTransactionsPaginated = function (extensionId, filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return new HelixPaginatedRequest({
            url: 'extensions/transactions',
            query: {
                extension_id: extensionId,
                id: filter.transactionIds
            }
        }, this._client, function (data) { return new HelixExtensionTransaction(data, _this._client); });
    };
    HelixExtensionsApi = __decorate([
        rtfm('twitch', 'HelixExtensionsApi')
    ], HelixExtensionsApi);
    return HelixExtensionsApi;
}(BaseApi));
export { HelixExtensionsApi };

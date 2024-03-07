/** @private */
export interface HelixExtensionData {
    id: string;
    version: string;
    name: string;
}
/** @protected */
export declare abstract class HelixExtension {
    /** @private */
    protected readonly _data: HelixExtensionData;
    /** @private */
    constructor(data: HelixExtensionData);
    /**
     * The ID of the extension.
     */
    get id(): string;
    /**
     * The version of the extension.
     */
    get version(): string;
    /**
     * The name of the extension.
     */
    get name(): string;
}

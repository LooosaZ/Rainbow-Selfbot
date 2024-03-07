/// <reference lib="es2019.array" />
import type { HelixExtensionData } from './HelixExtension';
import type { HelixExtensionSlotType } from './HelixInstalledExtension';
import { HelixInstalledExtension } from './HelixInstalledExtension';
/** @private */
export interface HelixInstalledExtensionData extends HelixExtensionData {
    active: true;
}
/** @private */
export interface HelixEmptySlotData {
    active: false;
}
/** @private */
export declare type HelixExtensionSlotData = HelixInstalledExtensionData | HelixEmptySlotData;
/** @private */
export interface HelixInstalledExtensionListData {
    panel: Record<'1' | '2' | '3', HelixExtensionSlotData>;
    overlay: Record<'1', HelixExtensionSlotData>;
    component: Record<'1' | '2', HelixExtensionSlotData>;
}
/**
 * A list of extensions installed in a channel.
 */
export declare class HelixInstalledExtensionList {
    private readonly _data;
    /** @private */
    constructor(data: HelixInstalledExtensionListData);
    getExtensionAtSlot(type: 'panel', slotId: '1' | '2' | '3'): HelixInstalledExtension | null;
    getExtensionAtSlot(type: 'overlay', slotId: '1'): HelixInstalledExtension | null;
    getExtensionAtSlot(type: 'component', slotId: '1' | '2'): HelixInstalledExtension | null;
    getExtensionsForSlotType(type: HelixExtensionSlotType): HelixInstalledExtension[];
    getAllExtensions(): HelixInstalledExtension[];
}

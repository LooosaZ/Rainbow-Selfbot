import type { HelixExtensionData } from './HelixExtension';
import { HelixExtension } from './HelixExtension';
import type { HelixExtensionSlotType } from './HelixInstalledExtension';
/** @private */
export declare type HelixExtensionType = HelixExtensionSlotType | 'mobile';
/** @private */
export interface HelixUserExtensionData extends HelixExtensionData {
    can_activate: boolean;
    type: HelixExtensionType[];
}
/**
 * A Twitch Extension that was installed by a user.
 *
 * @inheritDoc
 */
export declare class HelixUserExtension extends HelixExtension {
    /** @private */ protected readonly _data: HelixUserExtensionData;
    /**
     * Whether the user has configured the extension to be able to activate it.
     */
    get canActivate(): boolean;
    /**
     * The available types of the extension.
     */
    get types(): HelixExtensionType[];
}

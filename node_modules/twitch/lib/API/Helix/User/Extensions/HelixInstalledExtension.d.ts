import type { HelixExtensionData } from './HelixExtension';
import { HelixExtension } from './HelixExtension';
/**
 * The possible extension slot types.
 */
export declare type HelixExtensionSlotType = 'panel' | 'overlay' | 'component';
/**
 * A Twitch Extension that is installed in a slot of a channel.
 *
 * @inheritDoc
 */
export declare class HelixInstalledExtension extends HelixExtension {
    private readonly _slotType;
    private readonly _slotId;
    /** @private */
    constructor(slotType: HelixExtensionSlotType, slotId: string, data: HelixExtensionData);
    /**
     * The type of the slot the extension is in.
     */
    get slotType(): HelixExtensionSlotType;
    /**
     * The ID of the slot the extension is in.
     */
    get slotId(): string;
}

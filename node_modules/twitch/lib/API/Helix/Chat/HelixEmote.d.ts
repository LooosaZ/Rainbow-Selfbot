/** @private */
export interface HelixEmoteImageData {
    url_1x: string;
    url_2x: string;
    url_4x: string;
}
/** @private */
export declare type HelixEmoteImageScale = 1 | 2 | 4;
/** @private */
export interface HelixEmoteData {
    id: string;
    name: string;
    images: HelixEmoteImageData;
}
/**
 * A Twitch emote.
 */
export declare class HelixEmote {
    /** @private */ protected readonly _data: HelixEmoteData;
    /** @private */
    constructor(data: HelixEmoteData);
    /**
     * The ID of the emote.
     */
    get id(): string;
    /**
     * The name of the emote.
     */
    get name(): string;
    /**
     * Gets the URL of the emote image in the given scale.
     *
     * @param scale The scale of the image.
     */
    getImageUrl(scale: HelixEmoteImageScale): string;
}

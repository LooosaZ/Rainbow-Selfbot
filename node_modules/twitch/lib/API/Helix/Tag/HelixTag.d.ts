/** @private */
export interface HelixTagData {
    tag_id: string;
    is_auto: boolean;
    localization_names: Record<string, string>;
    localization_descriptions: Record<string, string>;
}
/**
 * A stream tag.
 */
export declare class HelixTag {
    private readonly _data;
    /** @private */
    constructor(data: HelixTagData);
    /**
     * The ID of the tag.
     */
    get id(): string;
    /**
     * Whether the tag is automatically assigned by Twitch.
     */
    get isAuto(): boolean;
    /**
     * Gets the name of the tag in the specified language.
     */
    getName(language: string): string | undefined;
    /**
     * Gets the description of the tag in the specified language.
     */
    getDescription(language: string): string | undefined;
}

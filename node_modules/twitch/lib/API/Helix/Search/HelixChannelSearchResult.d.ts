import type { ApiClient } from '../../../ApiClient';
import type { HelixGame } from '../Game/HelixGame';
import type { HelixTag } from '../Tag/HelixTag';
import type { HelixUser } from '../User/HelixUser';
/** @private */
export interface HelixChannelSearchResultData {
    broadcaster_language: string;
    id: string;
    broadcaster_login: string;
    display_name: string;
    game_id: string;
    game_name: string;
    is_live: boolean;
    tag_ids: string[];
    thumbnail_url: string;
    title: string;
    started_at: string;
}
/**
 * The result of a channel search.
 */
export declare class HelixChannelSearchResult {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixChannelSearchResultData, client: ApiClient);
    /**
     * The language of the channel.
     */
    get language(): string;
    /**
     * The ID of the channel.
     */
    get id(): string;
    /**
     * The name of the channel.
     */
    get name(): string;
    /**
     * The display name of the channel.
     */
    get displayName(): string;
    /**
     * Retrieves additional information about the owner of the channel.
     */
    getUser(): Promise<HelixUser | null>;
    /**
     * The ID of the game currently played on the channel.
     */
    get gameId(): string;
    /**
     * The name of the game currently played on the channel.
     */
    get gameName(): string;
    /**
     * Retrieves information about the game that is being played on the stream.
     */
    getGame(): Promise<HelixGame | null>;
    /**
     * Whether the channel is currently live.
     */
    get isLive(): boolean;
    /**
     * The IDs of the tags set on the channel.
     */
    get tagIds(): string[];
    /**
     * Retrieves the tags of the channel.
     */
    getTags(): Promise<HelixTag[]>;
    /**
     * The thumbnail URL of the stream.
     */
    get thumbnailUrl(): string;
    /**
     * The start date of the stream. Returns `null` if the stream is not live.
     */
    get startDate(): Date | null;
}

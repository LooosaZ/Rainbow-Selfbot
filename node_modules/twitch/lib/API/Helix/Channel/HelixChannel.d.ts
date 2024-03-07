import type { ApiClient } from '../../../ApiClient';
import type { HelixGame } from '../Game/HelixGame';
/** @private */
export interface HelixChannelData {
    broadcaster_id: string;
    broadcaster_login: string;
    broadcaster_name: string;
    broadcaster_language: string;
    game_id: string;
    game_name: string;
    title: string;
    delay: number;
}
/**
 * A Twitch channel.
 */
export declare class HelixChannel {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixChannelData, client: ApiClient);
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
     * The language of the channel.
     */
    get language(): string;
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
     * The title of the channel.
     */
    get title(): string;
    /**
     * The stream delay of the channel, in seconds.
     */
    get delay(): number;
}

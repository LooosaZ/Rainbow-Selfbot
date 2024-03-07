import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
/** @private */
export interface HelixBitsLeaderboardEntryData {
    user_id: string;
    user_login: string;
    user_name: string;
    rank: number;
    score: number;
}
/**
 * A Bits leaderboard entry.
 */
export declare class HelixBitsLeaderboardEntry {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixBitsLeaderboardEntryData, client: ApiClient);
    /**
     * The ID of the user on the leaderboard.
     */
    get userId(): string;
    /**
     * The name of the user on the leaderboard.
     */
    get userName(): string;
    /**
     * The display name of the user on the leaderboard.
     */
    get userDisplayName(): string;
    /**
     * The position of the user on the leaderboard.
     */
    get rank(): number;
    /**
     * The amount of bits used in the given period of time.
     */
    get amount(): number;
    /**
     * Retrieves the user of entry on the leaderboard.
     */
    getUser(): Promise<HelixUser | null>;
}

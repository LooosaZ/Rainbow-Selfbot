import type { HelixUser } from '../User/HelixUser';
import type { ApiClient } from '../../../ApiClient';
/** @private */
export interface HelixBanData {
    user_id: string;
    user_login: string;
    user_name: string;
    expires_at: string;
}
/**
 * Information about the ban of a user.
 */
export declare class HelixBan {
    private readonly _data;
    /** @private */ protected readonly _client: ApiClient;
    /** @private */
    constructor(data: HelixBanData, client: ApiClient);
    /**
     * The ID of the banned user.
     */
    get userId(): string;
    /**
     * The name of the banned user.
     */
    get userName(): string;
    /**
     * The display name of the banned user.
     */
    get userDisplayName(): string;
    /**
     * Retrieves more information about the user.
     */
    getUser(): Promise<HelixUser | null>;
    /**
     * The date when the ban will expire; null for permanent bans.
     */
    get expiryDate(): Date | null;
}

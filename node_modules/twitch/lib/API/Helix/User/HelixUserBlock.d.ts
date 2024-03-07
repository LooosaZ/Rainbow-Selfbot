import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
/** @private */
export interface HelixUserBlockData {
    user_id: string;
    user_login: string;
    display_name: string;
}
/**
 * An user blocked by a previously given user.
 */
export declare class HelixUserBlock {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixUserBlockData, client: ApiClient);
    /**
     * The ID of the blocked user.
     */
    get userId(): string;
    /**
     * The name of the blocked user.
     */
    get userName(): string;
    /**
     * The display name of the blocked user.
     */
    get userDisplayName(): string;
    /**
     * Retrieves additional information about the blocked user.
     */
    getUser(): Promise<HelixUser | null>;
}

import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
/** @private */
export interface HelixModeratorData {
    user_id: string;
    user_login: string;
    user_name: string;
}
/**
 * Information about the moderator status of a user.
 */
export declare class HelixModerator {
    private readonly _data;
    /** @private */ protected readonly _client: ApiClient;
    /** @private */
    constructor(data: HelixModeratorData, client: ApiClient);
    /**
     * The ID of the user.
     */
    get userId(): string;
    /**
     * The name of the user.
     */
    get userName(): string;
    /**
     * The display name of the user.
     */
    get userDisplayName(): string;
    /**
     * Retrieves more information about the user.
     */
    getUser(): Promise<HelixUser | null>;
}

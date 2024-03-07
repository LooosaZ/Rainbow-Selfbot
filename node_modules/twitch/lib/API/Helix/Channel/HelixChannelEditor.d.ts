import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
/** @private */
export interface HelixChannelEditorData {
    user_id: string;
    user_name: string;
    created_at: string;
}
/**
 * An editor of a previously given channel.
 */
export declare class HelixChannelEditor {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixChannelEditorData, client: ApiClient);
    /**
     * The ID of the user.
     */
    get userId(): string;
    /**
     * The display name of the user.
     */
    get userDisplayName(): string;
    /**
     * Retrieves additional information about the user.
     */
    getUser(): Promise<HelixUser | null>;
    /**
     * The date when the user was given editor status.
     */
    get creationDate(): Date;
}

import type { UserIdResolvable } from 'twitch-common';
import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from './HelixUser';
/**
 * Filters for the follower request.
 */
export interface HelixFollowFilter {
    /**
     * The following user.
     */
    user?: UserIdResolvable;
    /**
     * The followed user.
     */
    followedUser?: UserIdResolvable;
}
/** @private */
export interface HelixFollowData {
    from_id: string;
    from_login: string;
    from_name: string;
    to_id: string;
    to_login: string;
    to_name: string;
    followed_at: string;
}
/**
 * A relation of a user following a broadcaster.
 */
export declare class HelixFollow {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixFollowData, client: ApiClient);
    /**
     * The user ID of the following user.
     */
    get userId(): string;
    /**
     * The name of the following user.
     */
    get userName(): string;
    /**
     * The display name of the following user.
     */
    get userDisplayName(): string;
    /**
     * Retrieves the data of the following user.
     */
    getUser(): Promise<HelixUser | null>;
    /**
     * The user ID of the followed broadcaster.
     */
    get followedUserId(): string;
    /**
     * The name of the followed user.
     */
    get followedUserName(): string;
    /**
     * The display name of the followed user.
     */
    get followedUserDisplayName(): string;
    /**
     * Retrieves the data of the followed broadcaster.
     */
    getFollowedUser(): Promise<HelixUser | null>;
    /**
     * The date when the user followed the broadcaster.
     */
    get followDate(): Date;
}

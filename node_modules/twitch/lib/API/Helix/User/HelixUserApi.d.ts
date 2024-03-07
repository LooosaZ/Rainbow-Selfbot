import type { UserIdResolvable, UserNameResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import { HelixPaginatedRequestWithTotal } from '../HelixPaginatedRequestWithTotal';
import type { HelixPaginatedResult, HelixPaginatedResultWithTotal } from '../HelixPaginatedResult';
import type { HelixForwardPagination } from '../HelixPagination';
import { HelixInstalledExtensionList } from './Extensions/HelixInstalledExtensionList';
import { HelixUserExtension } from './Extensions/HelixUserExtension';
import type { HelixUserExtensionUpdatePayload } from './Extensions/HelixUserExtensionUpdatePayload';
import type { HelixFollowData, HelixFollowFilter } from './HelixFollow';
import { HelixFollow } from './HelixFollow';
import { HelixPrivilegedUser } from './HelixPrivilegedUser';
import { HelixUser } from './HelixUser';
import type { HelixUserBlockData } from './HelixUserBlock';
import { HelixUserBlock } from './HelixUserBlock';
/** @private */
export declare enum UserLookupType {
    Id = "id",
    Login = "login"
}
/**
 * User data to update using {@HelixUserApi#updateUser}.
 */
export interface HelixUserUpdate {
    description?: string;
}
/**
 * Additional info for a block to be created.
 */
export interface HelixUserBlockAdditionalInfo {
    /**
     * The source context for blocking the user.
     */
    sourceContext?: 'chat' | 'whisper';
    /**
     * The reason for blocking the user.
     */
    reason?: 'spam' | 'harassment' | 'other';
}
/**
 * The Helix API methods that deal with users.
 *
 * Can be accessed using `client.helix.users` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const user = await api.helix.users.getUserById('125328655');
 * ```
 */
export declare class HelixUserApi extends BaseApi {
    /**
     * Retrieves the user data for the given list of user IDs.
     *
     * @param userIds The user IDs you want to look up.
     */
    getUsersByIds(userIds: UserIdResolvable[]): Promise<HelixUser[]>;
    /**
     * Retrieves the user data for the given list of user names.
     *
     * @param userNames The user names you want to look up.
     */
    getUsersByNames(userNames: UserNameResolvable[]): Promise<HelixUser[]>;
    /**
     * Retrieves the user data for the given user ID.
     *
     * @param userId The user ID you want to look up.
     */
    getUserById(userId: UserIdResolvable): Promise<HelixUser | null>;
    /**
     * Retrieves the user data for the given user name.
     *
     * @param userName The user name you want to look up.
     */
    getUserByName(userName: UserNameResolvable): Promise<HelixUser | null>;
    /**
     * Retrieves the user data of the currently authenticated user.
     *
     * @param withEmail Whether you need the user's email address.
     */
    getMe(withEmail?: boolean): Promise<HelixPrivilegedUser>;
    /**
     * Updates the currently authenticated user's data.
     *
     * @param data The data to update.
     */
    updateUser(data: HelixUserUpdate): Promise<HelixPrivilegedUser>;
    /**
     * Retrieves a list of follow relations.
     *
     * @param filter Several filtering and pagination parameters. See the {@HelixFollowFilter} documentation.
     */
    getFollows(filter: HelixFollowFilter): Promise<HelixPaginatedResultWithTotal<HelixFollow>>;
    /**
     * Creates a paginator for follow relations.
     *
     * @param filter Several filtering and pagination parameters. See the {@HelixFollowFilter} documentation.
     */
    getFollowsPaginated(filter: HelixFollowFilter): HelixPaginatedRequestWithTotal<HelixFollowData, HelixFollow>;
    /**
     * Retrieves the follow relation bewteen a given user and a given broadcaster.
     *
     * @param user The user to retrieve the follow relation for.
     * @param broadcaster The broadcaster to retrieve the follow relation for.
     */
    getFollowFromUserToBroadcaster(user: UserIdResolvable, broadcaster: UserIdResolvable): Promise<HelixFollow | null>;
    /**
     * Checks whether the given user follows the given broadcaster.
     *
     * @param user The user to check the follow for.
     * @param broadcaster The broadcaster to check the follow for.
     */
    userFollowsBroadcaster(user: UserIdResolvable, broadcaster: UserIdResolvable): Promise<boolean>;
    /**
     * Creates a new follow from a user to another user.
     *
     * @param fromUser The user to create the follow for.
     * @param toUser The user to follow.
     * @param allowNotifications Whether email or push notifications are allowed to be created.
     *
     * The user `fromUser` still needs to have this enabled in their settings as well.
     */
    createFollow(fromUser: UserIdResolvable, toUser: UserIdResolvable, allowNotifications?: boolean): Promise<void>;
    /**
     * Removes a follow from a user to another user.
     *
     * @param fromUser The user to remove the follow for.
     * @param toUser The user to unfollow.
     */
    deleteFollow(fromUser: UserIdResolvable, toUser: UserIdResolvable): Promise<void>;
    /**
     * Retrieves a list of users blocked by the given user.
     *
     * @param user The user to retrieve blocks for.
     * @param pagination
     *
     * @expandParams
     */
    getBlocks(user: UserIdResolvable, pagination?: HelixForwardPagination): Promise<HelixPaginatedResult<HelixUserBlock>>;
    /**
     * Creates a paginator for users blocked by the given user.
     *
     * @param user The user to retrieve blocks for.
     */
    getBlocksPaginated(user: UserIdResolvable): HelixPaginatedRequest<HelixUserBlockData, HelixUserBlock>;
    /**
     * Blocks the given user.
     *
     * @param target The user to block.
     * @param additionalInfo Additional info to give context to the block.
     *
     * @expandParams
     */
    createBlock(target: UserIdResolvable, additionalInfo?: HelixUserBlockAdditionalInfo): Promise<void>;
    /**
     * Unblocks the given user.
     *
     * @param target The user to unblock.
     */
    deleteBlock(target: UserIdResolvable): Promise<void>;
    /**
     * Retrieves a list of all extensions for the authenticated user.
     */
    getMyExtensions(): Promise<HelixUserExtension[]>;
    /**
     * Retrieves a list of all installed extensions for the given user.
     *
     * @param user The user to get the installed extensions for.
     *
     * If not given, get the installed extensions for the authenticated user.
     */
    getActiveExtensions(user?: UserIdResolvable): Promise<HelixInstalledExtensionList>;
    /**
     * Updates the installed extensions for the authenticated user.
     *
     * @param data The extension installation payload.
     *
     * The format is shown on the [Twitch documentation](https://dev.twitch.tv/docs/api/reference#update-user-extensions).
     * Don't use the "data" wrapper though.
     */
    updateMyActiveExtensions(data: HelixUserExtensionUpdatePayload): Promise<HelixInstalledExtensionList>;
    private static _makeFollowsQuery;
    private _getUsers;
}

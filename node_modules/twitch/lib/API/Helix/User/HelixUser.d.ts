import type { UserIdResolvable, UserIdResolvableType, UserNameResolveableType } from 'twitch-common';
import type { ApiClient } from '../../../ApiClient';
import type { UserFollow } from '../../Kraken/User/UserFollow';
import type { HelixPaginatedResultWithTotal } from '../HelixPaginatedResult';
import type { HelixStream } from '../Stream/HelixStream';
import type { HelixSubscription } from '../Subscriptions/HelixSubscription';
import type { HelixFollow } from './HelixFollow';
/**
 * The type of a broadcaster.
 */
export declare enum HelixBroadcasterType {
    /**
     * A Twitch Partner.
     */
    Partner = "partner",
    /**
     * A Twitch Affiliate.
     */
    Affiliate = "affiliate",
    /**
     * A user that's neither a partner nor an affiliate.
     */
    None = ""
}
/**
 * The type of a user.
 */
export declare enum HelixUserType {
    /**
     * A Twitch staff member.
     */
    Staff = "staff",
    /**
     * A Twitch administrator.
     */
    Admin = "admin",
    /**
     * A global moderator.
     */
    GlobalMod = "global_mod",
    /**
     * A user with no special permissions across Twitch.
     */
    None = ""
}
/** @private */
export interface HelixUserData {
    id: string;
    login: string;
    display_name: string;
    description: string;
    type: HelixUserType;
    broadcaster_type: HelixBroadcasterType;
    profile_image_url: string;
    offline_image_url: string;
    view_count: number;
    created_at: string;
}
/**
 * A Twitch user.
 */
export declare class HelixUser implements UserIdResolvableType, UserNameResolveableType {
    /** @private */ protected readonly _data: HelixUserData;
    /** @private */ protected readonly _client: ApiClient;
    /** @private */
    constructor(data: HelixUserData, client: ApiClient);
    /** @private */
    get cacheKey(): string;
    /**
     * The ID of the user.
     */
    get id(): string;
    /**
     * The name of the user.
     */
    get name(): string;
    /**
     * The display name of the user.
     */
    get displayName(): string;
    /**
     * The description of the user.
     */
    get description(): string;
    /**
     * The type of the user.
     */
    get type(): HelixUserType;
    /**
     * The type of the user.
     */
    get broadcasterType(): string;
    /**
     * The URL to the profile picture of the user.
     */
    get profilePictureUrl(): string;
    /**
     * The URL to the offline video placeholder of the user.
     */
    get offlinePlaceholderUrl(): string;
    /**
     * The total number of views of the user's channel.
     */
    get views(): number;
    /**
     * The date when the user was created, i.e. when they registered on Twitch.
     */
    get creationDate(): Date;
    /**
     * Retrieves the channel's stream data.
     */
    getStream(): Promise<HelixStream | null>;
    /**
     * Retrieves a list of broadcasters the user follows.
     */
    getFollows(): Promise<HelixPaginatedResultWithTotal<HelixFollow>>;
    /**
     * Retrieves the follow data of the given user to the broadcaster.
     *
     * @param user The user to check the follow from.
     */
    getFollowFrom(user: UserIdResolvable): Promise<HelixFollow | null>;
    /**
     * Retrieves the follow data of the user to the given broadcaster.
     *
     * @param broadcaster The broadcaster to check the follow to.
     */
    getFollowTo(broadcaster: UserIdResolvable): Promise<HelixFollow | null>;
    /**
     * Checks whether the user is following the given broadcaster.
     *
     * @param broadcaster The broadcaster to check the user's follow to.
     */
    follows(broadcaster: UserIdResolvable): Promise<boolean>;
    /**
     * Checks whether the given user is following the broadcaster.
     *
     * @param user The user to check the broadcaster's follow from.
     */
    isFollowedBy(user: UserIdResolvable): Promise<boolean>;
    /**
     * Follows the broadcaster.
     */
    follow(): Promise<UserFollow>;
    /**
     * Unfollows the broadcaster.
     */
    unfollow(): Promise<void>;
    /**
     * Retrieves the subscription data for the user to the given broadcaster, or `null` if the user is not subscribed.
     *
     * @param broadcaster The broadcaster you want to get the subscription data for.
     */
    getSubscriptionTo(broadcaster: UserIdResolvable): Promise<HelixSubscription | null>;
    /**
     * Checks whether the user is subscribed to the given broadcaster.
     *
     * @param broadcaster The broadcaster you want to check the subscription for.
     */
    isSubscribedTo(broadcaster: UserIdResolvable): Promise<boolean>;
}

import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import { HelixPaginatedRequestWithTotal } from '../HelixPaginatedRequestWithTotal';
import type { HelixPaginatedResult, HelixPaginatedResultWithTotal } from '../HelixPaginatedResult';
import type { HelixSubscriptionData } from './HelixSubscription';
import { HelixSubscription } from './HelixSubscription';
import type { HelixSubscriptionEventData } from './HelixSubscriptionEvent';
import { HelixSubscriptionEvent } from './HelixSubscriptionEvent';
import { HelixUserSubscription } from './HelixUserSubscription';
/**
 * The Helix API methods that deal with subscriptions.
 *
 * Can be accessed using `client.helix.subscriptions` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const subscription = await api.helix.subscriptions.getSubscriptionForUser('61369223', '125328655');
 * ```
 */
export declare class HelixSubscriptionApi extends BaseApi {
    /**
     * Retrieves a list of all subscriptions to a given broadcaster.
     *
     * @param broadcaster The broadcaster to list subscriptions to.
     */
    getSubscriptions(broadcaster: UserIdResolvable): Promise<HelixPaginatedResultWithTotal<HelixSubscription>>;
    /**
     * Creates a paginator for all subscriptions to a given broadcaster.
     *
     * @param broadcaster The broadcaster to list subscriptions to.
     */
    getSubscriptionsPaginated(broadcaster: UserIdResolvable): HelixPaginatedRequestWithTotal<HelixSubscriptionData, HelixSubscription>;
    /**
     * Retrieves the subset of the given user list that is subscribed to the given broadcaster.
     *
     * @param broadcaster The broadcaster to find subscriptions to.
     * @param users The users that should be checked for subscriptions.
     */
    getSubscriptionsForUsers(broadcaster: UserIdResolvable, users: UserIdResolvable[]): Promise<HelixSubscription[]>;
    /**
     * Retrieves the subscription data for a given user to a given broadcaster.
     *
     * This checks with the authorization of a broadcaster.
     * If you only have the authorization of a user, check {@HelixSubscriptionApi#checkUserSubscription}.
     *
     * @param broadcaster The broadcaster to check.
     * @param user The user to check.
     */
    getSubscriptionForUser(broadcaster: UserIdResolvable, user: UserIdResolvable): Promise<HelixSubscription | null>;
    /**
     * Retrieves the most recent subscription events for a given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve subscription events for.
     */
    getSubscriptionEventsForBroadcaster(broadcaster: UserIdResolvable): Promise<HelixPaginatedResult<HelixSubscriptionEvent>>;
    /**
     * Creates a paginator for the recent subscription events for a given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve subscription events for.
     */
    getSubscriptionEventsForBroadcasterPaginated(broadcaster: UserIdResolvable): HelixPaginatedRequest<HelixSubscriptionEventData, HelixSubscriptionEvent>;
    /**
     * Retrieves a single subscription event by ID.
     *
     * @param id The event ID.
     */
    getSubscriptionEventById(id: string): Promise<HelixSubscriptionEvent | null>;
    /**
     * Checks if a given user is subscribed to a given broadcaster. Returns null if not subscribed.
     *
     * This checks with the authorization of a user.
     * If you only have the authorization of a broadcaster, check {@HelixSubscriptionApi#getSubscriptionForUser}.
     *
     * @param user The broadcaster to check the user's subscription for.
     * @param broadcaster The user to check.
     */
    checkUserSubscription(user: UserIdResolvable, broadcaster: UserIdResolvable): Promise<HelixUserSubscription | null>;
    private _getSubscriptionEvents;
}

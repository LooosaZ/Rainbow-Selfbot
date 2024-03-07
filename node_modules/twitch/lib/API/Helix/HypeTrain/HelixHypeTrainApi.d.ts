import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import type { HelixEventData } from '../HelixEvent';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixForwardPagination } from '../HelixPagination';
import type { HelixHypeTrainEventData, HelixHypeTrainEventType } from './HelixHypeTrainEvent';
import { HelixHypeTrainEvent } from './HelixHypeTrainEvent';
/**
 * The Helix API methods that deal with Hype Trains.
 *
 * Can be accessed using `client.helix.hypeTrain` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: events } = await api.helix.hypeTrain.getHypeTrainEventsForBroadcaster('125328655');
 * ```
 */
export default class HelixHypeTrainApi extends BaseApi {
    /**
     * Retrieves the events of the current or latest Hype Train for the specified broadcaster.
     *
     * @param broadcaster The broadcaster to fetch Hype Train events for.
     * @param pagination
     *
     * @expandParams
     */
    getHypeTrainEventsForBroadcaster(broadcaster: UserIdResolvable, pagination?: HelixForwardPagination): Promise<HelixPaginatedResult<HelixHypeTrainEvent>>;
    /**
     * Creates a paginator for the events of the current or latest Hype Train for the specified broadcaster.
     *
     * @param broadcaster The broadcaster to fetch Hype Train events for.
     */
    getHypeTrainEventsForBroadcasterPaginated(broadcaster: UserIdResolvable): HelixPaginatedRequest<HelixEventData<HelixHypeTrainEventData, HelixHypeTrainEventType>, HelixHypeTrainEvent>;
    /**
     * Retrieves a single Hype Train event by ID.
     *
     * @param id The ID of the Hype Train event.
     */
    getHypeTrainEventById(id: string): Promise<HelixHypeTrainEvent | null>;
}

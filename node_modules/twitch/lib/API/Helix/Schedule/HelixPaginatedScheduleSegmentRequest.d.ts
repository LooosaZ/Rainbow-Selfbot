import type { TwitchApiCallOptions } from 'twitch-api-call';
import type { UserIdResolvable } from 'twitch-common';
import type { ApiClient } from '../../../ApiClient';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResponse } from '../HelixResponse';
import type { HelixScheduleFilter } from './HelixScheduleApi';
import type { HelixScheduleSegmentData } from './HelixScheduleSegment';
import { HelixScheduleSegment } from './HelixScheduleSegment';
/**
 * A paginator specifically for schedule segments.
 */
export declare class HelixPaginatedScheduleSegmentRequest extends HelixPaginatedRequest<HelixScheduleSegmentData, HelixScheduleSegment> {
    /** @private */
    constructor(broadcaster: UserIdResolvable, client: ApiClient, filter?: HelixScheduleFilter);
    /** @private */
    protected _fetchData(additionalOptions?: Partial<TwitchApiCallOptions>): Promise<HelixPaginatedResponse<HelixScheduleSegmentData>>;
}

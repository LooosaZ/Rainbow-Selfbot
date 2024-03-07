import { BaseApi } from '../BaseApi';
import { HelixBitsApi } from './Bits/HelixBitsApi';
import { HelixChannelApi } from './Channel/HelixChannelApi';
import { HelixChannelPointsApi } from './ChannelPoints/HelixChannelPointsApi';
import { HelixChatApi } from './Chat/HelixChatApi';
import { HelixClipApi } from './Clip/HelixClipApi';
import { HelixEventSubApi } from './EventSub/HelixEventSubApi';
import { HelixExtensionsApi } from './Extensions/HelixExtensionsApi';
import { HelixGameApi } from './Game/HelixGameApi';
import HelixHypeTrainApi from './HypeTrain/HelixHypeTrainApi';
import { HelixModerationApi } from './Moderation/HelixModerationApi';
import { HelixPollApi } from './Poll/HelixPollApi';
import { HelixPredictionApi } from './Prediction/HelixPredictionApi';
import { HelixScheduleApi } from './Schedule/HelixScheduleApi';
import { HelixSearchApi } from './Search/HelixSearchApi';
import { HelixStreamApi } from './Stream/HelixStreamApi';
import { HelixSubscriptionApi } from './Subscriptions/HelixSubscriptionApi';
import { HelixTagApi } from './Tag/HelixTagApi';
import { HelixTeamApi } from './Team/HelixTeamApi';
import { HelixUserApi } from './User/HelixUserApi';
import { HelixVideoApi } from './Video/HelixVideoApi';
import { HelixWebHooksApi } from './WebHooks/HelixWebHooksApi';
/**
 * Groups all API calls available in Helix a.k.a. the "New Twitch API".
 *
 * Can be accessed using {@ApiClient#helix}.
 */
export declare class HelixApiGroup extends BaseApi {
    /**
     * The Helix bits API methods.
     */
    get bits(): HelixBitsApi;
    /**
     * The Helix channels API methods.
     */
    get channels(): HelixChannelApi;
    /**
     * The Helix channel points API methods.
     */
    get channelPoints(): HelixChannelPointsApi;
    /**
     * The Helix chat API methods.
     */
    get chat(): HelixChatApi;
    /**
     * The Helix clips API methods.
     */
    get clips(): HelixClipApi;
    /**
     * The Helix EventSub API methods.
     */
    get eventSub(): HelixEventSubApi;
    /**
     * The Helix extensions API methods.
     */
    get extensions(): HelixExtensionsApi;
    /**
     * The Helix game API methods.
     */
    get games(): HelixGameApi;
    /**
     * The Helix Hype Train API methods.
     */
    get hypeTrain(): HelixHypeTrainApi;
    /**
     * The Helix moderation API methods.
     */
    get moderation(): HelixModerationApi;
    /**
     * The Helix poll API methods.
     */
    get polls(): HelixPollApi;
    /**
     * The Helix prediction API methods.
     */
    get predictions(): HelixPredictionApi;
    /**
     * The Helix schedule API methods.
     */
    get schedule(): HelixScheduleApi;
    /**
     * The Helix search API methods.
     */
    get search(): HelixSearchApi;
    /**
     * The Helix stream API methods.
     */
    get streams(): HelixStreamApi;
    /**
     * The Helix subscription API methods.
     */
    get subscriptions(): HelixSubscriptionApi;
    /**
     * The Helix tag API methods.
     */
    get tags(): HelixTagApi;
    /**
     * The Helix team API methods.
     */
    get teams(): HelixTeamApi;
    /**
     * The Helix user API methods.
     */
    get users(): HelixUserApi;
    /**
     * The Helix video API methods.
     */
    get videos(): HelixVideoApi;
    /**
     * The Helix WebHook API methods.
     */
    get webHooks(): HelixWebHooksApi;
}

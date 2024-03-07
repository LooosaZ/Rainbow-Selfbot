import type { ApiClient } from '../../../ApiClient';
export declare type HelixEventSubSubscriptionStatus = 'enabled' | 'webhook_callback_verification_pending' | 'webhook_callback_verification_failed' | 'notification_failures_exceeded' | 'authorization_revoked' | 'user_removed';
/** @private */
export interface HelixEventSubWebHookTransportData {
    /**
     * The type of transport.
     */
    method: 'webhook';
    /**
     * The callback URL to send event notifications to.
     */
    callback: string;
}
/** @private */
export declare type HelixEventSubTransportData = HelixEventSubWebHookTransportData;
/** @private */
export interface HelixEventSubSubscriptionData {
    id: string;
    status: HelixEventSubSubscriptionStatus;
    type: string;
    version: string;
    condition: Record<string, unknown>;
    created_at: string;
    transport: HelixEventSubTransportData;
}
/**
 * An EventSub subscription.
 */
export declare class HelixEventSubSubscription {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixEventSubSubscriptionData, client: ApiClient);
    /**
     * The ID of the subscription.
     */
    get id(): string;
    /**
     * The status of the subscription.
     */
    get status(): HelixEventSubSubscriptionStatus;
    /**
     * The event type that the subscription is listening to.
     */
    get type(): string;
    /**
     * The condition of the subscription.
     */
    get condition(): Record<string, unknown>;
    /**
     * The date and time of creation of the subscription.
     */
    get creationDate(): Date;
    /**
     * End the EventSub subscription.
     */
    unsubscribe(): Promise<void>;
    /** @private */
    get _transport(): HelixEventSubTransportData;
    /** @private */
    set _status(status: HelixEventSubSubscriptionStatus);
}

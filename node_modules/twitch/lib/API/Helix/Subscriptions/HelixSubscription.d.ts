import type { HelixUser } from '../User/HelixUser';
import type { HelixUserSubscriptionData } from './HelixUserSubscription';
import { HelixUserSubscription } from './HelixUserSubscription';
/** @private */
export interface HelixSubscriptionData extends HelixUserSubscriptionData {
    gifter_id: string;
    gifter_login: string;
    gifter_name: string;
    plan_name: string;
    user_id: string;
    user_login: string;
    user_name: string;
    message?: string;
}
/**
 * A (paid) subscription of a user to a broadcaster.
 *
 * @inheritDoc
 */
export declare class HelixSubscription extends HelixUserSubscription {
    /** @private */ protected readonly _data: HelixSubscriptionData;
    /**
     * The user ID of the gifter.
     */
    get gifterId(): string;
    /**
     * The name of the gifter.
     */
    get gifterName(): string;
    /**
     * The display name of the gifter.
     */
    get giftName(): string;
    /**
     * Retrieves more information about the gifter.
     */
    getGifter(): Promise<HelixUser | null>;
    /**
     * The user ID of the subscribed user.
     */
    get userId(): string;
    /**
     * The name of the subscribed user.
     */
    get userName(): string;
    /**
     * The display name of the subscribed user.
     */
    get userDisplayName(): string;
    /**
     * Retrieves more information about the subscribed user.
     */
    getUser(): Promise<HelixUser | null>;
}

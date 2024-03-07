/** @private */
export interface HelixPollChoiceData {
    id: string;
    title: string;
    votes: number;
    channel_points_votes: number;
    bits_votes: number;
}
/**
 * A choice in a channel poll.
 */
export declare class HelixPollChoice {
    private readonly _data;
    /** @private */
    constructor(data: HelixPollChoiceData);
    /**
     * The ID of the choice.
     */
    get id(): string;
    /**
     * The title of the choice.
     */
    get title(): string;
    /**
     * The total votes the choice received.
     */
    get totalVotes(): number;
    /**
     * The votes the choice received by spending channel points.
     */
    get channelPointsVotes(): number;
    /**
     * The votes the choice received by spending bits.
     */
    get bitsVotes(): number;
}

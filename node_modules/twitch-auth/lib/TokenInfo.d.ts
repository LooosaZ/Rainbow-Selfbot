export interface TokenInfoData {
    client_id: string;
    login: string;
    scopes: string[];
    user_id: string;
    expires_in?: number;
}
/**
 * Information about an access token.
 */
export declare class TokenInfo {
    private readonly _obtainmentDate;
    private readonly _data;
    /** @private */
    constructor(data: TokenInfoData);
    /**
     * The client ID.
     */
    get clientId(): string;
    /**
     * The ID of the authenticated user.
     */
    get userId(): string;
    /**
     * The name of the authenticated user.
     */
    get userName(): string;
    /**
     * The scopes for which the token is valid.
     */
    get scopes(): string[];
    /**
     * The time when the token will expire.
     *
     * If this returns null, it means that the token never expires (happens with some old client IDs).
     */
    get expiryDate(): Date | null;
}

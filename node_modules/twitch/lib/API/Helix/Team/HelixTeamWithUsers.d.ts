import type { HelixUserRelationData } from '../Relations/HelixUserRelation';
import { HelixUserRelation } from '../Relations/HelixUserRelation';
import type { HelixTeamData } from './HelixTeam';
import { HelixTeam } from './HelixTeam';
/** @private */
export interface HelixTeamWithUsersData extends HelixTeamData {
    users: HelixUserRelationData[];
}
/**
 * A Stream Team with its member relations.
 *
 * @inheritDoc
 */
export declare class HelixTeamWithUsers extends HelixTeam {
    /** @private */ protected readonly _data: HelixTeamWithUsersData;
    /**
     * The relations to the members of the team.
     */
    get userRelations(): HelixUserRelation[];
}

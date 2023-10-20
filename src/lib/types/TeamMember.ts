import type { UUID } from 'crypto';
import type { Team } from './Team';
import type { User } from './User';

export type teamMember = {
    id: UUID,
    team: Team,
    user: User
}
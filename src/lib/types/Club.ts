import type { UUID } from 'crypto';

export type ClubName = {
	id: UUID;
	name: String;
};
export type Club = {
	id: UUID,
	name: String,
	street: String,
	plz: Number,
	housenumber: Number,
	location: String
}

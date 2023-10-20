import type { UUID } from 'crypto';
import type { Settings } from './Settings';

export type User = {
	id: UUID;
	firstname: string;
	lastname: string;
	gender: string;
	password: string;
	email: string;
	role: string;
	settings: Settings;
	active: Boolean;
};

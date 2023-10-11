import type { UUID } from "crypto";

export 	type User = {
    id: UUID;
    firstname: string;
    lastname: string;
    gender:string;
    password: string;
    club_id: Number;
    email: string;
    role: string;
    settings_id: Number;
    active: Boolean
};

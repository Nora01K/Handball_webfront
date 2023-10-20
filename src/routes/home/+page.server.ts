import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import axios from 'axios';

// Load function
export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	if (!session?.user) throw redirect(303, '/')




	const searchTerm = 'Möbel'; // Ihre Variable mit Umlauten
	const url = `http://localhost:8080/teamMember/allTeamsByUser/${session.user.email}`;
	console.log(url)
	const respone = await fetch(url)
	const userInTeam = await respone.json()







	return {
		userInTeam: userInTeam
	};
}) satisfies PageServerLoad;

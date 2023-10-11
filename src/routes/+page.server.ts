import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { goto } from '$app/navigation';


// Load function
export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	if (session?.user) goto("/home")

	return {

	};
}) satisfies PageServerLoad;
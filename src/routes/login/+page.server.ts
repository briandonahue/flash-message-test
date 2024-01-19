import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { SignupSchema } from '$lib/models';
import { loadFlash } from 'sveltekit-flash-message/server';

export const load = loadFlash((async () => {
    const form = await superValidate(SignupSchema)
    return { form };
})) satisfies PageServerLoad;
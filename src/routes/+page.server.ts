import { SignupSchema } from '$lib/models';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { redirect } from 'sveltekit-flash-message/server';

export const load = (async () => {

    const form = await superValidate(SignupSchema)
    return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async (event) => {
      const { request } = event
      const form = await superValidate(request, SignupSchema)
      if (!form.valid) {
        fail(400, { form })
      }
      redirect(303, '/login', { status: 'create', message: 'Account created. Please login.' }, event)
    }
  }
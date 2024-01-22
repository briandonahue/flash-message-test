<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';
  import { SignupSchema, type Message } from '$lib/models';
  import { getFlash } from 'sveltekit-flash-message';
  import { page } from '$app/stores';

  export let data: PageData;

  const form = superForm(data.form, {
    dataType: 'json',
    validators: SignupSchema,
  });

  const flash = getFlash(page)
  $: console.log($flash)
</script>

<div>{$flash?.status} {$flash?.message}</div>

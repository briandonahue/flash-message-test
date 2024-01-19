<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import { z } from 'zod';
  import type { PageData } from './$types';
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

  export let data: PageData;
  const { form, enhance, errors } = superForm(data.form, {
    dataType: 'json',
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<form method="POST" use:enhance>
  <div style="padding: 5px">
    <input type="text" bind:value={$form.username} />
    <input type="password" bind:value={$form.password} />
    <button type="submit">Submit</button>
  </div>
  <div>
    <SuperDebug data={{ form: $form, errors: $errors }} />
  </div>
</form>

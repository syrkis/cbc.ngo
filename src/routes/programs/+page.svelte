<script lang='ts'>
  /** this is the /programs page. We will get the page content from /api/programs. This will be a list of programs*/
  import type { Page } from '$lib/types';
  import { onMount } from 'svelte';
  import Tile from '$lib/comps/Tile.svelte';

  //export let pageData = {} as Page;
  /** pageData is a list of json pages*/
  export let pageData = [] as Page[];

  onMount(async () => {
      const res = await fetch('/api/programs');
      pageData = await res.json();
  });

</script>

<div class="container">
  {#await pageData}
      <p>loading...</p>
  {:then pageData}
      {#each pageData as page}
          <a href="/programs/{page.slug}">
              <Tile content={page} />
          </a>
      {/each}
  {/await}
</div>

<style>
    /** use 1fr 1fr to make two columns*/

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        padding: 0px;
    }


</style>
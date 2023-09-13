<script lang='ts'>
  /** this is the /programs page. We will get the page content from /api/programs. This will be a list of programs*/
  import type { Page } from '$lib/types';
  import { onMount } from 'svelte';
  import { language, dictionary } from '$lib/stores';

  //export let pageData = {} as Page;
  /** pageData is a list of json pages*/
  export let pageData = [] as Page[];

  onMount(async () => {
      const res = await fetch('/api/programs');
      pageData = await res.json();

  });

</script>

<div class="container">
  <h1>{$dictionary['programs']}</h1>
  <p>Since 2015</p>
  <div class="programs">
    {#each pageData as program}
      <div class="program">
        <h2>{program['title_' + $language]}</h2>
        <p>{program['description_' + $language]}</p>
      </div>
    {/each }
  </div>
</div>

<style>
  .container {
    text-align: center;
    padding: 1rem;
    color: white;
  }

  .programs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .program {
    flex: 0 1 calc(50% - 2rem);  /* flex-grow | flex-shrink | flex-basis */
    margin: 1rem;
    padding: 1rem;
    border: 2px solid #fff;
    box-sizing: border-box;
  }

  @media (max-width: 800px) {
    .program {
      flex-basis: 100%;
    }
  }

  /* Existing styles */
  .program h1 {
    font-size: 1.5rem;
  }
</style>

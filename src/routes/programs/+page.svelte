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
  <!--<h1>{$dictionary['programs']}</h1>-->
  <div class="programs">
    {#each pageData as program}
    <div class='program-wrapper' style="background-image: url({program.cover});">
      <div class="program">
        <h2>{program['title_' + $language]}</h2>
        <p>{program['description_' + $language]}</p>
      </div>

    </div>
    {/each }
  </div>
</div>

<style>

  h2 {
    font-size: 3em;
    line-height: 3em;
    font-weight: normal;
    margin: 0;
  }
  p {
    width: 350px;
    line-height: 2em;
    max-width: 95%;
  }
  .container {
    text-align: center;
    color: white;
  }

  .programs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .program {
    margin: auto;
    width: 100%;
    text-transform: uppercase;
    font-weight: normal !important;
    font-size: large;
    height: 100%;
    background-image: url({program.cover});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.program h2,
.program p {
  margin: 0; 
}
  .program-wrapper {
    height: 100vh;
    width: 100vw;
    padding: 0 0;
  }

</style>

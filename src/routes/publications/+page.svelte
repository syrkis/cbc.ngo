<script lang='ts'>
    /** this is the /publications page. We will get the page content from /api/publications. This will be a list of publications*/
    import type { Page } from '$lib/types';
    import { onMount } from 'svelte';
    import Tile from '$lib/comps/Tile.svelte';

    //export let pageData = {} as Page;
    /** pageData is a list of json pages*/
    export let pageData = [] as Page[];

    onMount(async () => {
        const res = await fetch('/api/publications');
        pageData = await res.json();
    });

</script>

{#await pageData}
    <p>loading...</p>
{:then pageData}
    {#each pageData as page}
        <a href="/publications/{page.slug}">
            <div class="page1">
                <Tile content={page} />
            </div>
        </a>
    {/each}
{/await}
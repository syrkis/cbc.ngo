<script lang='ts'>
    /** this is the /publications page. We will get the page content from /api/publications. This will be a list of publications*/
    import type { Page } from '$lib/types';
    import { onMount } from 'svelte';

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
                <h1>{page.title}</h1>
            </div>
        </a>
    {/each}
{/await}
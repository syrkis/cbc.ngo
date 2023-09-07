<script lang='ts'>
    /** this is the /projects page. We will get the page content from /api/projects. This will be a list of projects*/
    import type { Page } from '$lib/types';
    import { onMount } from 'svelte';

    //export let pageData = {} as Page;
    /** pageData is a list of json pages*/
    export let pageData = [] as Page[];

    onMount(async () => {
        const res = await fetch('/api/projects');
        pageData = await res.json();
    });

</script>

{#await pageData}
    <p>loading...</p>
{:then pageData}
    {#each pageData as page}
        <a href="/projects/{page.slug}">
            <div class="page1">
                <h1>{page.title}</h1>
            </div>
        </a>
    {/each}
{/await}
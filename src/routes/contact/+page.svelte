<script lang='ts'>
    /** this is the /about page. We will get the page content from /api/pages/about */
    import type { Page } from '$lib/types';
    import { onMount } from 'svelte';

    export let pageData = {} as Page;

    onMount(async () => {
        const res = await fetch('/api/pages/contact');
        pageData = await res.json();
    });

</script>

{#await pageData}
    <p>loading...</p>
{:then pageData}
    <div class="page1">
        <h1>{pageData.title}</h1>
    </div>
{:catch error}
    <p>error: {error.message}</p>
{/await}
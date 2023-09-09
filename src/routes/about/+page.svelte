<script lang='ts'>
    import Post from '$lib/comps/Post.svelte';
    /** this is the /about page. We will get the page content from /api/pages/about */
    import type { Page } from '$lib/types';
    import { onMount } from 'svelte';

    export let pageData = {} as Page;

    onMount(async () => {
        const res = await fetch('/api/pages/about');
        pageData = await res.json();
    });

</script>

<div>
    <Post content={pageData}/>
</div>
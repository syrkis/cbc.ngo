<script lang='ts'>
    import type { Page } from '$lib/types';
    import Post from '$lib/comps/Post.svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    export let pageData = {} as Page;
    
    let slug: string;
    $: slug = $page.params.slug;

    onMount(async () => {
        const res = await fetch(`/api/publications/${slug}`);
        pageData = await res.json();
    });
</script>

<div class="page1">
    <Post content={pageData} kind="page" />
</div>

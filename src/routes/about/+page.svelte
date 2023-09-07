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
    <div class="custom-div"></div>
    <Post content={pageData}/>
</div>


<style>
    .custom-div {
    width: 900px;
    max-width: 95%;
    margin: auto;
    height: 300px;
    background-image: url('images/grey.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
}
</style>
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

<div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
</div>
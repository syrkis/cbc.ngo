<script>
    import Header from '$lib/comps/Header.svelte';
    import { page } from '$app/stores';

    let isTop = false;

    $: {
        isTop = $page.route.id === '/';
    }
</script>

<div>
    <Header />
    <div class='content' class:slide-up={!isTop}>
        <slot></slot>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400&display=swap');

    :global(.content) {
        margin-top: 10vh;
        position: absolute;
        width: 100%;
        transition: transform 0.5s ease-in-out; /* Add this transition */
    }

    :global(.page1) {
        width: 800px;
        margin: auto;
        max-width: 95%;
    }

    :global(body) {
        padding: 0;
        margin: 0;
        line-height: 1.5;
        font-family: 'Crimson Pro', serif;
    }

    /* Remove the transition from .content here */
    
    :global(.container, .content) {
        transform: translateY(0);
    }

    :global(.container.hide, .content.slide-up) {
        transform: translateY(-100vh);
    }

</style>

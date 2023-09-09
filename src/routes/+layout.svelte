<script>
    import Header from "$lib/comps/Header.svelte";
    import Footer from "$lib/comps/Footer.svelte";
    import { page } from "$app/stores";
    let isTop = false;

    $: {
        isTop = $page.route.id === "/";
    }

    let contentElement;

</script>

<div>
    <Header />
    <div class="content-footer-wrapper" class:slide-up={!isTop}>
        <div class="page" bind:this={contentElement}>
            <slot></slot>
        </div>
        <Footer />
    </div>
</div>

<style>
    :global(.content-footer-wrapper) {
        transition: transform 0.5s ease-in-out, height 0.5s ease-in-out;
        height: 100vh; 
    }

    :global(.content-footer-wrapper.slide-up) {
        transform: translateY(-100vh);
        height: 0vh; 
    }
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400&display=swap');

    :global(.page) {
        padding-top: 5rem;
        margin: auto;
        width: 95%;
        transition: transform 0.5s ease-in-out;
    }

    :global(body) {
        padding: 0;
        background-color: #A3CC59;
        margin: 0;
        line-height: 1.5;
        font-family: 'Crimson Pro', serif;
    }

    /* Remove the transition from .content here */
    :global(a) {
        color: black;
        text-decoration: none;
    }

</style>

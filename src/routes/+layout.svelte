<script>
    import Header from "$lib/comps/Header.svelte";
    import Footer from "$lib/comps/Footer.svelte";
    import { page } from "$app/stores";
    let isTop = false;

    $: {
        isTop = $page.route.id === "/";
    }

</script>

<div>
    <Header />
    <div class="content-footer-wrapper" class:slide-up={!isTop}>
        <div class="page">
            <slot></slot>
        </div>
        <Footer />
    <div class='black-bg'></div>
    </div>
</div>

<style>

    .slide-up {
        margin-top: 20vh;
    }
    :global(.content-footer-wrapper) {
        transition: transform 0.5s ease-in-out, height 0.5s ease-in-out;
        transform: translateY(0vh);
        height: 0vh;
    }

    :global(.content-footer-wrapper.slide-up) {
        transform: translateY(-100vh);
        height: 100vh; 
    }
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400&display=swap');

    :global(.page) {
        margin: auto;
        width: 95%;
        max-width: 800px;
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

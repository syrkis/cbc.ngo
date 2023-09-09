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
    <div class="content" bind:this={contentElement} class:slide-up={!isTop}>
        <slot></slot>
    </div>
    <Footer />
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400&display=swap');

:global(.content) {
    width: 100%;
    transition: transform 0.5s ease-in-out; 
    font-family: 'Cabin', sans-serif;
    line-height: 2;
    text-align: justify;
    max-height: 80vh;
    overflow-y: auto;
}
    :global(.image-container) {
        position: relative;
        display: flex;
        justify-content: center;
        overflow: hidden;
        z-index: 20; /* Add this line */
        border-radius: 3px;
        padding: 100px;
    }

    :global(.image-container img) {
        width: 80%;
        height: 80%;
        z-index: 20; /* Add this line */
    }

    :global(body) {
        padding: 0;
        background-color: #A3CC59;
        margin: 0;
        line-height: 1.5;
        font-family: 'Crimson Pro', serif;
    }

    /* Remove the transition from .content here */
    
    :global(.container.hide, .content.slide-up) {
        transform: translateY(-100vh);
    }

    :global(a) {
        color: black;
        text-decoration: none;
    }

</style>

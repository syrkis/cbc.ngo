<script>
    import { page } from "$app/stores";
    import Navigation from "$lib/comps/Navigation.svelte";
    import Language from "$lib/comps/Language.svelte";
    import Landing from "$lib/comps/Landing.svelte";
    import Footer from "$lib/comps/Footer.svelte";

    $: atRoot = $page.route.id === '/';
    $: contentStyle = atRoot ? 'top: calc(100vh - var(--nav-height));' : `top: 0`;
    $: landingStyle = atRoot ? 'top: 0vh;' : `top: -100vh;`;
</script>

<!-- overflow hidden if on landing-->
<div class:noscroll={atRoot}>
    <div class="header">
        <Language />
        <Navigation />
    </div>
    <div class="landing" style={landingStyle}>
        <Landing />
    </div>
    <div class="content" style={contentStyle}>
        <slot />
        <Footer />
    </div>
</div>

<style>

.noscroll {
  height: 100vh;
  overflow: hidden;
}

    @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400&display=swap');

    .header {
        font-size: 1.6em;
    }

    .content, .landing {
        position: absolute;
        width: 100%;
        transition: top 0.5s ease-in-out;
        z-index: 0; 
    }

    .landing {
        height: 100%; /* make it occupy full height of its parent */
        background-color: var(--green);
        color: white;
    }

    .content {
        padding-top: var(--nav-height);
    }

    :global(html, body) {
        --nav-height: 75px;
        --green: #A3CC59;
        height: 100%; /* ensure they have full height */
        line-height: 1.5;
        font-family: 'Crimson Pro', serif;
        font-size: 16px; /* Adjust this value based on your preference */
        overflow-x: hidden; 
        margin: 0;          
        padding: 0;         
        width: 100%;        
        box-sizing: border-box;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-weight: 400; /* Or 700 for bolder */
        padding: 0;
        margin: 0;
    }

    /* Ensure the main container fits the full viewport height */
    div {
        height: 100vh;
        position: relative;
    }
</style>

<script lang='ts'>
    import Ring from '$lib/comps/Ring.svelte';
    import { page } from '$app/stores';
    import { language, dictionary, setLang } from '$lib/stores';
    let sites = ['programs', 'publications', 'press', 'about'];
    import Lila from '$lib/comps/Lila.svelte';
    $: isTop = $page.route.id === '/';
    $: showBot = false;
</script>

<svelte:head>
<!-- Whenever language changes, we set the new language as the html lang attribute -->
<script>
language.subscribe(value => document.documentElement.lang = value);
</script>
</svelte:head>

<div class="container" class:hide={!isTop}>
    <div class="main">
        <div class="tagline">
            <h1>{$dictionary['title']}</h1>
            <span>{$dictionary['tagline']}</span>
        </div>
        <div class="logo-wrapper" on:click={() => showBot = true}>
            <Ring />
        </div>
    </div>
</div>

<div class="language-switcher" class:top={!isTop}>
    <a href="#" on:click|preventDefault={() => setLang('en')} class:top={!isTop}>EN</a>
    |
    <a href="#" on:click|preventDefault={() => setLang('pt')} class:top={!isTop}>PT</a>
</div>

<div class="nav-bg" class:top={!isTop} class:background={$page.route.id === '/programs'}>
    <div class="nav">
        <div class="nav__links" class:top={!isTop}>
            {#each sites as site, i}
                <a href="/{site}">{$dictionary[site]}</a>
                {#if i < sites.length - 1}
                    <span class="separator">|</span>
                {/if}
            {/each}
        </div>
    </div>
</div>

{#if showBot}
  <div class="bot">
    <Lila on:close={() => showBot = false} />
  </div>
{/if}

<style>
    .bot {
        /** bot is a fullscreen and above everything*/
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 200;
    }
 :root {
    --green: #A3CC59;
}

a {
    color: white;
    text-decoration: none;
    transition: color 0.5s ease-in-out;
}

h1 {
    letter-spacing: 0.05em;
    font-size: 1.5em;
    font-weight: 400;
    margin: 0 0 1rem 0;
}
.container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transform: translateY(0);
    transition: transform 0.5s ease-in-out;
    background-color: var(--green);
}
.container.hide {
    transform: translateY(-100vh);
}
.nav-bg {
    /** background-color: var(--green); */
    position: absolute;
    top: calc(100vh - 50px);
    width: 100%;
    transition: top 0.5s ease-in-out, width 0.5s ease-in-out, background-color 0.5s ease-in-out;
    z-index: 9; 
}

.nav-bg.top {
    top: 0;
    padding: 1rem 0;
    width: 70%;
}

.nav-bg.background {
    background-color: rgba(0, 0, 0, 0);
}

.main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100vh;
    overflow: hidden; /* Prevent scrolling inside this element */
    color: white;
    width: 800px;
    max-width: 95%;
    margin: auto;
    transition: transform 0.5s ease-in-out;
    align-items: center;
}


.tagline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5em;
    text-align: center;
    margin: auto;
}

.logo-wrapper {
    transition: transform 0.5s ease;
}

.logo-wrapper:hover {
    transform: scale(1.1);
    cursor: pointer;
}

.language-switcher {
    color: white;
    position: fixed;
    top: 0;
    right: 0;   
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    z-index: 10;
    transition: color 0.5s ease-in-out;
}

.language-switcher.top {
    position: absolute;
    color: white;
}

a.top {
    color: white;
}

.nav {
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;
}

.nav__links {
    display: flex;
    justify-content: space-between;
    width: 70%;
}

.nav__links a {
    text-decoration: none;
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    transition: color 0.5s ease-in;
}

.nav__links.top a {
    color: white;
}

.nav__links a:hover {
    color: #F2F2F2;
}

.separator {
    display: none;
}

@media (max-width: 800px) {
    .separator {
        display: inline-block;
        color: white;
        font-size: 1.2em;
        letter-spacing: 0.05em;
    }

    h1 {
        font-size: 1.2em;
        padding-bottom: 10vh;
    }

    .main {
        font-size: 1em;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 95%;   /* Change from 500px to 100% */
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;  /* Align items in the center */
    }

    .logo-wrapper {
        display: none;
    }

    .nav__links {
        width: 90%;
        justify-content: space-around;
        align-items: center;
    }
    .nav__links a {
        font-size: 1em;
        line-height: 2em;
    }
    .language-switcher {
        font-size: 1em;
        line-height: 2em;
    }
}

</style>

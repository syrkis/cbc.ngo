<script lang='ts'>
    import Ring from '$lib/comps/Ring.svelte';
    import { page } from '$app/stores';
    import { language, dictionary, setLang } from '$lib/stores';
    let sites = ['programs', 'publications', 'press', 'about'];
    $: isTop = $page.route.id === '/';
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
        <a href="/programs">
            <div class="logo-wrapper"><Ring /></div>
        </a>
    </div>
</div>

<div class="language-switcher">
    <a href="#" on:click|preventDefault={() => setLang('en')}>EN</a>
    |
    <a href="#" on:click|preventDefault={() => setLang('pt')}>PT</a>
</div>

<div class="nav-bg" class:top={!isTop}>
    <div class="nav">
        <div class="nav__links">
            {#each sites as site, i}
                <a href="/{site}">{$dictionary[site]}</a>
                {#if i < sites.length - 1}
                    <span class="separator">|</span>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>
 :root {
    --green: #A3CC59;
}

a {
    color: white;
    text-decoration: none;
}

h1 {
    letter-spacing: 0.05em;
    font-size: 1.5em;
    margin: 0 0 1rem 0;
}
.container {
    min-height: 100vh;
    overflow: hidden;
    transform: translateY(0);
    transition: transform 0.5s ease-in-out;
    background-color: var(--green);
}
.container.hide {
    transform: translateY(-100vh);
}
.nav-bg {
    background-color: var(--green);
    position: fixed;
    top: calc(100vh - 50px);
    width: 100%;
    transition: top 0.5s ease-in-out, width 0.5s ease-in-out;
    z-index: 9; 
}

.nav-bg.top {
    top: 0;
    padding: 1rem 0;
    width: 80%;
}

.main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    min-height: 100vh;  /* Change height to min-height */
    color: white;
    width: 800px;
    max-width: 100%;
    margin: auto;
    transition: transform 0.5s ease-in-out;
    align-items: center;
    overflow: hidden;
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
}

.language-switcher {
    color: white;
    position: fixed;
    top: 0;
    right: 0;   
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.05em;
    z-index: 10;
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
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.05em;
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
        font-size: 1.2rem;
        letter-spacing: 0.05em;
    }

    .main {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 100%;   /* Change from 500px to 100% */
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;  /* Align items in the center */
    }

    .tagline {
        order: 1; /* make tagline appear after logo visually */
    }

    .logo-wrapper {
        order: 2; /* make logo appear before tagline visually */
    }

    .nav__links {
        width: 90%;
        justify-content: space-around;
        align-items: center;
    }
}

</style>

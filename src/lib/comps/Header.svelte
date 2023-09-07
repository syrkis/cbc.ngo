<script lang='ts'>
    import { _, locale, dictionary } from 'svelte-i18n';
    import Ring from '$lib/comps/Ring.svelte';
    import { page } from '$app/stores';

    let language = 'en'; // get from dev
    $: locale.set(language);

    let langs = {
        'en': {
            title: 'Center for Brazilian Climate',
            about: 'About',
            projects: 'Projects',
            publications: 'Publications',
            contact: 'Contact',
            tagline: 'We foster informed dialogues and create strategic plans to combat climate change in Brazil through policy advocacy and community engagement.'
        },
        'pt': {
            title: 'Centro Brasil no Clima',
            about: 'Sobre',
            projects: 'Projetos',
            publications: 'Publicações',
            contact: 'Contacto',
            tagline: 'Estimulamos debates esclarecidos e criamos planos para combater as mudanças climáticas no Brasil via defesa política e interação comunitária.'
        }
    };

    $: {
        dictionary.set(langs);
        locale.set(language);
    }

    function setLang(lang) {
        language = lang;
        locale.set(language);
    }

    let sites: string[] = ['about', 'projects', 'publications', 'contact'];
    let isTop = false;

    $: isTop = $page.route.id === '/';
</script>

    <div class="container" class:hide={!isTop}>
        <div class="main">
            <div class="tagline">
                <h1>{$_('title')}</h1>
                <span>
                    {$_('tagline')}
                </span>
            </div>
            <a href="/about">
                <div class="logo-wrapper">
                    <Ring />
                </div>
            </a>
        </div>
    </div>

<div class="language-switcher" class:bottom-black={!isTop}>
    <a href="#" on:click={() => setLang('en')}>EN</a>
    |
    <a href="#" on:click={() => setLang('pt')}>PT</a>
</div>


<div class="nav-bg" class:top={!isTop}>
    <div class="nav">
        <div class="nav__links">
            {#each sites as site, i}
                <a href="/{site.toLowerCase()}">{$_(site)}</a>
                {#if i < sites.length - 1}
                    <span class="separator">|</span>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>

.nav-bg {
    background-color: #A3CC59;
    position: fixed;
    top: calc(100vh - 50px);
    width: 100%;
    transition: top 0.5s ease-in-out;
    z-index: 9; /* Just below the nav so it doesn't interfere with click events */
}

.nav-bg.top {
    top: 0;
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

    .main {
        display: grid;
        grid-template-columns: 2fr 1fr;
        height: 100vh;
        color: white;
        width: 800px;
        max-width: 100%;
        margin: auto;
        transition: transform 0.5s ease-in-out;
        align-items: center;
    }

    .container.hide {
        transform: translateY(-100vh);
    }


    .container {
        transform: translateY(0);
        transition: transform 0.5s ease-in-out;
        background-color: #A3CC59;
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

    .separator {
        display: none; /* Hide by default */
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
    }

    .language-switcher.bottom-black {
        top: auto;
        bottom: 0;
        color: #A3CC59;
    }
    
    /* Specific color for the draft inside the .bottom-black div */
    .language-switcher.bottom-black a {
        color: #A3CC59;
    }

    
    .nav {
        line-height: 3em;
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

    @media (max-width: 800px) {
        .nav__links {
            width: 90%;
            justify-content: space-around;  /* Distribute links and separators */
            align-items: center;
        }
        
        a {
            font-size: 1em !important;
        }

        .separator {
            display: inline-block; /* Show when the view is small */
            color: white;
            font-size: 1.2rem;
            letter-spacing: 0.05em;
        }
        .tagline {
            font-size: 1.2em !important;
        }
        .main {
            grid-template-columns: 1fr;
            width: 500px;
            max-width: 100%;
            grid-template-rows: 1fr;
        }
        .logo-wrapper {
            display: none;
        }
    }

</style>


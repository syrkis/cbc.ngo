<script>
    import { setLang } from '$lib/stores';

    function switchLanguage(lang) {
        setLang(lang);
    }
</script>

<div class="language-switcher">
    <a href="#" on:click|preventDefault={() => switchLanguage('en')}>EN</a>
    |
    <a href="#" on:click|preventDefault={() => switchLanguage('pt')}>PT</a>
</div>

<style>
    .language-switcher {
        position: fixed;
        height: var(--nav-height); /* Same height as the navigation bar */
        display: flex;
        align-items: center; /* Center vertically inside the fixed height */
        right: 10px;
        color: white; 
        z-index: 1000;
    }

    .language-switcher a {
        color: white; 
        margin: 0 5px;
        text-decoration: none;
        cursor: pointer;
    }
</style>

<script>
    import { dictionary } from '$lib/stores';
    import { page } from '$app/stores';

    let pages = ['programs', 'publications', 'press', 'about'];
    $: atRoot = $page.route.id === '/';
    let activePage = $page.route.id;
    
</script>


<div class={atRoot ? '' : 'not-root'}>
    <ul class="nav">
        {#each pages as page}
          <li>
            <a 
              class:active={activePage.includes(page)}
              href="/{page}"
            >
              {$dictionary[page]}
            </a>
          </li> 
        {/each}
      </ul>
</div>


<style>

    .active {
    text-decoration: underline;
    }

    div {
        position: absolute;
        width: 100vw;
        box-sizing: border-box;
        bottom: 0;
        z-index: 2; /* ensuring it's above the content */
        transition: bottom 0.5s ease-in-out;
    }

    .not-root { bottom: calc(100% - var(--nav-height)); }

    .nav {
        background-color: var(--green);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center; 
        height: var(--nav-height);
        overflow-x: hidden;
        list-style-type: none;
        padding: 0;
        margin: 0;
        transition: padding 0.5s ease-in-out; /* Transition the padding */
    }

    .nav li {
        transition: margin 0.5s ease-in-out;
        margin: 0 8vw;
    }

    .not-root .nav li {
        margin: 0 4vw;
    }

    .not-root .nav {
        padding-right: 42vw; /* Increase padding on the left when not at root */
    }

    .nav a {
        text-decoration: none;
        color: inherit;
    }

</style>
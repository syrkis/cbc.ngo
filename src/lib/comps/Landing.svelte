<script>
    import { dictionary } from '$lib/stores';
    import Ring from '$lib/comps/Ring.svelte';
</script>

<div class="landing">
    <div class='left'>
        <h1>
            {$dictionary['title']}
        </h1>
        <div>
            {$dictionary['tagline']}
        </div>
    </div>
    <div class='right'>
        <Ring />
    </div>
</div>

<style>
    .landing {
        font-size: 1.4em;
        text-align: center;
        margin: 0 auto;
        background: var(--green);
        color: white;
        width:800px;
        max-width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
        align-items: center; /* this will vertically center its children */
        justify-content: center;
    }

    .left, .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .left { flex: 2; }
    .left h1 { margin-bottom: 0.5em;}
    .right { flex: 1; }

</style>

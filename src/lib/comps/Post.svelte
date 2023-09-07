<script lang='ts'>
    import type { Post } from '$lib/types';
    import MarkdownIt from 'markdown-it';
    export let content = {} as Post;
    import { language } from '$lib/stores';

    let md = new MarkdownIt();

    let title = '';
    let body = '';

    $: {
        body = content[`body_${$language}`];
    }

    $: result = body ? md.render(body) : '';
</script>

<div class="container">
    <div class="content">
        <div class="writing">
            {@html result}
        </div>
    </div>
</div>

<style>
    .container {
        margin: auto;
        width: 95%;
    }
</style>

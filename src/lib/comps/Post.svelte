<script lang='ts'>
    import type { Post } from '$lib/types';
    import MarkdownIt from 'markdown-it';
    export let content = {} as Post;
    import { language } from '$lib/stores';

    let md = new MarkdownIt();
    const className = 'class="content-text"';



    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        let imageTag = self.renderToken(tokens, idx, options);
        imageTag = `<div class="image-container">${imageTag}</div>`;
        return imageTag;
    };
    md.renderer.rules.paragraph_open = () => '<p class="content-text">';
    md.renderer.rules.heading_open = (tokens, idx) => {
        let tag = tokens[idx].tag;
        return `<${tag} ${className}>`;
    };





    let title = '';
    let body = '';

    $: {
        body = content[`body_${$language}`];
    }

    $: result = body ? md.render(body) : '';
</script>

<div class="writing">
    {@html result}
</div>

<style>
    .container {
        margin: auto;
        width: 95%;
    }

    .writing {
        width: 100%;
    }

    .image-container {
        position: relative;
        width: 95vw;
        left: 50%;
        transform: translateX(-50%);
    }

    .image-container img {
        position: absolute;
        left: 0;
        width: 100%; 
        height: auto; 
    }

    :global(.content-text) {
    max-width: 95%;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
}
</style>

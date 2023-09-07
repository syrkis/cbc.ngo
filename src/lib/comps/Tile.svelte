<script lang='ts'>
    import { language } from '$lib/stores';
    import type { Post } from '$lib/types';
    export let content = {} as Post;

    $: title = content[`title_${$language}`];
</script>

<div>
    <div>
        <h2>{title}</h2>
    </div>
</div>
<script>
    import { language } from '$lib/stores';
    export let content;
</script>

<div class="container">
    <div class="content">
        Current language: {$language} <br>
        {JSON.stringify(content)}
    </div>
</div>

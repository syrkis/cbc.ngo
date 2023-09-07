<script>
    import { page } from '$app/stores';
    export let content;
</script>

<div class="container">
    <div class="content">
        {JSON.stringify($page.route.id)}
        {JSON.stringify(content)}
    </div>
</div>
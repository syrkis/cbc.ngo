<script>

    import VanillaTilt from "vanilla-tilt";
    import { onMount } from "svelte";


    onMount(() => {
        VanillaTilt.init(document.querySelectorAll(".ring"), {
            max: 20,
            speed: 1000,
            reverse: true,
            scale: 1,
            "full-page-listening": true,
        });
    });

</script>

<div class='ring'>
    <div class="logo">
        <img src="logo.svg" alt="Center for Brazilian Climate logo">
    </div>
</div>

<style>

.ring {
    height: 100%; /* Ensure the ring covers the full height available */
    margin-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo img {
    width: 85%;
    height: auto;
    margin: auto;
}
</style>
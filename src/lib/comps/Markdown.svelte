<script lang="ts">

    export let content: string;
    let result = md.render(content);

</script>

<div class="container">
    <div class='title'>
        <div>{@html result}</div>
    </div>
</div>


<style>
    .container {
        width: 95%;
        max-width: 700px;
        margin: auto;
        padding: 200px 0;
    }
    
    h1 {
        line-height: 4.5rem;
    }
    
    .writing { 
        text-align: justify; 
        padding-top: 100px; 
    }
    
    .writing img {
        width: calc(100% + 40px);
        max-width: calc(100% + 40px);
        position:relative;
        left: 50%;
        transform: translateX(-50%);
    }
    </style>
    
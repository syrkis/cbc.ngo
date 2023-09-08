<script lang='ts'>
    import { language } from '$lib/stores';
    import type { Post } from '$lib/types';
    export let content = {} as Post;
  
    $: title = content[`title_${$language}`];
    $: description = content[`description_${$language}`];
  </script>
  
  <div class='tile'>
    <div class='content'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
  
  <style>
    .tile {
      text-align: center;
      width: 100%;
    }
  </style>
  
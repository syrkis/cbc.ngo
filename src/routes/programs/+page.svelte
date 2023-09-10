<script lang='ts'>
  /** this is the /programs page. We will get the page content from /api/programs. This will be a list of programs*/
  import type { Page } from '$lib/types';
  import { onMount } from 'svelte';
  import Tile from '$lib/comps/Tile.svelte';

  //export let pageData = {} as Page;
  /** pageData is a list of json pages*/
  export let pageData = [] as Page[];

  onMount(async () => {
      const res = await fetch('/api/programs');
      pageData = await res.json();
  });

</script>

<div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in odit a magni perspiciatis. Pariatur ducimus eligendi voluptatum repudiandae dicta distinctio beatae sunt. Accusamus aperiam maiores amet, sint quas ex.   
</div>
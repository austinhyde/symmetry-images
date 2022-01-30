<script lang="ts">
  import drag from './drag';
  import CropArea from "./CropArea.svelte";
  import { onMount } from 'svelte';

  export let src;
  export let bounds: {x: number, y: number, w: number, h: number};
  
  let start;
  let img: HTMLImageElement;
  let screenBounds;
  
  onMount(() => {
    if (bounds) {
      screenBounds = imgToScreen(bounds);
    }
  });

  $: {
    if (bounds && img) {
      bounds = screenToImg(screenBounds);
    }
  };

  function imgToScreen(b) {
    const w = img.width/img.naturalWidth;
    const h = img.height/img.naturalHeight;
    return {
      x: b.x * w,
      y: b.y * h,
      w: b.w * w,
      h: b.h * h,
    };
  }
  function screenToImg(b) {
    const w = img.naturalWidth/img.width;
    const h = img.naturalHeight/img.height;
    return {
      x: b.x * w,
      y: b.y * h,
      w: b.w * w,
      h: b.h * h,
    };
  }

  function onStart(p) {
    screenBounds = {
      ...p,
      w: 0,
      h: 0,
    };
  }
  function onDrag(d) {
    screenBounds = {
      ...screenBounds,
      w: screenBounds.w + d.dx,
      h: screenBounds.h + d.dy,
    };
  }
</script>

<!-- <pre>{JSON.stringify(screenBounds)}</pre>
<pre>{JSON.stringify(bounds)}</pre> -->
<div class="editor" use:drag={{onStart, onDrag}}>
  <img bind:this={img} {src}/>
  {#if screenBounds}<CropArea bind:bounds={screenBounds}/>{/if}
</div>

<style lang="scss">
  .editor {
    position: relative;
    user-select: none;
    img {
      cursor: crosshair;
    }
  }
  
</style>
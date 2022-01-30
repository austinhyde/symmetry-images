<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from "svelte";
  import draw from './draw';

  export let src: string;
  export let bounds: {x: number, y: number, w: number, h: number};

  let mirrors = 10;

  let img: HTMLImageElement;
  $: {
    img = new Image();
    img.src = src;
  };


  $: render = (ctx: CanvasRenderingContext2D, node: HTMLCanvasElement) => {
    node.width = mirrors*bounds.w-mirrors;
    node.height = bounds.h;
    for (let i = 0; i < mirrors; i++) {
      if (i % 2 == 0) {
        ctx.drawImage(img,
          bounds.x, bounds.y, bounds.w, bounds.h,
          i*bounds.w-i, 0, bounds.w, bounds.h,
        );
      } else {
        ctx.save();
        ctx.translate((i+1)*bounds.w, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img,
          bounds.x, bounds.y, bounds.w, bounds.h,
          i, 0, bounds.w, bounds.h,
        );
        ctx.restore();
      }
    }
  };
</script>

<p>
  <label for="mirrors">How many mirrored images?</label>
  <input type=range min=2 max=20 bind:value={mirrors}>
  <input id="mirrors" type=number min=2 max=20 bind:value={mirrors}>
</p>
{#if bounds}
<canvas use:draw={render} style="max-width:100%"/>
{:else}
<p>(Draw an area on the image first!)</p>
{/if}

<style lang="scss">
  input[type=number] {
    max-width: 50px;
  }
  input {
    vertical-align: middle;
  }
</style>
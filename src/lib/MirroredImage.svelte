<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from "svelte";
  import draw from './draw';

  export let src: string;
  export let mirrors: number;
  export let bounds: {x: number, y: number, w: number, h: number};

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
    // ctx.drawImage(img,
    //   bounds.x, bounds.y, bounds.w, bounds.h,
    //   0, 0, bounds.w, bounds.h,
    // );

    // ctx.translate(2*bounds.w, 0);
    // ctx.scale(-1, 1);
    // ctx.drawImage(img,
    //   bounds.x, bounds.y, bounds.w, bounds.h,
    //   0, 0, bounds.w, bounds.h,
    // );

    // ctx.translate(2*bounds.w, 0);
    // ctx.scale(-1, 1);
    // ctx.drawImage(img,
    //   bounds.x, bounds.y, bounds.w, bounds.h,
    //   2*bounds.w, 0, bounds.w, bounds.h,
    // );
  };
</script>

{#if bounds}
<canvas use:draw={render} style="max-width:100%"/>
{/if}
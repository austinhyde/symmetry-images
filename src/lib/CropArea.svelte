<script>
  // import {draggable} from 'svelte-drag';
  import drag from './drag';
  export let bounds;

  function shiftL(p) {
    bounds.x += p.dx;
    bounds.w -= p.dx;
  }
  function shiftT(p) {
    bounds.y += p.dy;
    bounds.h -= p.dy;
  }
  function shiftR(p) {
    bounds.w += p.dx;
  }
  function shiftB(p) {
    bounds.h += p.dy;
  }
  const adjust = (...fs) => p => fs.forEach(f => f(p));
  const move = adjust(shiftL, shiftT, shiftR, shiftB);
  const resizeTL = adjust(shiftT, shiftL);
  const resizeTR = adjust(shiftT, shiftR);
  const resizeBL = adjust(shiftB, shiftL);
  const resizeBR = adjust(shiftB, shiftR);
</script>

<div
  class="crop-area"
  style={`left:${bounds.x}px; top:${bounds.y}px; width:${bounds.w}px; height:${bounds.h}px;`}
>
  <div class="area" use:drag={move}/>
  <div class="tl" use:drag={resizeTL}/>
  <div class="tr" use:drag={resizeTR}/>
  <div class="bl" use:drag={resizeBL}/>
  <div class="br" use:drag={resizeBR}/>
</div>

<style lang="scss">
  $knobsize: 14.5px;

  .crop-area {
    position: absolute;
    border: 3px dotted white;
    z-index: 100;
    cursor: grab;
  }
  .area {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .tl, .tr, .bl, .br {
    position: absolute;
    width: $knobsize;
    height: $knobsize;
    border-radius: 50%;
    border: 1px solid white;
  }
  .tl {
    top: calc((0px - $knobsize/2) - 1px);
    left: calc((0px - $knobsize/2) - 1px);
    cursor: nw-resize;
  }
  .tr {
    top: calc((0px - $knobsize/2) - 1px);
    right: calc((0px - $knobsize/2));
    cursor: ne-resize;
  }
  .bl {
    bottom: calc((0px - $knobsize/2) - 1px);
    left: calc((0px - $knobsize/2) - 1px);
    cursor: ne-resize;
  }
  .br {
    bottom: calc((0px - $knobsize/2) - 1px);
    right: calc((0px - $knobsize/2));
    cursor: nw-resize;
  }
</style>
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
  const all = (...fs) => p => fs.forEach(f => f(p));
</script>

<div
  class="crop-area"
  style={`left:${bounds.x}px; top:${bounds.y}px; width:${bounds.w}px; height:${bounds.h}px;`}
>
  <div class="area" use:drag={all(shiftL, shiftT, shiftR, shiftB)}/>
  <div class="tl" use:drag={all(shiftT, shiftL)}/>
  <div class="t" use:drag={shiftT}/>
  <div class="tr" use:drag={all(shiftT, shiftR)}/>
  <div class="r" use:drag={shiftR}/>
  <div class="br" use:drag={all(shiftB, shiftR)}/>
  <div class="b" use:drag={shiftB}/>
  <div class="bl" use:drag={all(shiftB, shiftL)}/>
  <div class="l" use:drag={shiftL}/>
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
  .tl, .tr, .bl, .br, .t, .r, .b, .l {
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
  .t {
    top: calc((0px - $knobsize/2) - 1px);
    left: calc(50% - $knobsize/2);
    cursor: n-resize;
  }
  .tr {
    top: calc((0px - $knobsize/2) - 1px);
    right: calc((0px - $knobsize/2));
    cursor: ne-resize;
  }
  .r {
    top: calc(50% - $knobsize/2);
    right: calc((0px - $knobsize/2));
    cursor: e-resize;
  }
  .br {
    bottom: calc((0px - $knobsize/2) - 1px);
    right: calc((0px - $knobsize/2));
    cursor: se-resize;
  }
  .b {
    bottom: calc((0px - $knobsize/2) - 1px);
    left: calc(50% - $knobsize/2);
    cursor: s-resize;
  }
  .bl {
    bottom: calc((0px - $knobsize/2) - 1px);
    left: calc((0px - $knobsize/2) - 1px);
    cursor: sw-resize;
  }
  .l {
    left: calc((0px - $knobsize/2) - 1px);
    top: calc(50% - $knobsize/2);
    cursor: e-resize;
  }
</style>
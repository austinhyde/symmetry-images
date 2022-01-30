<script>
  // import {draggable} from 'svelte-drag';
  import drag from './drag';
  export let bounds;

  function shiftL(d) {
    bounds.x += d.dx;
    bounds.w -= d.dx;
  }
  function shiftT(d) {
    bounds.y += d.dy;
    bounds.h -= d.dy;
  }
  function shiftR(d) {
    bounds.w += d.dx;
  }
  function shiftB(d) {
    bounds.h += d.dy;
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
  $knobsize: 10px;

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
    background-color: white;
    border: 1px solid white;
    margin-left: calc(0px - $knobsize/2);
    margin-top: calc(0px - $knobsize/2);
  }
  .tl {
    top: 0;
    left: 0;
    cursor: nw-resize;
  }
  .t {
    top: 0;
    left: 50%;
    cursor: n-resize;
  }
  .tr {
    top: 0;
    left: 100%;
    cursor: ne-resize;
  }
  .r {
    top: 50%;
    left: 100%;
    cursor: e-resize;
  }
  .br {
    top: 100%;
    left: 100%;
    cursor: se-resize;
  }
  .b {
    top: 100%;
    left: 50%;
    cursor: s-resize;
  }
  .bl {
    top: 100%;
    left: 0;
    cursor: sw-resize;
  }
  .l {
    left: 0;
    top: 50%;
    cursor: e-resize;
  }
</style>
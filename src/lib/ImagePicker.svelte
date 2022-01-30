<script>
  export let src;

  function handleFile(file) {
    if (src) {
      const old = src;
      src = null;
      URL.revokeObjectURL(old);
    }
    src = URL.createObjectURL(file);
  }

</script>

<svelte:window
  on:dragenter|stopPropagation|preventDefault
  on:dragover|stopPropagation|preventDefault
  on:drop|stopPropagation|preventDefault={e => handleFile(e.dataTransfer.files[0])}
/>

<p>
  Drag-and-drop an image here, or
  <label>
    click to select one from your computer
    <input type="file" style="display:none" on:input={e => handleFile(e.target.files[0])}>
  </label>
</p>

<style lang="scss">
  label {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
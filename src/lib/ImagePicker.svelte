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


<label class="dropzone"
  on:dragenter|stopPropagation|preventDefault
  on:dragover|stopPropagation|preventDefault
  on:drop|stopPropagation|preventDefault={e => handleFile(e.dataTransfer.files[0])}
>
  Drag-and-drop an image here, or click to select one from your computer
  <input type="file" style="display:none" on:input={e => handleFile(e.target.files[0])}>
</label>

<style lang="scss">
  .dropzone {
    border: 3px dashed #ccc;
    max-width: 800px;
    padding: 10px;
    margin: auto;
    background-color: #fafafa;
    cursor: pointer;
  }
</style>
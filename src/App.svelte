<script lang="ts">
  import ImagePicker from './lib/ImagePicker.svelte';
  import ImageEditor from './lib/ImageEditor.svelte';
  import MirroredImage from './lib/MirroredImage.svelte';

  let src = null;
  $: {console.log(src)}
  let bounds = {x: 20, y: 30, w: 50, h: 80};
  let mirrors = 10;
</script>

<main>
  <h1>1. Pick an image</h1>
  <ImagePicker bind:src/>

  <div class="hsplit">
    <div>
      <h1>2. Pick Area</h1>
      <ImageEditor {src} bind:bounds/>
    </div>
    <div>
      <h1>3. Mirror</h1>
      <div>
        <label for="mirrors">How many mirrored images?</label>
        <input type=range min=2 bind:value={mirrors}>
        <input id="mirrors" type=number min=2 bind:value={mirrors}>
      </div>
      <MirroredImage {src} {mirrors} {bounds} />
      <h1>4. Save it!</h1>
      <p>Right click the image and copy or save it!</p>
    </div>
  </div>

</main>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  :global(*) {
    box-sizing: border-box;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    max-width: 100%;
  }
  .hsplit {
    display: flex;
    gap: 5px;
    & > * {
      flex: 1 1 auto;
      max-width: 50%;
    }
  }

  :global(img) {
    max-width: 100%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 1rem auto;
    max-width: 14rem;
  }
</style>

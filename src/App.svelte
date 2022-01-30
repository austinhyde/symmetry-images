<script lang="ts">
  import ImagePicker from './lib/ImagePicker.svelte';
  import ImageEditor from './lib/ImageEditor.svelte';
  import MirroredImage from './lib/MirroredImage.svelte';

  let src = null;
  $: {console.log(src)}
  let bounds = null;
</script>

<main>
  <section>
    <h1>1. Pick Image & Area</h1>
    <ImagePicker bind:src/>
    {#if src}<ImageEditor {src} bind:bounds/>{/if}
  </section>
  {#if src}
  <section>
    <h1>2. Mirror</h1>
    <MirroredImage {src} {bounds} />
    <h1>3. Save it!</h1>
    <p>Right click the image and copy or save it!</p>
  </section>
  {/if}
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
    display: flex;
    justify-content: center;
    section {
      flex: 1;
    }
  }

  :global(img) {
    max-width: 100%;
  }
  :global(p) {
    text-align: center;
    line-height: 30px;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 1rem auto;
    text-align: center;
  }
</style>

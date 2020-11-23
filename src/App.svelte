<script lang="typescript">
  import Dashboard from './Dashboard.svelte';
</script>

<style>
  :global(body) {
    box-sizing: border-box;
    --dark: rgb(19, 20, 23);
    --faded-white: rgb(84, 87, 100);
    --side-padding: 100px;
    --maxWidth: calc(100% - --sidepadding*2);
    --maxHeight: calc(100vh);
    margin: 0;
    background-color: var(--dark);
    color: var(--faded-white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
</style>

<Dashboard />

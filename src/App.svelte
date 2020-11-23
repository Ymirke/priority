<script lang="typescript">
  import Dashboard from './Dashboard.svelte';
</script>

<style>
  :global(body) {
    --dark: #1d1d1d;
    --faded-white: hsl(0, 0%, 47%);
    --sidePadding: 200px;
    --topPadding: 50px;
    --maxWidth: calc(100% - --sidePadding*2);
    --maxHeight:calc(100vh - --sidePadding);

    margin: 0;
    background-color:var(--dark);
    color: var(--faded-white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2rem;

  }
</style>

<Dashboard />

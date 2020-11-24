<script lang="typescript">
  import Dashboard from './Dashboard.svelte';
</script>

<style>
  :global(body) {
    box-sizing: border-box;
    --dark: rgb(19, 20, 23);
    --gray: rgb(84, 87, 100);
    --select: rgb(24, 25, 28);
    --side-padding: 20px;
    --maxWidth: calc(100% - --sidepadding * 2);
    --maxHeight: calc(100vh);
    margin: 0;
    background-color: var(--dark);
    color: var(--gray);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
</style>

<Dashboard />

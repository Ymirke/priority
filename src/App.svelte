<script lang="typescript">
  import Dashboard from './pages/Dashboard.svelte'
  import Focus from './pages/Focus.svelte'
  import Plan from './pages/Plan.svelte'

  import PageStore from './stores/page';
  import type { pageType } from './types';
  let page: pageType;
  PageStore.subscribe(pageChange => {
    page = pageChange;
  })
</script>

{#if page === 'dashboard'}
  <Dashboard />
{:else if page === 'focus'}
  <Focus />
{:else if page === 'plan'}
  <Plan />
{/if}

<style>
  :global(body) {
    box-sizing: border-box;
    --dark: rgb(21, 21, 22);
    --gray: rgb(84, 87, 100);
    --select: rgb(24, 27, 30);
    --primary: #066aff;
    --secondary: #00bb22;
    margin: 0;
    background-color: var(--dark);
    color: var(--gray);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
</style>

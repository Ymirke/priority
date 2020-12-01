<script lang="typescript">
  import Dashboard from './pages/Dashboard.svelte';
  import Focus from './pages/Focus.svelte';

  let focusMode = true;

  const startFocusMode: () => void = () => {
    focusMode = true;
  }

  const endFocusMode: () => void = () => {
    focusMode = false;
  }

  let data = [
    {
      id: 1,
      name: 'Later',
      tasks: [
        { id: 1, text: 'item1' },
        { id: 2, text: 'item2' },
        { id: 3, text: 'item3' },
        { id: 4, text: 'item4' },
        { id: 5, text: 'item5' },
      ],
    },
    {
      id: 2,
      name: 'This week',
      tasks: [
        { id: 6, text: 'item6' },
        { id: 7, text: 'item7' },
        { id: 8, text: 'item8' },
        { id: 9, text: 'item9' },
        { id: 10, text: 'item10' },
      ],
    },
    {
      id: 3,
      name: 'Today',
      tasks: [
        { id: 11, text: 'item11' },
        { id: 12, text: 'item12' },
        { id: 13, text: 'item13' },
        { id: 14, text: 'item14' },
        { id: 15, text: 'item15' },
      ],
    },
    {
      id: 4,
      name: 'Done',
      tasks: [
        { id: 16, text: 'item16' },
        { id: 17, text: 'item17' },
        { id: 18, text: 'item18' },
        { id: 19, text: 'item19' },
        { id: 20, text: 'item20' },
      ],
    },
  ];
</script>

<style>
  :global(body) {
    box-sizing: border-box;
    --dark: rgb(19, 20, 23);
    --gray: rgb(84, 87, 100);
    --select: rgb(24, 25, 28);
    --primary: #066aff;
    margin: 0;
    background-color: var(--dark);
    color: var(--gray);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
</style>

{#if focusMode}
  <Focus {data} {endFocusMode} />
{:else}
  <Dashboard {data} {startFocusMode} />
{/if}

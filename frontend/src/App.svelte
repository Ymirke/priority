<script lang="typescript">
  import Dashboard from './pages/Dashboard.svelte';
  import Focus from './pages/Focus.svelte';

  let focusMode = false;
  const startFocusMode: () => void = () => {
    focusMode = true;
  };
  const endFocusMode: () => void = () => {
    focusMode = false;
  };

  const moveItemRight = (columnId: number, taskId: number) => {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    const taskIndex = data[columnIndex].tasks.findIndex(
      (task) => task.id === taskId
    );

    const removedItems = data[columnIndex].tasks.splice(taskIndex, 1);
    data[columnIndex + 1].tasks.unshift(removedItems[0]);

    data = [...data];
  };

  const moveItemLeft = (columnId: number, taskId: number) => {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    const taskIndex = data[columnIndex].tasks.findIndex(
      (task) => task.id === taskId
    );

    const removedItems = data[columnIndex].tasks.splice(taskIndex, 1);
    data[columnIndex - 1].tasks.unshift(removedItems[0]);

    data = [...data];
  }
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
  <Focus {endFocusMode} {moveItemRight} />
{:else}
  <Dashboard {startFocusMode} />
{/if}

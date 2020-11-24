<script lang="typescript">
  import { onMount } from 'svelte';

  import { tasks } from './stores/tasks';

  import Later from './components/Later.svelte';
  import ThisWeek from './components/ThisWeek.svelte';
  import Today from './components/Today.svelte';
  import Done from './components/Done.svelte';

  onMount(() => {
    tasks.set([
      {
        text: 'This is item #1',
        status: 'Today',
        id: 1,
      },
      {
        text: 'This is item #2',
        status: 'Later',
        id: 2,
      },
      {
        text: 'This is item #3',
        status: 'Later',
        id: 3,
      },
      {
        text: 'This is item #4',
        status: 'This week',
        id: 4,
      },
      {
        text: 'This is item #5',
        status: 'Done',
        id: 5,
      },
    ]);
  })
</script>

<style>
  main {
    padding-right: var(--side-padding);
    padding-left: var(--side-padding);

    width: var(--maxWidth);
    height: var(--maxHeight);

    display: flex;
    justify-content: center;
  }
</style>

<main>
  <Later />
  <ThisWeek />
  <Today />
  <Done />
</main>

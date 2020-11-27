<script lang="typescript">
  import Later from '../components/Later.svelte';
  import ThisWeek from '../components/ThisWeek.svelte';
  import Today from '../components/Today.svelte';
  import Done from '../components/Done.svelte';
</script>

<style>
  main {
    width: var(--maxWidth);
    height: var(--maxHeight);

    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>

<main>
  <Later />
  <ThisWeek />
  <Today />
  <Done />
</main>

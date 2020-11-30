<script lang="typescript">
  import Task from './Task.svelte';
  import { tasks } from '../stores/tasks';

  let isOpen = true;

  const toggleOpen = () => {
    isOpen = !isOpen;
  };
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    height: var(--maxHeight);
    border-right: 1px solid var(--gray);
    flex-shrink: 0;
  }
  .section--open {
    max-width: 600px;
  }
  .section--closed {
    height: 100%;
    width: 125px;
    flex-shrink: 0;
  }
  .sectionText--open {
    margin: 0px;
    font-size: 2rem;
  }
  .sectionText--closed {
    margin-top: 8px;
    margin-right: auto;
    margin-left: auto;
  }
  .section--closed:hover {
    cursor: pointer;
    background-color: var(--select);
  }
  .sectionHeader {
    user-select: none;
    margin-top: 42px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
  }
  .sectionHeader--open {
    margin-top: 37px !important;
  }
  .sectionHeader--open:hover {
    cursor: pointer;
    background-color: var(--select);
  }
</style>

{#if isOpen}
  <section class="section--open">
    <div on:click={toggleOpen} class="sectionHeader sectionHeader--open">
      <h3 class="sectionText--open">This week</h3>
    </div>
    <div class="list">
      {#each $tasks.thisWeek as task}
        <Task {task} />
      {/each}
    </div>
  </section>
{:else}
  <section class="section--closed" on:click={toggleOpen}>
    <div class="sectionHeader">
      <h3 class="sectionText--closed">This Week</h3>
    </div>
  </section>
{/if}

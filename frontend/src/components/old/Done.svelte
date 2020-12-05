<script lang="typescript">

  const flipDurationMs = 200;
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';

  const consider = (event: any) => {
    console.log(event.detail);
    tasks.update((taskData) => {
      taskData.later = event.detail.items;
      return taskData;
    });
  };

  const finalize = (event: any) => {
    tasks.update((taskData) => {
      taskData.later = event.detail.items;
      return taskData;
    });
  };

  import Task from '../Task.svelte';
  import { tasks } from '../../stores/tasks';

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
    flex-shrink: 0;
  }
  .section--open {
    max-width: 20%;
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
      <h3 class="sectionText--open">Done</h3>
    </div>
    <div
      use:dndzone={{ items: $tasks.later, flipDurationMs, dropTargetStyle: { outline: 'rgba(255, 255, 255, 0.1) solid 1px' } }}
      on:consider={(event) => consider(event)}
      on:finalize={(event) => finalize(event)}
      class="list">
      {#each $tasks.done as task}
        <Task {task} />
      {/each}
    </div>
  </section>
{:else}
  <section class="section--closed" on:click={toggleOpen}>
    <div class="sectionHeader">
      <h3 class="sectionText--closed">Done</h3>
    </div>
  </section>
{/if}

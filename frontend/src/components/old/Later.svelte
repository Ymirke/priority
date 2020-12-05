<script lang="typescript">
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';

  import { tasks } from '../stores/tasks';

  const flipDurationMs = 200;

  const consider = (event: any) => {
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
  .task {
    color: white;
    font-size: 1.2rem;

    margin-right: 5px;
    margin-left: 5px;

    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    border-radius: 5px;
  }
  .task:hover {
    background-color: var(--select);
  }
</style>

{#if isOpen}
  <section class="section--open">
    <div on:click={toggleOpen} class="sectionHeader sectionHeader--open">
      <h3 class="sectionText--open">Later</h3>
    </div>
    <div
      use:dndzone={{ items: $tasks.later, flipDurationMs, dropTargetStyle: { outline: 'rgba(255, 255, 255, 0.1) solid 1px' } }}
      on:consider={(event) => consider(event)}
      on:finalize={(event) => finalize(event)}
      class="list">
      {#each $tasks.later as task (task.id)}
        <div
          on:click={() => console.log('Click!')}
          animate:flip={{ duration: flipDurationMs }}
          class="task">
          {task.text}
        </div>
      {/each}
    </div>
  </section>
{:else}
  <section class="section--closed" on:click={toggleOpen}>
    <div class="sectionHeader">
      <h3 class="sectionText--closed">Later</h3>
    </div>
  </section>
{/if}

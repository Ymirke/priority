<script>
  import { flip } from 'svelte/animate'
  import { dndzone } from 'svelte-dnd-action'
  import Task from '../components/Task.svelte'

  import DataStore from '../stores/tasks'
  import type { dashboardStateType } from 'src/types'
  let data: dashboardStateType
  DataStore.subscribe((dataChange) => {
    data = dataChange
  })

  import PageStore from '../stores/page'
  import type { pageType } from 'src/types'
  let page: pageType
  PageStore.subscribe((pageChange) => {
    page = pageChange
  })

  const startFocusMode: () => void = () => PageStore.set('focus')

  const priority = 'icons/priority.svg'
  const flipDurationMs = 100

  // TODO: Replace this with new data structure
  import type { columnType } from 'src/types'
  export let column: columnType

  // TODO: Re-write this with new state structure.
  const considerTask = (event, columnId: number) => {
    const columnIndex = data.findIndex((column) => column.id === columnId)
    data[columnIndex].tasks = event.detail.items
    DataStore.set(data)
  }
  const finalizeTask = (event, columnId: number) => {
    const columnIndex = data.findIndex((column) => column.id === columnId)
    data[columnIndex].tasks = event.detail.items
    DataStore.set(data)
  }
</script>

{#if column.id === 3}
  <div class="column__title">{column.name}</div>
  <div
    class="column__content column__content--today"
    use:dndzone={{ items: column.tasks, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
    on:consider={(event) => considerTask(event, column.id)}
    on:finalize={(event) => finalizeTask(event, column.id)}>
    {#each column.tasks as task (task.id)}
      <div animate:flip={{ duration: flipDurationMs }} class="task__container">
        <Task {task} columnId={column.id} />
      </div>
    {/each}
  </div>
  {#if column.tasks.length > 0 && (page === 'dashboard' || page === 'plan')}
    <button on:click={startFocusMode} class="focusButton">
      <div class="buttonContent">
        <p class="noMargin">Focus session</p>
        <img
          class="buttonImage"
          src={priority}
          height="32px"
          alt="Priority logo" />
      </div>
    </button>
  {/if}
{:else}
  <div class="column__title">{column.name}</div>
  <div
    class="column__content"
    use:dndzone={{ items: column.tasks, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
    on:consider={(event) => considerTask(event, column.id)}
    on:finalize={(event) => finalizeTask(event, column.id)}>
    {#each column.tasks as task (task.id)}
      <div class="task__container">
        <Task {task} columnId={column.id} />
      </div>
    {/each}
  </div>
{/if}

<style>
  .column__title {
    font-size: 28px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    margin-left: 25px;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .column__content {
    color: white;
    height: 70vh;
    width: 100%;
    overflow-y: scroll;
  }
  .column__content--today {
    min-height: 80px;
    height: auto;
    max-height: 70vh;
  }
  .column__content:focus {
    outline: none;
  }
  .column__content::-webkit-scrollbar {
    width: 10px;
  }
  .column__content::-webkit-scrollbar-thumb {
    background: var(--select); 
    border-radius: 5px;
  }
  .task__container {
    background-color: var(--dark);
    margin-top: 1px;
    margin-bottom: 1px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 5px;
  }
  .task__container:hover {
    background-color: var(--select);
  }
  .task__container:focus {
    box-shadow: 0 0 1px 1px var(--gray);
    outline: none;
  }
  .focusButton {
    margin-top: 30px;
    background-color: #055ada;
    border: none;
    border-radius: 10px;
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: white;
  }
  .focusButton:hover {
    background-color: #066aff; /* This color is really cool */
    cursor: pointer;
  }
  .focusButton:focus {
    box-shadow: 0 0 1px 5px var(--primary);
    outline: none;
  }
  .buttonImage {
    filter: invert(1);
    transform: scaleX(-1);
    margin-left: 15px;
  }
  .buttonContent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .noMargin {
    margin: 0;
  }
  @media (max-width: 1100px) {
    .column__content {
      height: auto;
      overflow-y: auto;
      margin: 0;
      padding: 0;
    }
  }
</style>

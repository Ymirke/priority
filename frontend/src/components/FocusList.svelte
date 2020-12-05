<script>
  import { dndzone } from 'svelte-dnd-action'
  import Task from './Task.svelte'
  import ProgressBar from './ProgressBar.svelte'

  import { onMount } from 'svelte'

  import DataStore from '../stores/tasks'
  import type { dashboardStateType } from 'src/types'
  let data: dashboardStateType
  DataStore.subscribe((dataChange) => {
    data = dataChange
  })

  let totalTasks: number
  onMount(() => {
    totalTasks = data[2].tasks.length
  })

  const flipDurationMs = 200
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

<div class="column__title">{data[2].name}</div>
<ProgressBar {totalTasks} />
<div
  class="column__content"
  use:dndzone={{ items: data[2].tasks, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
  on:consider={(event) => considerTask(event, data[2].id)}
  on:finalize={(event) => finalizeTask(event, data[2].id)}>
  {#each data[2].tasks as task (task.id)}
    {#if data[2].tasks[0] === task}
      <div class="task__container--highlight">
        <Task {task} columnId={data[2].id} />
      </div>
    {:else}
      <div class="task__container">
        <Task {task} columnId={data[2].id} />
      </div>
    {/if}
  {/each}
</div>

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
    width: 100%;
    overflow-y: scroll;
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
  .task__container--highlight {
    color: white;
    background-color: var(--primary);
    margin-top: 1px;
    margin-bottom: 1px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 5px;
  }
  .task__container--highlight:hover {
    background-color: var(--primary) !important;
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

<script lang="typescript">
  import { onMount } from 'svelte'
  import { dndzone } from 'svelte-dnd-action'
  import Task from './Task.svelte'
  import ProgressBar from './ProgressBar.svelte'

  import DataStore from '../stores/tasks'
  import type { columnsDataType } from 'src/types'
  let data: columnsDataType
  DataStore.subscribe((dataChange) => {
    data = dataChange
  })

  let totalTasks: number
  onMount(() => {
    totalTasks = data.today.tasks.length
  })

  const flipDurationMs = 200
  
  const considerTask = (event: any, columnName: string) => {
    data[columnName].tasks = event.detail.items;
    DataStore.set(data)
  }
  const finalizeTask = (event: any, columnName: string) => {
    data[columnName].tasks = event.detail.items;
    DataStore.set(data)
  }
</script>

<h3>{data.today.name}</h3>
<ProgressBar {totalTasks} />
<div
  class="focus__list"
  use:dndzone={{ items: data.today.tasks, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
  on:consider={(event) => considerTask(event, data.today.columnName)}
  on:finalize={(event) => finalizeTask(event, data.today.columnName)}>
  {#each data.today.tasks as task (task.id)}
    {#if data.today.tasks[0] === task}
      <div class="task__container--highlight">
        <Task {task} columnName={data.today.columnName} />
      </div>
    {:else}
      <div class="task__container">
        <Task {task} columnName={data.today.columnName} />
      </div>
    {/if}
  {/each}
</div>

<style>
  h3 {
    font-size: 28px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    margin-left: 25px;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .focus__list {
    width: 100%;
    overflow-y: scroll;
  }
  .focus__list:focus {
    outline: none;
  }
  .focus__list::-webkit-scrollbar {
    width: 10px;
  }
  .focus__list::-webkit-scrollbar-thumb {
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
  .task__container--highlight {
    color: white;
    background-color: var(--light);
    margin-top: 1px;
    margin-bottom: 1px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 5px;
  }
  .task__container--highlight:hover {
    background-color: var(--select);
  }
  .task__container--highlight:focus {
    box-shadow: 0 0 1px 1px var(--gray);
    outline: none;
  }

  @media (max-width: 1100px) {
    .focus__list {
      height: auto;
      overflow-y: auto;
      margin: 0;
      padding: 0;
    }
  }
</style>

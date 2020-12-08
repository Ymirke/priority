<script lang="typescript">
  import { flip } from 'svelte/animate'
  import { dndzone } from 'svelte-dnd-action'
  import Task from '../components/Task.svelte'
  import CreateTasks from '../components/CreateTasks.svelte'

  import type { columnType } from 'src/types'
  export let column: columnType

  import DataStore from '../stores/tasks'
  import type { columnsDataType } from 'src/types'
  let data: columnsDataType
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

  const considerTask = (event: any, columnName: string) => {
    data[columnName].tasks = event.detail.items;
    DataStore.set(data)
  }

  const finalizeTask = (event: any, columnName: string) => {
    data[columnName].tasks = event.detail.items;
    DataStore.set(data)
  }
</script>

{#if column.columnName === 'today'}
  <h3 class="column__title">{column.name}</h3>
  <CreateTasks columnName={column.columnName}/>
  <div
    class="column__content column__content--today"
    use:dndzone={{ items: column.tasks, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
    on:consider={(event) => considerTask(event, column.columnName)}
    on:finalize={(event) => finalizeTask(event, column.columnName)}>
    {#each column.tasks as task (task.id)}
      <div animate:flip={{ duration: flipDurationMs }} class="task__container">
        <Task {task} columnName={column.columnName} />
      </div>
    {/each}
  </div>
  {#if column.tasks.length > 0 && (page === 'dashboard' || page === 'plan')}
    <button on:click={startFocusMode} class="focusButton">
      <div class="focusButton__content">
        <p class="focusButton__text">Priority</p>
        <img
          class="focusButton__icon"
          src={priority}
          height="32px"
          alt="Priority logo" />
      </div>
    </button>
  {/if}
{:else}
  <h3 class="column__title">{column.name}</h3>
  <CreateTasks columnName={column.columnName}/>
  <div
    class="column__content"
    use:dndzone={{ items: column.tasks, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
    on:consider={(event) => considerTask(event, column.columnName)}
    on:finalize={(event) => finalizeTask(event, column.columnName)}>
    {#each column.tasks as task (task.id)}
      <div class="task__container">
        <Task {task} columnName={column.columnName} />
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
    height: auto;
    min-height: 80px;
    width: 100%;
    overflow-y: scroll;
    max-height: 55vh;
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
    background-color: #066aff;
    cursor: pointer;
  }
  .focusButton:focus {
    box-shadow: 0 0 1px 5px var(--primary);
    outline: none;
  }
  .focusButton__icon {
    filter: invert(1);
    transform: scaleX(-1);
    margin-left: 15px;
  }
  .focusButton__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .focusButton__text {
    margin: 0;
    user-select: none;
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

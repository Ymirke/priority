<script lang="typescript">
  import type { taskType } from 'src/types'

  export let columnId: number
  export let task: taskType
  const renameTask: (colId: number, taskId: number) => void = (
    colId,
    taskId
  ) => {
    console.log('rename task', colId, taskId);
  }
  const check = 'icons/check.svg'

  import PageStore from '../stores/page'
  import type { pageType } from '../types'
  let page: pageType
  PageStore.subscribe((pageUpdate) => {
    page = pageUpdate
  })

  import TaskStore from '../stores/tasks'
  import type { dashboardStateType } from '../types'
  let tasks: dashboardStateType
  TaskStore.subscribe((taskChange) => {
    tasks = taskChange
  })

  const taskDone: (columnId: number, taskId: number) => void = (
    columnId,
    taskId
  ) => {
    const taskIndex = tasks[columnId - 1].tasks.findIndex(
      (task) => task.id === taskId
    )
    if (!(taskIndex > -1)) return

    const removedItem = tasks[columnId - 1].tasks.splice(taskIndex, 1)

    tasks[3].tasks.unshift(removedItem[0])

    TaskStore.set(tasks)
  }
</script>

<div on:click={() => renameTask(columnId, task.id)} class="task">
  <p class="task__text">{task.text}</p>
  {#if page === 'focus'}
    <button on:click={() => taskDone(columnId, task.id)} class="task__button">
      <img src={check} class="check" height="24px" width="24px" alt="" />
    </button>
  {/if}
</div>

<style>
  .task {
    color: inherit;

    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
  }
  .task__text {
    font-size: 1.2rem;
    margin: 0;
  }
  .task__button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    background-color: rgb(0, 0, 0);
  }
  .task__button:hover {
    filter: invert(1);
    cursor: pointer;
  }
  .task__button:focus {
    box-shadow: 0 0 1px 1px var(--gray);
    outline: none;
  }
  .check {
    justify-content: flex-end;
    filter: invert(1);
  }
</style>

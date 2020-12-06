<script lang="typescript">
  import type { taskType, pageType, columnsDataType } from 'src/types'

  const check = 'icons/check.svg'

  export let columnName: string
  export let task: taskType

  import PageStore from '../stores/page'
  let page: pageType
  PageStore.subscribe((pageUpdate) => {
    page = pageUpdate
  })

  import TaskStore from '../stores/tasks'
  let tasks: columnsDataType
  TaskStore.subscribe((taskChange) => {
    tasks = taskChange
  })

  const renameTask: (columnName: string, taskId: number) => void = (
    columnName,
    taskId
  ) => {
    const taskIndex = tasks[columnName].tasks.findIndex(
      (task: taskType) => task.id === taskId
    )
    if (!(taskIndex > -1)) return
    const newName = prompt(
      'Rename task',
      tasks[columnName].tasks[taskIndex].text
    )
    if (newName === '' || newName === null) return

    tasks[columnName].tasks[taskIndex].text = newName
    TaskStore.set(tasks)
  }

  const taskDone: (columnName: string, taskId: number) => void = (
    columnName,
    taskId
  ) => {
    const taskIndex = tasks[columnName].tasks.findIndex(
      (task: taskType) => task.id === taskId
    )
    if (!(taskIndex > -1)) return
    
    const removedItem = tasks[columnName].tasks.splice(taskIndex, 1)
    tasks.done.tasks.unshift(removedItem[0])
    TaskStore.set(tasks)
  }
</script>

<div on:click={() => renameTask(columnName, task.id)} class="task">
  <p class="task__text">{task.text}</p>
  {#if page === 'focus'}
    <button
      on:click|stopPropagation={() => taskDone(columnName, task.id)}
      class="task__button">
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

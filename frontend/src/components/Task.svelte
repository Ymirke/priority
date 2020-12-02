<script lang="typescript">
  import type { taskType, dashboardStateType } from '../types';
  
  import TaskStore from '../stores/tasks';

  export let task: taskType;
  export let columnId: number;

  let data: dashboardStateType;
  TaskStore.subscribe(taskData => {
    data = taskData;
  })

  const changeTaskText: (columnId: number, taskId: number) => void = (
    columnId,
    taskId
  ) => {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    const taskIndex = data[columnIndex].tasks.findIndex(
      (task) => task.id === taskId
    );

    const entry = prompt(
      'Change Task Text To:',
      data[columnIndex].tasks[taskIndex].text
    );
    if (entry === '' || entry === null) return;

    data[columnIndex].tasks[taskIndex].text = entry;
    data = [...data];
  };
</script>

<style>
  .task {
    color: white;

    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    border-radius: 5px;
  }
  .task:hover {
    background-color: var(--select);
  }
  .task__text{
    font-size: 1.2rem;
    margin: 0;
  }
</style>

<div on:click={() => changeTaskText(columnId, task.id)} class="task">
  <p class="task__text">{task.text}</p>
</div>

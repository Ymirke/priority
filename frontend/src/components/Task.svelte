<script lang="typescript">
  import type { taskType } from '../../types/types';

  export let task: taskType = {
    id: 100,
    text: 'hello',
    status: 'Done',
  };

  const dragStart: (event: DragEvent, taskId: number) => void = (
    event,
    taskId
  ) => {
    if (event.dataTransfer)
      event.dataTransfer.setData('text/plain', JSON.stringify(taskId));
  };
</script>

<style>
  div {
    color: white;
    font-size: 1.2rem;
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    margin-left: 5px;

    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    border-radius: 5px;
  }
  div:hover {
    background-color: var(--select);
  }
</style>

<div draggable={true} on:dragstart={(event) => dragStart(event, task.id)}>
  {task.id}
  -
  {task.text}
  -
  {task.status}
</div>

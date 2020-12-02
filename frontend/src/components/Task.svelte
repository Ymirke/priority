<script lang="typescript">
  import type { taskType } from '../../types/types';

  export let task: taskType;

  const handleClick = () => {
    console.log('click');
  };
</script>

<style>
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

<div
  on:click={handleClick}
  class="task">
  <p>
    {task.text}
  </p>
</div>

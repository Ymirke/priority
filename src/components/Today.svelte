<script>
  import Task from './Task.svelte';
  import { tasks } from '../stores/tasks';
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    height: var(--maxHeight);
    border-right: 1px solid var(--gray);
    width: 100%;
  }
  section {
    display: flex;
    height: var(--maxHeight);
    border-right: 1px solid var(--gray);
  }
  h3 {
    margin-top: 42px;
    font-size: 2rem;
    margin-right: auto;
    margin-left: auto;
  }
  .container {
    margin-left: 100px;
    margin-right: 100px;
    min-width: 600px;
    justify-content: center;
    align-items: center;
  }
  .list {
    width: 100%;
  }
</style>

<section>
  <div class="container">
    <h3>Today</h3>
    <div class="list">
      {#each $tasks as task}
        {#if task.status === 'This week'}
          <Task {task} />
        {/if}
      {/each}
    </div>
  </div>
</section>

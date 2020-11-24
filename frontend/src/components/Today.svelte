<script>
  import Task from './Task.svelte';
  import { tasks } from '../stores/tasks';
  const priority = 'icons/priority.svg';
  let hoveringOverColumn = false;
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
    margin-left: auto;
    margin-right: auto;
    width: 900px;
    justify-content: center;
    align-items: center;
  }
  .list {
    width: 100%;
  }
  .focusButton {
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
  .buttonImage {
    filter: invert(1);
    transform: scaleX(-1);
    margin-left: 15px;
  }
  .buttonContent{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .noMargin{
    margin: 0;
  }
</style>

<section>
  <div class="container">
    <h3>Today</h3>
    <div class="list">
      {#each $tasks as task}
        {#if task.status === 'Today'}
          <Task {task} />
        {/if}
      {/each}
      {#if $tasks.filter((taskItem) => taskItem.status === 'Today').length > 0}
        <button class="focusButton">
          <div class="buttonContent">
            <p class="noMargin">Start Focus Mode</p>
            <img
              class="buttonImage"
              src={priority}
              height="32px"
              alt="Priority logo" />
          </div>
        </button>
      {/if}
    </div>
  </div>
</section>

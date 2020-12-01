<script lang="typescript">
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';

  const flipDurationMs = 100;
  const priority = 'icons/priority.svg';

  import type { dashboardStateType } from '../../types/types';
  export let data: dashboardStateType;
  
  export let startFocusMode: () => void;
  
  // Helpers
  function considerTask(event, columnId: number) {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    data[columnIndex].tasks = event.detail.items;
    data = [...data];
  }

  function finalizeTask(event, columnId: number) {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    data[columnIndex].tasks = event.detail.items;
    data = [...data];
  }

  function changeTaskText(columnId: number, taskId: number) {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    const taskIndex = data[columnIndex].tasks.findIndex(
      (task) => task.id === taskId
    );

    const entry = prompt(
      'Change Task Text To:',
      data[columnIndex].tasks[taskIndex].text
    );
    if (entry === '' || entry === null) return;
    // validate - cloud functions.

    data[columnIndex].tasks[taskIndex].text = entry;
    data = [...data];
  }
</script>

<style>
  main {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
  }
  .column {
    height: auto;
    width: 25%;
    padding: 7px;
    margin: 15px;
    float: left;
  }
  .column__title {
    font-size: 28px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .column__content {
    min-height: 50px;
    height: 90%;
    overflow-y: scroll;
    /* Hide scroll bar */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .column__content--today {
    min-height: 50px;
    height: auto;
  }
  .column__content::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  .column__content:focus {
    box-shadow: 0 0 1px 1px rgb(52, 52, 52);
    outline: none;
  }
  .task {
    color: white;
    font-size: 1.2rem;

    margin-top: 5px;
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
  .task:focus {
    background-color: var(--select);
    box-shadow: 0 0 1px 1px white;
    outline: none;
  }
  @media (max-width: 1100px) {
    main {
      flex-direction: column;
      align-items: center;
      height: auto;
    }
    .column {
      width: 80%;
    }
    .column__content {
      height: auto;
      overflow-y: auto;
      margin: 0;
      padding: 0;
    }
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
</style>

<main>
  {#each data as column (column.id)}
    {#if column.id === 3}
      <div class="column">
        <div class="column__title">{column.name}</div>
        <div
          class="column__content column__content--today"
          use:dndzone={{ items: column.tasks, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
          on:consider={(event) => considerTask(event, column.id)}
          on:finalize={(event) => finalizeTask(event, column.id)}>
          {#each column.tasks as task (task.id)}
            <div animate:flip={{ duration: flipDurationMs }} class="task">
              {task.text}
            </div>
          {/each}
        </div>
        {#if column.tasks.length > 0}
          <button on:click={startFocusMode} class="focusButton">
            <div class="buttonContent">
              <p class="noMargin">Prioritize</p>
              <img
                class="buttonImage"
                src={priority}
                height="32px"
                alt="Priority logo" />
            </div>
          </button>
        {/if}
      </div>
    {:else}
      <div class="column">
        <div class="column__title">{column.name}</div>
        <div
          class="column__content"
          use:dndzone={{ items: column.tasks, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
          on:consider={(event) => considerTask(event, column.id)}
          on:finalize={(event) => finalizeTask(event, column.id)}>
          {#each column.tasks as task (task.id)}
            <div
              on:click={() => changeTaskText(column.id, task.id)}
              animate:flip={{ duration: flipDurationMs }}
              class="task">
              {task.text}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {/each}
</main>

<script lang="typescript">
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';

  const flipDurationMs = 100;
  const priority = 'icons/priority.svg';

  let data = [
    {
      id: 1,
      name: 'Later',
      items: [
        { id: 1, name: 'item1' },
        { id: 2, name: 'item2' },
        { id: 3, name: 'item3' },
        { id: 4, name: 'item4' },
        { id: 5, name: 'item5' },
      ],
    },
    {
      id: 2,
      name: 'This week',
      items: [
        { id: 6, name: 'item6' },
        { id: 7, name: 'item7' },
        { id: 8, name: 'item8' },
        { id: 9, name: 'item9' },
        { id: 10, name: 'item10' },
      ],
    },
    {
      id: 3,
      name: 'Today',
      items: [
        { id: 11, name: 'item11' },
        { id: 12, name: 'item12' },
        { id: 13, name: 'item13' },
        { id: 14, name: 'item14' },
        { id: 15, name: 'item15' },
      ],
    },
    {
      id: 4,
      name: 'Done',
      items: [
        { id: 16, name: 'item16' },
        { id: 17, name: 'item17' },
        { id: 18, name: 'item18' },
        { id: 19, name: 'item19' },
        { id: 20, name: 'item20' },
      ],
    },
  ];

  function considerTask(event, columnId) {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    data[columnIndex].items = event.detail.items;
    data = [...data];
  }

  function finalizeTask(event, columnId) {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    data[columnIndex].items = event.detail.items;
    data = [...data];
  }

  function changeTaskText(columnId, taskId) {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    const taskIndex = data[columnIndex].items.findIndex(
      (task) => task.id === taskId
    );

    const entry = prompt(
      'Change Task Text To:',
      data[columnIndex].items[taskIndex].name
    );
    if (entry === '' || entry === null) return;
    // validate - cloud functions.

    data[columnIndex].items[taskIndex].name = entry;
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
          use:dndzone={{ items: column.items, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
          on:consider={(event) => considerTask(event, column.id)}
          on:finalize={(event) => finalizeTask(event, column.id)}>
          {#each column.items as item (item.id)}
            <div animate:flip={{ duration: flipDurationMs }} class="task">
              {item.name}
            </div>
          {/each}
        </div>
        {#if column.items.length > 0}
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
    {:else}
      <div class="column">
        <div class="column__title">{column.name}</div>
        <div
          class="column__content"
          use:dndzone={{ items: column.items, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
          on:consider={(event) => considerTask(event, column.id)}
          on:finalize={(event) => finalizeTask(event, column.id)}>
          {#each column.items as item (item.id)}
            <div
              on:click={() => changeTaskText(column.id, item.id)}
              animate:flip={{ duration: flipDurationMs }}
              class="task">
              {item.id}
              -
              {item.name}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {/each}
</main>

<script lang="typescript">
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';

  const flipDurationMs = 175;

  let data = [
    {
      id: 1,
      name: 'Later',
      items: [
        { id: 1, name: 'item1' },
        { id: 2, name: 'item2' },
        { id: 3, name: 'item3' },
        { id: 4, name: 'item4' },
      ],
    },
    {
      id: 2,
      name: 'This week',
      items: [
        { id: 5, name: 'item5' },
        { id: 6, name: 'item6' },
        { id: 7, name: 'item7' },
        { id: 8, name: 'item8' },
      ],
    },
    {
      id: 3,
      name: 'Today',
      items: [
        { id: 9, name: 'item9' },
        { id: 10, name: 'item10' },
        { id: 11, name: 'item11' },
        { id: 12, name: 'item12' },
      ],
    },
    {
      id: 4,
      name: 'Done',
      items: [
        { id: 13, name: 'item13' },
        { id: 14, name: 'item14' },
        { id: 15, name: 'item15' },
        { id: 16, name: 'item16' },
      ],
    },
  ];

  function consider(event, columnId) {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    data[columnIndex].items = event.detail.items;
    data = [...data];
  }

  function finalize(event, columnId) {
    const columnIndex = data.findIndex((column) => column.id === columnId);
    data[columnIndex].items = event.detail.items;
    data = [...data];
  }
</script>

<style>
  main {
    width: var(--maxWidth);
    height: var(--maxHeight);

    display: flex;
    justify-content: center;
    width: 100%;
  }
  .column {
    height: 90vh;
    width: 250px;
    padding: 0.5em;
    margin: 1em;
    float: left;
    border: 1px solid #333333;
    overflow-y: hidden;
  }
  .column-title {
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .column-content {
    height: 100%;
  }
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

<main>
  {#each data as column (column.id)}
    <div class="column">
      <div class="column-title">{column.name}</div>
      <div
        class="column-content"
        use:dndzone={{ items: column.items, flipDurationMs, dropTargetStyle: { outline: 'none' } }}
        on:consider={(event) => consider(event, column.id)}
        on:finalize={(event) => finalize(event, column.id)}>
        {#each column.items as item (item.id)}
          <div animate:flip={{ duration: flipDurationMs }} class="task">
            {item.id}
            -
            {item.name}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</main>

<script lang="typescript">
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';

  const flipDurationMs = 100;

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
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .column {
    height: auto;
    width: 250px;
    padding: 7px;
    margin: 15px;
    float: left;
    overflow-y: hidden;
  }
  .column__title {
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .column__content {
    height: 90%;
    overflow-y: scroll;
    /* Hide scroll bar */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .column__content::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
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
      <div class="column__title">{column.name}</div>
      <div
        class="column__content"
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

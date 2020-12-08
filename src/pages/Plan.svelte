<script lang="typescript">
  import TaskColumn from '../components/TaskColumn.svelte'
  const close = 'icons/close.svg'

  import TaskStore from '../stores/tasks'
  import type { columnsDataType } from 'src/types'
  let data: columnsDataType
  TaskStore.subscribe((dataChange) => {
    data = dataChange
  })

  import PageStore from '../stores/page'
  const goToDashboard: () => void = () => {
    PageStore.set('dashboard')
  }
</script>

<button on:click={goToDashboard} class="closebutton"><img class="closeIcon"
    src={close}
    height="36px"
    width="36px"
    alt="" /></button>
<p>Which tasks do you want to get done today?</p>
<main>
  <div class="column">
    <TaskColumn column={data.thisWeek} />
  </div>
  <div class="column">
    <TaskColumn column={data.today} />
  </div>
</main>

<style>
  p {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    font-style: italic;
  }
  main {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
  .column {
    margin-top: 20px;
    width: 30%;
    height: auto;
  }
  .closebutton{
    border: none;
    background-color: transparent;
    position: absolute;
    border-radius: 10px;
    padding-top: 10px;
    padding-right: 12px;
    padding-bottom: 10px;
    padding-left: 12px;
    top: 20px;
    left: 20px;
  }
  .closebutton:hover{
    background-color: var(--select);
    cursor: pointer;
  }
  .closeIcon{
    filter: invert(1);
  }
  @media (max-width: 700px) {
    main {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
    .column {
      width: 80%;
    }
  }
</style>

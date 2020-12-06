<script lang="typescript">
  import TaskColumn from '../components/TaskColumn.svelte'

  import TaskStore from '../stores/tasks'
  import type { columnsDataType } from 'src/types'
  let data: columnsDataType
  TaskStore.subscribe((dataChange) => {
    data = dataChange
  })
</script>

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
  @media (max-width: 700px){
    main{
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
    .column{
      width: 80%;
    }
  }
</style>

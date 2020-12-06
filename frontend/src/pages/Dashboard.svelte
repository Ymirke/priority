<script lang="typescript">
  import TaskColumn from '../components/TaskColumn.svelte'
  import Footer from '../components/Footer.svelte'

  import type { columnsDataType } from '../types'
  let data: columnsDataType
  import TaskStore from '../stores/tasks'
  TaskStore.subscribe((taskData) => {
    data = taskData
  })

  import type { pageType } from '../types'
  let page: pageType
  import PageStore from '../stores/page'
  PageStore.subscribe((pageChange) => {
    page = pageChange
  })
</script>

<main>
  <div class="column">
    <TaskColumn column={data.later} />
  </div>
  <div class="column">
    <TaskColumn column={data.thisWeek} />
  </div>
  <div class="column">
    <TaskColumn column={data.today} />
  </div>
  <div class="column">
    <TaskColumn column={data.done} />
  </div>
</main>
<Footer />

<style>
  main {
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
  }
  .column {
    height: auto;
    width: 100%;
    padding: 7px;
    margin: 15px;
    float: left;
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
  }
</style>

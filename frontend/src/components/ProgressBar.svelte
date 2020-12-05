<script>
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  let ValueStore = tweened(0, {
    duration: 1000,
    easing: cubicOut,
  })
  let value: number
  ValueStore.subscribe((valueChange) => {
    value = valueChange
  })

  export let totalTasks: number

  import TasksStore from '../stores/tasks'
  import type { dashboardStateType } from '../types'
  let tasks: dashboardStateType
  TasksStore.subscribe((taskChange) => {
    tasks = taskChange
  })

  let tasksLeft: number
  const assignTasksLeft = () => {
    tasksLeft = tasks[2].tasks.length
  }
  const assignValue = () => {
    if (totalTasks) {
      ValueStore.set(totalTasks - tasksLeft)
    }
  }

  $: tasks, assignTasksLeft()
  $: tasksLeft, assignValue()
</script>

<label for="taskprogress">
  <progress id="taskprogress" {value} max={totalTasks} />
  <p>{Math.ceil(value)} done, {tasksLeft} left</p>
</label>

<style>
  p {
    text-align: center;
  }
  label {
    width: 100%;
    margin-bottom: 20px;
  }
  progress {
    width: 100%;
    height: 24px;
    border-radius: 0px;
  }
  progress::-webkit-progress-bar {
    background-color: var(--gray);
    border-radius: 5px;
  }
  progress::-webkit-progress-value {
    background-color: var(--primary);
    border-radius: 5px;
  }
</style>

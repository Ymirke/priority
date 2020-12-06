<script lang="typescript">
  import { onDestroy } from 'svelte'
  import FocusList from '../components/FocusList.svelte'
  import CelebratoryGif from '../components/CelebratoryGif.svelte'

  import TaskStore from '../stores/tasks'
  import type { columnsDataType } from '../types'
  let data: columnsDataType
  TaskStore.subscribe((taskData) => {
    data = taskData
  })

  import PageStore from '../stores/page'
  import type { pageType } from '../types'
  let page: pageType
  PageStore.subscribe((taskData) => {
    page = taskData
  })

  let seconds = 0
  let displayTime = ''

  const getDisplayTime: () => void = () => {
    if (data.today.tasks.length < 1) return clearInterval(interval)
    const hours = Math.floor(seconds / (60 * 60))
    const minutes = Math.floor((seconds % (60 * 60)) / 60)
    const secs = Math.ceil((seconds % (60 * 60)) % 60)

    const displaySeconds = () => {
      if (secs > 9) return secs.toString()
      return `0${secs.toString()}`
    }

    const displayMinutes = () => {
      if (minutes > 9) return minutes.toString()
      return `0${minutes.toString()}`
    }

    const displayHours = () => {
      if (hours > 9) return hours.toString()
      return `0${hours.toString()}`
    }
    
    if (seconds < 60) {
      return (displayTime = `${displayHours()}:${displayMinutes()}:${displaySeconds()}`)
    }

    displayTime = `${displayHours()}:${displayMinutes()}`
  }

  $: seconds, getDisplayTime()
  $: displayTime, (document.title = `Priority - ${displayTime}`)

  const endFocusMode = () => {
    PageStore.set('dashboard')
  }

  const interval = setInterval(() => (seconds += 1), 1000)

  onDestroy(() => {
    clearInterval(interval)
    document.title = 'Priority'
    window.onbeforeunload = function () {}
  })

  window.onbeforeunload = () => 'Timer running'
</script>

<main class="container">
  <FocusList />
  <button on:click={endFocusMode} class="endearlybutton">End priority session early</button>
  {#if data.today.tasks.length < 1}
    <CelebratoryGif completedIn={displayTime} />
  {/if}
</main>

<style>
  .container {
    margin-top: 27px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .endearlybutton {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: transparent;
    color: var(--primary);
    font-style: italic;
  }
  .endearlybutton:hover {
    border: none;
    cursor: pointer;
  }
  @media (min-width: 767.98px) {
    .container {
      width: 100%;
    }
  }
  @media (min-width: 991.98px) {
    .container {
      width: 70%;
    }
  }
  @media (min-width: 1199.98px) {
    .container {
      width: 60%;
    }
  }
  @media (min-width: 1600px) {
    .container {
      width: 40%;
    }
  }
</style>

<script>
  import { onDestroy } from 'svelte';
  import type { dashboardStateType } from '../../types/types';
  export let data: dashboardStateType;
  export let endFocusMode: () => void;
  export let moveItemRight: (columnId: number, taskId: number) => void;

  let seconds = 0;
  let displayTime = '';

  const base = 'Priority - ';

  $: seconds, getDisplayTime();
  $: displayTime, (document.title = `${base}${displayTime}`);

  const getDisplayTime: () => void = () => {
    const hours = Math.floor(seconds / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = Math.ceil((seconds % (60 * 60)) % 60);

    const displaySeconds = () => {
      if (secs > 9) return secs.toString();
      return `0${secs.toString()}`;
    };

    const displayMinutes = () => {
      if (minutes > 9) return minutes.toString();
      return `0${minutes.toString()}`;
    };

    const displayHours = () => {
      if (hours > 9) return hours.toString();
      return `0${hours.toString()}`;
    };

    if (seconds < 60) {
      return (displayTime = `${displayHours()}:${displayMinutes()}:${displaySeconds()}`);
    }

    displayTime = `${displayHours()}:${displayMinutes()}`;
  };

  const interval = setInterval(() => (seconds += 1), 1000);

  onDestroy(() => {
    clearInterval(interval);
    document.title = 'Priority';
    window.onbeforeunload = function () {};
  });

  window.onbeforeunload = function () {
    return 'Timer running';
  };
</script>

<style>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .doing {
    border-radius: 5px;
    border: 1px solid white;
    width: 1200px;
    max-width: 100%;

    margin-top: 5vh;

    padding-bottom: 5px;
    padding-top: 5px;
  }
  .doing__headline {
    text-align: center;
    font-weight: 700;
    color: white;
  }
</style>

<main class="container">
  <section class="doing">
    <h1 class="doing__headline">Doing:</h1>
    <div>
      <!-- List component here. -->
      {#each data[2].tasks as task (task.id)}
        <div>{task.text}-- <button on:click={() => moveItemRight(3, task.id)}>complete me!</button></div>
      {/each}
    </div>
  </section>
  <button on:click={endFocusMode}>x</button>
</main>

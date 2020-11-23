<script lang="typescript">
  import { tasks } from '../stores/tasks';

  let isOpen = false;

  const toggleOpen = () => {
    isOpen = !isOpen;
  };
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    height: var(--maxHeight);
    border-right: 1px solid var(--faded-white);
  }
  .sectionTextOpen {
    margin-top: 42px;
    font-size: 2rem;
    margin-right: auto;
    margin-left: auto;
  }
  .sectionTextClosed {
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
  }
  .sectionOpen {
    width: 500px;
  }
  .sectionClosed {
    height: 100%;
    width: 125px;
    flex-shrink: 0;
  }
  .sectionClosed:hover {
    cursor: pointer;
    background-color: rgb(24, 25, 28);
  }
</style>

{#if isOpen}
  <section class="sectionOpen">
    <h3 class="sectionTextOpen">Later</h3>
    <p on:click={toggleOpen}>X</p>
    {#each $tasks as { id, text, status }}
    {#if (status === 'Later')}
    <li>id: {id}, text:{text}</li>
    {/if}
    {/each}
  </section>
  {:else}
  <section class="sectionClosed" on:click={toggleOpen}>
    <h3 class="sectionTextClosed">Later</h3>
  </section>
{/if}

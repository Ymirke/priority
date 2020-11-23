<script>
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
    border-left: 1px solid var(--faded-white);
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
    width: 30%;
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
    <h3 class="sectionTextOpen">Done</h3>
    <p on:click={toggleOpen}>X</p>
  </section>
{:else}
  <section class="sectionClosed" on:click={toggleOpen}>
    <h3 class="sectionTextClosed">Done</h3>
  </section>
{/if}

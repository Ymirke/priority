<script>
  const plusIcon = 'icons/add-circle.svg'

  let value: string = '';

  const submit = () => {
    console.log(value)
  }
</script>

<div>
  <input bind:value type="text" placeholder="Add task" />
  {#if value !== ''}
    <button on:click={submit}>
      <img
        src={plusIcon}
        class="buttonIcon"
        width="24px"
        height="24px"
        alt="plus symbol" />
    </button>
  {/if}
</div>

<style>
  div {
    display: flex;
    padding: 20px;
  }
  input {
    font-weight: 700;
    width: 100%;
    height: 2rem;
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    color: white;
    border-bottom: 2px solid var(--gray);
  }
  input:focus {
    outline: none;
    border-bottom: 2px solid white;
  }
  button {
    background-color: var(--dark);
    border: none;
  }
  .buttonIcon {
    filter: invert(1);
  }
</style>

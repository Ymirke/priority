<script lang="typescript">
  import { v4 as uuid } from 'uuid';
  const plusIcon = 'icons/add-circle.svg'

  export let columnName: 'string';

  import TaskStore from '../stores/tasks'
  import type { columnsDataType } from '../types'
  let data: columnsDataType
  TaskStore.subscribe((taskChange) => {
    data = taskChange
  })

  let value: string = ''

  const submit = () => {
    const newTask = {
      id: uuid(),
      text: value,
    }

    data[columnName].tasks.unshift(newTask);

    TaskStore.set(data);

    value = '';
  }

  const handleKeyup = () => {
		if (event.code == 'Enter') {
			submit();
		}
	}
</script>

<div>
  <input bind:value on:keyup|preventDefault={handleKeyup} type="text" placeholder="Add task" />
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

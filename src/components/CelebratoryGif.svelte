<script lang="typescript">
  import { gifs, headlines } from '../data/celebration'
  import PageStore from '../stores/page'

  export let completedIn: string = '0'

  const goToDashboard = () => {
    PageStore.set('dashboard')
  }

  const getRandomItem = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)]
  }
</script>

<main>
  <section>
    <h2>{getRandomItem(headlines)}</h2>
    <img src={getRandomItem(gifs)} alt="" />
    <p>You completed all your tasks in: {completedIn}</p>
    <button on:click={goToDashboard}>Back to the dashboard</button>
  </section>
</main>

<style>
  main {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000000ac;
    display: flex;
    justify-content: center;
  }
  section {
    margin-top: 10vh;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    background-color: var(--select);
    border-radius: 10px;
    width: 700px;
    height: auto;
  }
  h2 {
    font-size: 2rem;
    color: white;
    text-align: center;
  }
  img {
    height: auto;
    width: 100%;
  }
  p{
    text-align: center;
    margin-bottom: 30px;
  }
  button {
    margin-right: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
    background-color: #055ada;
    border: none;
    border-radius: 10px;
    width: calc(100%-60px);
    font-size: 2rem;
    font-weight: 700;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: white;
  }
  button:hover {
    background-color: #066aff;
    cursor: pointer;
  }
  button:focus {
    box-shadow: 0 0 1px 5px var(--primary);
    outline: none;
  }
</style>

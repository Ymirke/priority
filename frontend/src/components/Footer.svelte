<script lang="typescript">
  
  const list = 'icons/list-circle.svg'
  const stats = 'icons/stats-chart.svg'
  const github = 'icons/logo-github.svg'
  
  import PageStore from '../stores/page';
  import type { pageType } from 'src/types';

  const goToPlan = () =>  {
    PageStore.set('plan');
  }
  
</script>

<footer>
  <ul class="footerItems">
    <li on:click={goToPlan} class="footerItem" data-tooltip="Plan your day">
      <img
        draggable="false"
        class="invert"
        height="48px"
        width="48px"
        src={list}
        alt="" />
    </li>
    <!-- <li class="footerItem" data-tooltip="Your stats">
      <img
        draggable="false"
        class="invert"
        height="48px"
        width="48px"
        src={stats}
        alt="" />
    </li> -->
    <li class="footerItem" data-tooltip="GitHub">
      <a
        href="https://github.com/Ymirke"
        target="_blank"
        rel="noopener noreferrer">
        <img
          draggable="false"
          class="invert"
          height="48px"
          width="48px"
          src={github}
          alt="" />
      </a>
    </li>
  </ul>
</footer>

<style>
  footer {
    position: sticky;
    width: 100%;
    margin-bottom: 15px;
  }
  .footerItems {
    padding: 1rem;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
    min-width: 400px;
    background-color: var(--select);
    display: flex;
    justify-content: space-around;
  }
  .invert {
    filter: invert(1);
    user-select: none;
  }
  .footerItem {
    list-style: none;
    position: relative;
  }
  .footerItem::before,
  .footerItem::after {
    --tooltip-color: var(--select);
    --tooltip-scale: 0;
    --tooltip-arrow-size: 10px;
    --tooltip-translateY: 0;
    position: absolute;
    top: -30px;
    left: 50%;
    height: auto;
    transform: translateX(-50%) translateY(var(--tooltip-translateY, 0))
      scale(var(--tooltip-scale));
    transition: 150ms transform;
    transform-origin: bottom center;
  }
  .footerItem::before {
    --tooltip-translateY: calc(-100% - var(--tooltip-arrow-size));
    color: white;
    background-color: var(--tooltip-color);
    content: attr(data-tooltip);
    border-radius: 5px;
    text-align: center;
    padding: 10px;
    width: max-content;
    max-width: 150%;
  }
  .footerItem:hover::before,
  .footerItem:hover::after {
    --tooltip-scale: 1;
  }
  .footerItem::after {
    --tooltip-translateY: calc(-1 * var(--tooltip-arrow-size));
    content: '';
    border: var(--tooltip-arrow-size) solid transparent;
    border-top-color: var(--tooltip-color);
    transform-origin: top center;
  }
  .footerItem:hover {
    cursor: pointer;
  }
</style>

<script lang="typescript">
  const list = 'icons/list-circle.svg'
  const stats = 'icons/stats-chart.svg'
  const github = 'icons/logo-github.svg'

  import PageStore from '../stores/page'

  const goToPlan = () => {
    PageStore.set('plan')
  }
</script>

<footer>
  <ul class="footer__list">
    <li on:click={goToPlan} class="footer__listItem" data-tooltip="Plan your day">
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
    <li class="footer__listItem" data-tooltip="GitHub">
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
    position: absolute;
    width: 100%;
    bottom: 15px;
  }
  @media (max-width: 1100px) {
    footer {
      bottom: 15px;
      position: sticky;
    }
  }
  .footer__list {
    padding: 15px;
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
  .footer__listItem {
    list-style: none;
    position: relative;
  }
  .footer__listItem::before,
  .footer__listItem::after {
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
  .footer__listItem::before {
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
  .footer__listItem:hover::before,
  .footer__listItem:hover::after {
    --tooltip-scale: 1;
  }
  .footer__listItem::after {
    --tooltip-translateY: calc(-1 * var(--tooltip-arrow-size));
    content: '';
    border: var(--tooltip-arrow-size) solid transparent;
    border-top-color: var(--tooltip-color);
    transform-origin: top center;
  }
  .footer__listItem:hover {
    cursor: pointer;
  }
</style>

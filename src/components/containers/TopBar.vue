<script setup></script>

<template>
  <div class="TopBar">
    <RouterLink to="/">
      <img src="/images/logo.png" alt="Logo" />
    </RouterLink>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 1201px) {
  .TopBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--background);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    z-index: 5;
  }

  .TopBar > a > img {
    height: 32px;
    filter: var(--filter);
  }

  .TopBar > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 8px;
  }
}

@media screen and (max-width: 1200px) {
  .TopBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 24px 0;
    z-index: 5;
  }

  .TopBar > a > img {
    height: 36px;
    filter: var(--filter);
  }

  .TopBar > div {
    display: none;
  }
}
</style>

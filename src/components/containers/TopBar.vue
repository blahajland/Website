<script setup></script>

<template>
  <div class="TopBar">
    <RouterLink to="/">
      <img alt="Logo" src="/images/logo.png" />
    </RouterLink>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass">
.TopBar
  display: flex
  align-items: center
  z-index: 5

  > a > img
    filter: var(--filter)

@media (min-width: 1201px)
  .TopBar
    flex-direction: row
    justify-content: space-between
    padding: 24px

    > a > img
      height: 32px

    > div
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: stretch
      gap: 8px

@media (max-width: 1200px)
  .TopBar
    flex-direction: column
    justify-content: start
    padding: 24px 0

    > a > img
      height: 36px

    > div
      display: none
</style>

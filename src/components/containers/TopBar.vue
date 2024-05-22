<template>
  <div class="TopBar">
    <RouterLink to="/">
      <img alt="Logo" src="https://blahaj.land/static/images/Logo.png" />
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

  > a > img
    filter: var(--filter)

  > div
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: stretch
@media (min-width: 1201px)
  .TopBar
    flex-direction: row
    justify-content: space-between
    padding: 24px

    > a > img
      height: 32px

    > div
      gap: 8px

@media (max-width: 1200px)
  .TopBar
    flex-direction: column
    justify-content: center
    gap: 16px
    padding: 24px

    > a > img
      height: 36px

    > div
      gap: 12px

</style>

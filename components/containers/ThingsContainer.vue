<template>
  <div class="ThingsContainer">
    <slot />
  </div>
</template>

<style lang="sass">

.ThingsContainer
  display: flex
  flex-wrap: wrap
  flex-direction: row
  justify-content: start
  align-items: stretch
  gap: 16px

  > *
    animation: var(--anim)
</style>

<template>
  <div class="ThingsContainer">
    <slot></slot>
  </div>
</template>

<style lang="sass">

.ThingsContainer
  display: flex
  flex-wrap: wrap
  flex-direction: row
  justify-content: start
  align-items: stretch
  gap: 12px

  > *
    animation: var(--anim)

</style>

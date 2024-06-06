<template>
  <div class="NotificationBanner">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.NotificationBanner
  border-radius: 0 0 var(--radius-med) var(--radius-med)
  background: var(--text)
  position: sticky
  top: 0
  left: 0
  right: 0
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  gap: 16px
  padding: 16px

  > *
    margin: 0
    color: var(--background)
</style>

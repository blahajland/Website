<template>
  <div class="NavbarFrame">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.NavbarFrame
  z-index: 5
  position: fixed
  top: 0
  left: 0
  right: 0
  display: flex
  flex-direction: column
  justify-content: stretch
  align-items: stretch
  gap: 0
  background: color-mix(in srgb, var(--background), transparent 58%)
  backdrop-filter: blur(20px)
</style>

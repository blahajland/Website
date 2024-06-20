<template>
  <div class="TabGroup">
    <slot />
  </div>
</template>

<style lang="sass">
.TabGroup
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  padding: 0 0 8px 0
  gap: 16px

  @media (max-width: 1200px)
    display: none
</style>

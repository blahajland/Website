<script setup>
defineProps({
  color: {
    default: 'var(--surface2)'
  },
  font: {
    default: '#101010'
  }
})
</script>

<template>
  <div class="RowCard">
    <div>
      <slot name="image"></slot>
    </div>
    <div>
      <slot name="default"></slot>
    </div>
  </div>
</template>

<style lang="sass">

.RowCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  transition: var(--trans)
  color: v-bind(font)

  @media (min-width: 1201px)
    padding: 24px
    gap: 32px
    flex: 0 0 324px

  @media (max-width: 1200px)
  padding: 24px 32px
  gap: 24px

  > div
    display: flex
    flex-direction: column
    justify-content: center
    align-items: start
    gap: 4px

    > img
      height: 64px

    &:last-of-type
      flex-grow: 1

  *
    margin: 0
</style>

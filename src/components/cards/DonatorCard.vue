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
  <div class="DonatorCard">
    <slot></slot>
  </div>
</template>

<style lang="sass">

.DonatorCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  justify-content: start
  align-items: center
  transition: var(--trans)
  color: v-bind(font)
  gap: 16px

  > h3
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis

  @media (min-width: 1201px)
    flex-direction: column
    padding: 32px
    flex: 0 0 128px
    width: 128px

    > h3
      width: 100%

  @media (max-width: 1200px)
    padding: 24px 16px
    flex-direction: row

    > h3
      flex-grow: 1
      text-align: left

  *
    margin: 0
    text-align: center

  > img
    height: 64px
    width: 64px
    object-fit: cover
</style>

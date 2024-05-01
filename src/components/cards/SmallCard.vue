<script setup>
defineProps({
  color: {
    default: 'var(--blahaj)'
  },
  font: {
    default: '#101010'
  },
  orientation: {
    default: 'row'
  },
  clickable: {
    default: false
  }
})
</script>

<template>
  <div class="SmallCard" :class="{ clickable: clickable }">
    <slot></slot>
  </div>
</template>

<style lang="sass">

.SmallCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: v-bind(orientation)
  align-items: center
  transition: var(--trans)
  color: v-bind(font)

  @media (min-width: 1201px)
    justify-content: start
    padding: 24px
    gap: 16px
    flex: 0 0 128px

  @media (max-width: 1200px)
    justify-content: center
    padding: 24px 32px
    gap: 24px

  *
    margin: 0
    text-align: center

  > img
    height: 64px
    border-radius: var(--radius-inf)

  > p
    overflow: hidden
    line-clamp: 2
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical

  &.clickable
    &:hover
      background: color-mix(in srgb, v-bind(color), var(--hover))

    &:active
      background: var(--blahaj)
</style>

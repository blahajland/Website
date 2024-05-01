<script setup>
defineProps({
  color: {
    default: 'var(--blahaj)'
  },
  font: {
    default: '#101010'
  },
  gap: {
    default: '16px'
  }
})
</script>

<template>
  <div class="VerticalCard">
    <slot></slot>
  </div>
</template>

<style lang="sass">

.VerticalCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: column
  justify-content: start
  align-items: center
  transition: var(--trans)
  color: v-bind(font)

  @media (min-width: 1201px)
    padding: 32px
    gap: v-bind(gap)
    flex: 0 0 300px


  @media (max-width: 1200px)
    padding: 24px 32px
    gap: 24px

  p, h3, h1
    text-align: center

  *
    margin: 0

  > img
    height: 32px
</style>

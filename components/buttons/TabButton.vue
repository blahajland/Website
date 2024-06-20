<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <a :href="href" class="TabButton">
    <slot />
    <hr />
  </a>
</template>

<style lang="sass">
.TabButton
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 8px
  min-width: 180px
  padding-top: 8px
  border-radius: var(--radius-small) var(--radius-small) 0 0
  transition: var(--trans)
  cursor: pointer
  text-decoration: none
  color: var(--text)

  > p
    margin: 0
    text-align: center
    font-weight: 700

  > hr
    margin: 0
    height: 3px
    background: var(--surface1)
    width: 100%
    border: none
    border-radius: var(--radius-inf)

  &:hover
    background: var(--surface1)

    > hr
      background: var(--surface2)

  &:active
    background: var(--surface2)

  @media (max-width: 1200px)
    display: none
</style>

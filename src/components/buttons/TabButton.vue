<template>
  <div class="TabButton">
    <slot></slot>
    <hr />
  </div>
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
    background: color-mix(in srgb, v-bind(--surface1) 60%, v-bind(--surface2) 40%)


    > hr
      background: color-mix(in srgb, v-bind(--surface1) 60%, v-bind(--surface2) 40%)

  &:active
    background: var(--surface2)

  @media (max-width: 1200px)
    display: none
</style>

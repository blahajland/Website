<template>
  <div class="CustomFooter">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.CustomFooter
  box-sizing: border-box
  width: 100%
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center

  > *
    margin: 0

  a
    font-weight: 700
    text-decoration: none
    color: var(--text2)
    transition: var(--trans)

    &:hover
      opacity: 0.75

    &:active
      opacity: 0.5

  @media (min-width: 1201px)
    gap: 32px
    padding: 0 0 12px

  @media (max-width: 1200px)
    flex-wrap: wrap
    gap: 16px
    margin-top: 32px
    padding: 32px
    background: color-mix(in srgb, var(--background), transparent 58%)
    border-radius: var(--radius-small) var(--radius-small) 0 0
</style>

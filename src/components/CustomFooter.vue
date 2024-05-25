<template>
  <div class="CustomFooter">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.CustomFooter
  width: 100%
  display: flex
  justify-content: center
  align-items: center

  > *
    margin: 0

  a
    font-weight: 700
    text-decoration: none
    color: var(--surface2)
    transition: var(--trans)

    &:hover
      opacity: 0.75

    &:active
      opacity: 0.5

  @media (min-width: 1201px)
    flex-direction: row
    gap: 32px
    padding: 0 0 12px

  @media (max-width: 1200px)
    flex-direction: column
    gap: 16px
    padding: 64px 0 32px
</style>

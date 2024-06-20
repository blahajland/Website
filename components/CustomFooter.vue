<template>
  <div class="CustomFooter">
    <slot />
  </div>
</template>

<style lang="sass">
.CustomFooter
  display: flex
  justify-content: stretch
  align-items: stretch
  background: var(--surface1)
  padding: 48px
  box-sizing: border-box
  border-radius: var(--radius-med) var(--radius-med) 0 0

  *
    margin: 0

  @media (min-width: 1201px)
    flex-direction: row
    gap: 64px

    > div:not(:first-of-type)
      flex-basis: 300px

  @media (max-width: 1200px)
    flex-direction: column
    gap: 32px

  > div
    display: flex
    flex-direction: column
    justify-content: start
    align-items: start
    gap: 12px

    &:first-of-type
      flex-grow: 1

    &:not(:first-of-type)
      flex-shrink: 1

    span
      font-size: 0.75em
      opacity: 0.66

    > h2
      opacity: 0.75
      margin-bottom: 4px

    > a
      display: flex
      flex-direction: row
      justify-content: start
      align-items: center
      gap: 8px
      text-decoration: underline transparent
      color: var(--text)
      font-weight: bold
      transition: var(--trans)

      &:hover
        text-decoration: underline var(--text) 1px

      > img
        filter: var(--filter)
        height: 1.25em
</style>

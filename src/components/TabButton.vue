<script setup></script>

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
  border-radius: var(--radius-small)
  transition: var(--trans)
  cursor: pointer

  > p
    margin: 0
    text-align: center
    font-weight: 700

  > hr
    margin: 0
    height: 3px
    background: var(--hover)
    width: 100%
    border: none
    border-radius: var(--radius-inf)

  &:hover
    background: var(--hover)

    > hr
      background: var(--blahaj)

  &:active
    background: var(--blahaj)

  @media (max-width: 1200px)
    display: none
</style>

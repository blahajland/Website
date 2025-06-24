import '@/assets/style/main.sass'
import '@/assets/style/base.sass'
import '@/assets/style/colors.css'
import { ref } from 'vue'
import { defineComponent } from 'vue'

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
    background: var(--surface1)


    > hr
      background: var(--surface1)

  &:active
    background: var(--surface2)

  @media (max-width: 1200px)
    display: none
</style>

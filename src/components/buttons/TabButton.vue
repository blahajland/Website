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
  border: 2px dashed var(--surface1)
  font-size: 1.2rem
  margin: 2px

  > p
    margin: 0px
    text-align: center
    font-weight: 800

  > hr
    margin: -2px
    height: 8px
    background: var(--surface)
    width: 100%
    border: none
    transition: var(--trans)


  &:hover
    background: var(--surface)
    border: 4px solid var(--surface1)
    transition: var(--trans)
    margin: 0px 0px


    > hr
      background: var(--surface1)
      transition: var(--trans)

  &:active
    background: var(--surface2)

  @media (max-width: 1200px)
    display: none
</style>

<script setup lang="ts">
import { colorsService } from 'blahaj-library'

defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  color: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: 'var(--surface2)'
  },
  font: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: '#ffffff'
  },
  clickable: {
    type: Boolean,
    default: false
  }
})

const stripHttp = (link: string) => {
  let res = new RegExp('^(?:http|https):\\/\\/([a-z0-9.\\-_]+).*$', 'i').exec(link)
  if (!res || res.length < 2) return link
  return res[1]
}
</script>

<template>
  <div class="UserCard" :class="{ clickable: clickable }">
    <div>
      <img :src="image" :alt="title" />
      <h3>{{ title }}</h3>
    </div>
    <div>
      <marquee>{{ stripHttp(website) }}</marquee>
    </div>
  </div>
</template>

<style lang="sass">

.UserCard
  background: var(--background)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: column
  align-items: center
  transition: var(--trans)
  color: var(--text2)
  gap: 24px
  background: var(--surface1)
  backdrop-filter: blur(12px)
  border-radius: 34px
  position: relative
  overflow: visible
  border: 2px dashed var(--surface1)
  

  @media (min-width: 1201px)
    justify-content: start
    padding: 24px
    flex: 0 0

  @media (max-width: 1200px)
    justify-content: center
    padding: 24px 12px

  *
    margin: 0
    text-align: start

  div:first-of-type > img
    height: 60px
    border-radius: var(--radius-inf)

  div:nth-of-type(2)
    display: flex
    flex-direction: column
    justify-content: start
    align-items: start
    width: 200px
    gap: 4px

    > marquee
      display: flex
      box-sizing: border-box
      width: 200px
      overflow: hidden
      white-space: nowrap
      font-family: monospace
      padding: 4px 8px 4px 8px
      background: var(--text2)
      color: var(--text)
      border-radius: var(--radius-inf)
      behavior: scroll
      transition: var(--trans)
      scrollamount: -5

  &.clickable
    cursor: pointer

    &:hover
      border: 2px dashed var(--surface2)
      transition: var(--trans)


    &:active
      background: var(--surface2)
</style>

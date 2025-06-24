<script setup lang="ts">
import BlahajButton from '@/components/buttons/BlahajButton.vue'
import { colorsService } from 'blahaj-library'

defineProps({
  color: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: '#E2EDFF'
  },
  font: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: '#ffffff'
  },
  donatorName: {
    type: String,
    required: true
  },
  donationAmount: {
    type: Number,
    required: true
  },
  donationTier: {
    type: String,
    default: ''
  },
  donatorImage: {
    type: String,
    required: true
  },
  donationCurrency: {
    type: String,
    default: '&euro;'
  }
})
</script>

<template>
  <div class="DonatorCard">
    <img :src="donatorImage" :alt="donatorName" />
    <div class="DonatorTitle">
      <h3>{{ donatorName }}</h3>
      <h4 v-if="donationTier !== ''">{{ donationTier }}</h4>
    </div>
    <BlahajButton background="var(--background)" hover="var(--background)">
      <p>{{ donationAmount + ' ' + donationCurrency }}</p>
    </BlahajButton>
  </div>
</template>

<style lang="sass">

.DonatorCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  justify-content: start
  align-items: center
  transition: var(--trans)
  color: color-mix(in srgb, v-bind(font) 60%, v-bind(color) 40%)
  gap: 16px
  background: color-mix(in srgb, v-bind(color), transparent 75%)
  backdrop-filter: blur(12px)
  border-color: color-mix(in srgb, v-bind(color), transparent 58%)
  border-radius: 34px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
  box-shadow: inset -1px 1px 2px rgba(255,255,255,0.200), -1px 1px 2px rgba(0,0,0,0.250)
  border-radius: 34px
  overflow: hidden
  position: relative
  
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: linear-gradient(color-mix(in srgb, v-bind(color), transparent 90%) 0%,rgba(0,125,255,0.000) 100%)
    border-radius: 34px
    pointer-events: none

  *
    margin: 0

  > img
    object-fit: cover
    border-radius: var(--radius-inf)

  > .BlahajButton
    cursor: default !important

    &:active
      background: var(--background) !important

  > .DonatorTitle
    display: flex
    flex-direction: column
    width: 100%

    > *
      max-width: 100%
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis

  @media (min-width: 1201px)
    flex-direction: column
    padding: 24px
    width: 128px
    flex: 0 0 128px

    > img
      height: 64px
      width: 64px

    > .DonatorTitle
      justify-content: center
      align-items: center

      > *
        text-align: center

  @media (max-width: 1200px)
    padding: 24px 16px
    flex-direction: row

    > img
      height: 48px
      width: 48px

    > .DonatorTitle
      flex: 1 1
      justify-content: start
      align-items: start
      min-width: 0

      > *
        text-align: left
</style>

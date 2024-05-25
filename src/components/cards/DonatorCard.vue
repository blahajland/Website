<script setup>
import BlahajButton from '@/library/vue/BlahajButton.vue'

defineProps({
  color: {
    default: '#E2EDFF'
  },
  font: {
    default: '#101010'
  },
  donatorName: {
    required: true
  },
  donationAmount: {
    required: true
  },
  donationTier: {
    default: ''
  },
  donatorImage: {
    required: true
  },
  donationCurrency: {
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
    <BlahajButton color="var(--background)" hover="var(--background)">
      <p v-html="donationAmount + ' ' + donationCurrency"></p>
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
  color: v-bind(font)
  gap: 16px

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

<script setup lang="ts">
import { ref } from 'vue'
import BlahajButton from './buttons/BlahajButton.vue'

const randomTitle = ref('')
const randomContent = ref('')
const callToAction = ref<{ title: string; url: string } | null>(null)

interface CallToAction {
  title: string
  url: string
}

interface NewsItem {
  title: string
  content: string
  callToAction?: CallToAction
}

interface News {
  news: Array<NewsItem>
}

try {
  const response = await fetch('/api/blahaj/json/news.json')
  const fetchedData = await response.json()
  if ('news' in fetchedData) {
    let newsItems = (fetchedData as News).news
    if (newsItems.length > 0) {
      const randomItem = newsItems[Math.floor(Math.random() * newsItems.length)]
      randomTitle.value = randomItem.title
      randomContent.value = randomItem.content
      if (randomItem.callToAction) {
        callToAction.value = randomItem.callToAction
      }
    }
  }
} catch (error) {
  console.error('Failed to fetch news data:', error)
}

const handleCallToActionClick = (url: string) => {
  window.location.href = url
}
</script>

<template>
  <div v-if="randomTitle || randomContent" class="AnnouncementBar">
    <p>
      <strong>{{ randomTitle }}</strong>
      <span v-if="randomTitle && randomContent">: </span>
      {{ randomContent }}
    </p>
    <div v-if="callToAction" class="cta-container">
      <BlahajButton
        background="var(--surface0)"
        hover="var(--surface1)"
        @click="handleCallToActionClick(callToAction!.url)"
      >
        {{ callToAction.title }}
      </BlahajButton>
    </div>
  </div>
</template>

<style lang="sass">
@keyframes breathe
  0%
      background: color-mix(in srgb, var(--background), transparent 58%)
      backdrop-filter: blur(12px)
  50%
    background-color: rgba(201, 44, 62, 0.3)
  100%
      background: color-mix(in srgb, var(--background), transparent 58%)
      backdrop-filter: blur(12px)

.AnnouncementBar
  width: 100%
  padding: 12px 24px
  animation: breathe 10s ease-in-out infinite
  position: relative
  z-index: 1000
  display: flex
  justify-content: center
  align-items: center
  gap: 16px


  > p
    margin: 0
    font-size: 16px
    color: var(--surface3)

    strong
      font-weight: bold

@media (max-width: 768px)
  .AnnouncementBar
    padding: 8px 16px
    flex-direction: column
    gap: 8px
    
    > p
      font-size: 13px

.cta-container
  display: flex
  justify-content: spread

  .BlahajButton
    border: 3px solid var(--surface1)
    background: var(--surface1) !important
    white-space: nowrap
</style>

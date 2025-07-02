<script setup lang="ts">
import { ref } from 'vue'
import BlahajButton from './buttons/BlahajButton.vue'
import '@/assets/style/main.sass'
import '@/assets/style/colors.css'
import '@/assets/style/base.sass'

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
      background: rgba(201, 44, 62, 0.09)
      backdrop-filter: blur(12px)
  50%
    background-color: rgba(201, 44, 62, 0.3)
  100%
      background: rgba(201, 44, 62, 0.09)
      backdrop-filter: blur(12px)



.AnnouncementBar
  display: none
  width: 100%
  max-width: 800px
  padding: 8px 16px
  animation: breathe 10s ease-in-out infinite
  backdrop-filter: blur(12px)
  border-radius: var(--radius-inf)
  position: relative
  display: flex
  justify-content: center
  align-items: center
  gap: 12px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05)
  box-shadow: inset -1px 1px 2px rgba(255,255,255,0.08), -1px 1px 2px rgba(0,0,0,0.250)


  > p
    margin: 0
    font-size: 14px
    color: #ffffff
    text-align: center

    strong
      font-weight: bold

@media (max-width: 768px)
  .AnnouncementBar
    display: none
    padding: 6px 12px
    flex-direction: column
    gap: 6px
    
    > p
      font-size: 14px

.cta-container
  display: flex
  justify-content: center

  .BlahajButton
    white-space: nowrap
    font-weight: bold
    font-size: 14px
    padding: 6px 12px
</style>

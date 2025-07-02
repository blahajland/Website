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
  display: flex
  width: 100%
  max-width: 800px
  padding: 8px 16px
  animation: breathe 10s ease-in-out infinite
  backdrop-filter: blur(12px)
  border-radius: var(--radius-med)
  background-blend-mode: color-burn
  position: relative
  justify-content: center
  align-items: center
  gap: 12px
  border: 2px dashed #ff0000


  > p
    margin: 0
    font-size: 1.1rem
    color: var(--text)
    text-align: center

    strong
      font-weight: 900

@media (max-width: 768px)
  .AnnouncementBar
    padding: 10px 12px
    flex-direction: column
    gap: 6px
    
    > p
      font-size: 1rem


.cta-container
  display: flex
  justify-content: center
  transition: var(--trans)

  .BlahajButton
    white-space: nowrap
    padding: 6px 12px
    font-size: 1rem
    font-weight: 900
    transition: var(--trans)

</style>

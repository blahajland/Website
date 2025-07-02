<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(true)
let lastScrollY = ref(0)
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY.value || currentScrollY < 200) {
        isVisible.value = true
      } 
      // Hide navbar when scrolling down past 100px
      else if (currentScrollY > 50 && currentScrollY > lastScrollY.value) {
        isVisible.value = false
      }
      
      lastScrollY.value = currentScrollY
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="NavbarFrame" :class="{ 'navbar-hidden': !isVisible }">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.NavbarFrame
  z-index: 5
  position: fixed
  top: 0
  left: 0
  right: 0
  display: flex
  flex-direction: column
  justify-content: stretch
  align-items: stretch
  gap: 0
  background: color-mix(in srgb, var(--background), transparent 58%)
  backdrop-filter: blur(20px)
  border-radius: 0 0 24px 24px
  transform: translateY(0)
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
  box-shadow: inset -1px 1px 2px rgba(255,255,255,0.200), -1px 1px 2px rgba(0,0,0,0.250)

  &::after
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-image: url('/src/assets/filters/noise.svg')
    background-repeat: repeat
    opacity: 0.15
    mix-blend-mode: color-burn
    pointer-events: none
    border-radius: 24px 24px 0 0



  &.navbar-hidden
    transform: translateY(-100%)

@media (max-width: 1200px)
  .NavbarFrame
    top: auto
    bottom: 0
    border-radius: 24px 24px 0 0
    transform: translateY(0)

    &.navbar-hidden
      transform: translateY(100%)

</style>

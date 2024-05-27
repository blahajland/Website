<script setup lang="ts">
import CustomGap from '@/library/vue/CustomGap.vue'

defineProps({
  last: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <slot name="title"></slot>
  <CustomGap gap="16px" />
  <slot></slot>
  <CustomGap v-if="!last" gap="72px" />
</template>

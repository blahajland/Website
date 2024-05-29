<script setup lang="ts">
import CustomGap from '@/library/vue/CustomGap.vue'

defineProps({
  last: {
    type: Boolean,
    default: false
  }
})
</script>

<template lang="pug">
slot(name="title")
CustomGap(gap="16px")
slot
CustomGap(v-if="!last", gap="72px")
</template>

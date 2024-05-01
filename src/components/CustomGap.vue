<script setup>
defineProps({
  gap: {
    required: true
  }
})
</script>

<template>
  <div class="CustomGap"></div>
</template>

<style lang="sass">
.CustomGap
  display: flex
  height: v-bind(gap)
</style>

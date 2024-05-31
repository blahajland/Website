<script setup lang="ts">
import RulesList from '@/fetchables/RulesList.vue'
import TosList from '@/fetchables/TosList.vue'
import LoadingState from '@/components/LoadingState.vue'
import PageContainer from '@/components/roots/PageContainer.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import { goToTop } from '@/library/ts/common-tools'

goToTop()
</script>

<template lang="pug">
PageContainer
  SpinningBlahaj
  Suspense
    RulesList
    template(#fallback)
      LoadingState
  Suspense
    TosList
    template(#fallback)
      LoadingState
</template>

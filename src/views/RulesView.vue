<script setup lang="ts">
import RulesList from '@/fetchables/RulesList.vue'
import TosList from '@/fetchables/TosList.vue'
import LoadingState from '@/components/LoadingState.vue'
import PageFrame from '@/components/frames/PageFrame.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import { goToTop } from 'blahaj-library'

goToTop()
</script>

<template>
  <PageFrame>
    <SpinningBlahaj />
    <Suspense>
      <RulesList />
      <template #fallback>
        <LoadingState />
      </template>
    </Suspense>
    <Suspense>
      <TosList />
      <template #fallback>
        <LoadingState />
      </template>
    </Suspense>
  </PageFrame>
</template>

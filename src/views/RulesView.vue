<script setup>
import { changeLoc } from '@/library/js/linkTools.js'
import SpinningBlahaj from '@/library/vue/SpinningBlahaj.vue'
import RulesList from '@/fetchables/RulesList.vue'
import TosList from '@/fetchables/TosList.vue'
import LoadingState from '@/components/LoadingState.vue'
import PageContainer from '@/components/containers/PageContainer.vue'

changeLoc('#', false)
</script>

<template>
  <PageContainer>
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
  </PageContainer>
</template>

<script setup lang="ts">
import { changeLoc } from '@/library/ts/common-tools'
import RulesList from '@/fetchables/RulesList.vue'
import TosList from '@/fetchables/TosList.vue'
import LoadingState from '@/components/LoadingState.vue'
import PageContainer from '@/components/roots/PageContainer.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'

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

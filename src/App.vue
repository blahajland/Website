<script setup>
import TopBar from '@/components/static/TopBar.vue'
import TabGroup from '@/components/static/TabGroup.vue'
import NotificationBanner from '@/components/NotificationBanner.vue'
import CustomButton from '@/components/CustomButton.vue'
</script>

<template>
  <NotificationBanner>
    <p>blahaj.land is soon introducing a <b>paid tier</b> to bring more features/apps for you.</p>
    <CustomButton>
      <p>See the announcement</p>
    </CustomButton>
  </NotificationBanner>
  <TopBar />
  <TabGroup />
  <RouterView>

  </RouterView>
</template>

<style>

</style>

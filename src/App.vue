<script setup lang="ts">
import TopBar from '@/components/containers/TopBar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import TabGroup from '@/components/containers/TabGroup.vue'
import HomeTabs from '@/views/tabs/HomeTabs.vue'
import RulesTabs from '@/views/tabs/RulesTabs.vue'
import NavbarFrame from '@/components/frames/NavbarFrame.vue'

import { themeService } from 'blahaj-library'
import FooterBundle from '@/bundles/FooterBundle.vue'
import NavbarBundle from '@/bundles/NavbarBundle.vue'

themeService.setThemeFromCookie()
</script>

<template>
  <NavbarFrame>
    <TopBar>
      <NavbarBundle />
    </TopBar>
    <TabGroup>
      <HomeTabs v-if="$route.name === 'home'" />
      <RulesTabs v-if="$route.name === 'rules'" />
    </TabGroup>
  </NavbarFrame>
  <RouterView></RouterView>
  <CustomFooter>
    <FooterBundle />
  </CustomFooter>
</template>

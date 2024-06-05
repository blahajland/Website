<script setup lang="ts">
import BlahajButton from '@/components/buttons/BlahajButton.vue'
import TopBar from '@/components/containers/TopBar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import links from '@/assets/json/links.json'
import TabGroup from '@/components/containers/TabGroup.vue'
import HomeTabs from '@/views/tabs/HomeTabs.vue'
import RulesTabs from '@/views/tabs/RulesTabs.vue'
import NavbarFrame from '@/components/frames/NavbarFrame.vue'

import { assets, changeLoc, themeService } from 'blahaj-library'

themeService.setThemeFromCookie()
</script>

<template>
  <NavbarFrame>
    <TopBar>
      <BlahajButton
        background="var(--background)"
        hover="var(--surface1)"
        @click="changeLoc(links.donate)"
      >
        <img alt="Donate" :src="assets.images.icons.get('donate')" />
        <p class="displayOnDesktop">Donate</p>
      </BlahajButton>
      <BlahajButton
        background="var(--background)"
        hover="var(--surface1)"
        @click="changeLoc(links.signup)"
      >
        <img alt="Donate" :src="assets.images.icons.get('signup')" />
        <p class="displayOnDesktop">Sign up</p>
      </BlahajButton>
      <BlahajButton
        background="var(--background)"
        hover="var(--surface1)"
        @click="changeLoc(links.login)"
      >
        <img alt="Donate" :src="assets.images.icons.get('login')" />
        <p class="displayOnDesktop">Log in</p>
      </BlahajButton>
      <BlahajButton
        background="var(--background)"
        hover="var(--surface1)"
        @click="themeService.switchTheme()"
      >
        <img alt="Donate" :src="assets.images.icons.get('theme')" />
        <p class="displayOnDesktop">Theme</p>
      </BlahajButton>
    </TopBar>
    <TabGroup>
      <HomeTabs v-if="$route.name === 'home'" />
      <RulesTabs v-if="$route.name === 'rules'" />
    </TabGroup>
  </NavbarFrame>
  <RouterView></RouterView>
  <CustomFooter>
    <p>&copy; <b>eryn</b> Some rights reserved</p>
    <p>Website by <b>Blahaj Team</b></p>
    <RouterLink to="/credits"> Credits </RouterLink>
    <RouterLink to="/rules"> Rules & TOS </RouterLink>
    <a :href="links.status"> Apps status </a>
  </CustomFooter>
</template>

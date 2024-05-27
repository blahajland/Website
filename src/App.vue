<script setup lang="ts">
import TopBar from '@/components/containers/TopBar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import { setThemeFromCookie, switchTheme } from '@/library/ts/theme-tools'
import { changeLoc } from '@/library/ts/common-tools'
import BlahajButton from '@/library/vue/BlahajButton.vue'

import links from '@/assets/json/links.json'
import TabGroup from '@/components/containers/TabGroup.vue'
import HomeTabs from '@/views/tabs/HomeTabs.vue'
import RulesTabs from '@/views/tabs/RulesTabs.vue'
import NavBar from '@/components/roots/NavBar.vue'

setThemeFromCookie()
</script>

<template>
  <NavBar>
    <TopBar>
      <BlahajButton
        @click="changeLoc(links.donate)"
        background="var(--background)"
        hover="var(--surface1)"
      >
        <img alt="Donate" src="https://blahaj.land/static/images/icons/donate.png" />
        <p class="displayOnDesktop">Donate</p>
      </BlahajButton>
      <BlahajButton
        background="var(--background)"
        hover="var(--surface1)"
        @click="changeLoc(links.signup)"
      >
        <img alt="Sign up" src="https://blahaj.land/static/images/icons/signup.png" />
        <p class="displayOnDesktop">Sign up</p>
      </BlahajButton>
      <BlahajButton
        @click="changeLoc(links.login)"
        background="var(--background)"
        hover="var(--surface1)"
      >
        <img alt="Log in" src="https://blahaj.land/static/images/icons/login.png" />
        <p class="displayOnDesktop">Log in</p>
      </BlahajButton>
      <BlahajButton @click="switchTheme()" background="var(--background)" hover="var(--surface1)">
        <img alt="Theme" src="https://blahaj.land/static/images/icons/theme.png" />
        <p class="displayOnDesktop">Theme</p>
      </BlahajButton>
    </TopBar>
    <TabGroup>
      <HomeTabs v-if="$route.name === 'home'" />
      <RulesTabs v-if="$route.name === 'rules'" />
    </TabGroup>
  </NavBar>
  <RouterView></RouterView>
  <CustomFooter>
    <p>&copy; <b>eryn</b> Some rights reserved</p>
    <p>Website by <b>Blahaj Team</b></p>
    <RouterLink to="/credits">Credits</RouterLink>
    <RouterLink to="/rules">Rules & TOS</RouterLink>
    <a :href="links.status">Apps status</a>
  </CustomFooter>
</template>

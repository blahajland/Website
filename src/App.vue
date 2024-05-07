<script setup>
import TopBar from '@/components/containers/TopBar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import { setThemeFromCookie, switchTheme } from '@/library/js/themeTools.js'
import { changeLoc } from '@/library/js/linkTools.js'
import BlahajButton from '@/library/vue/BlahajButton.vue'

import links from '@/assets/json/links.json'
import TabGroup from '@/components/containers/TabGroup.vue'
import HomeTabs from '@/views/tabs/HomeTabs.vue'
import RulesTabs from '@/views/tabs/RulesTabs.vue'
import NavBar from '@/components/containers/NavBar.vue'

setThemeFromCookie()
</script>

<template>
  <NavBar>
    <TopBar>
      <BlahajButton @click="changeLoc(links.donate)">
        <img alt="Donate" src="/donate.png" />
        <p>Donate</p>
      </BlahajButton>
      <BlahajButton>
        <img alt="Join" src="/join.png" />
        <p>Sign up</p>
      </BlahajButton>
      <BlahajButton @click="changeLoc(links.open)">
        <img alt="Open" src="/open.png" />
        <p>Log in</p>
      </BlahajButton>
      <BlahajButton @click="switchTheme()">
        <img alt="Theme" src="/theme.png" />
        <p>Theme</p>
      </BlahajButton>
    </TopBar>
    <TabGroup>
      <HomeTabs v-if="$route.name === 'home'" />
      <RulesTabs v-if="$route.name === 'rules'" />
      <!-- Is there a better way to do it ? -->
    </TabGroup>
  </NavBar>
  <RouterView></RouterView>
  <CustomFooter>
    <BlahajButton class="displayOnMobile" color="var(--surface1)" @click="switchTheme">
      <img alt="Theme" src="/theme.png" />
      <p>Theme</p>
    </BlahajButton>
    <p>&copy; <a :href="links.eryn">eryn</a> Some rights reserved</p>
    <p>Made by <a :href="links.blahaj">Blahaj Team</a></p>
    <RouterLink to="/rules">Rules & TOS</RouterLink>
  </CustomFooter>
</template>

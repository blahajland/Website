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
import NavBar from '@/components/roots/NavBar.vue'

setThemeFromCookie()
</script>

<template>
  <NavBar>
    <TopBar>
      <BlahajButton @click="changeLoc(links.donate)" color="var(--background)" hover="var(--surface1)">
        <img alt="Donate" src="https://blahaj.land/static/images/icons/donate.png" />
        <p>Donate</p>
      </BlahajButton>
      <BlahajButton color="var(--background)" hover="var(--surface1)">
        <img alt="Join" src="https://blahaj.land/static/images/icons/join.png" />
        <p>Sign up</p>
      </BlahajButton>
      <BlahajButton @click="changeLoc(links.open)" color="var(--background)" hover="var(--surface1)">
        <img alt="Open" src="https://blahaj.land/static/images/icons/open.png" />
        <p>Log in</p>
      </BlahajButton>
      <BlahajButton @click="switchTheme()" color="var(--background)" hover="var(--surface1)">
        <img alt="Theme" src="https://blahaj.land/static/images/icons/theme.png" />
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
    <BlahajButton class="displayOnMobile" @click="switchTheme">
      <img alt="Theme" src="https://blahaj.land/static/images/icons/theme.png" />
      <p>Theme</p>
    </BlahajButton>
    <p>&copy; <a :href="links.eryn">eryn</a> Some rights reserved</p>
    <p>Made by <a :href="links.blahaj">Blahaj Team</a></p>
    <RouterLink to="/rules">Rules & TOS</RouterLink>
  </CustomFooter>
</template>

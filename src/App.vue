<script setup>
import TopBar from '@/components/containers/TopBar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import { setThemeFromCookie, switchTheme } from '@/assets/js/themeTools.js'
import { changeLoc } from '@/assets/js/linkTools.js'
import BlahajButton from '@/components/library/BlahajButton.vue'

import links from '@/assets/json/links.json'

setThemeFromCookie()
</script>

<template>
  <TopBar>
    <BlahajButton @click="changeLoc(links.donate)">
      <img src="/icons/donate.png" alt="Donate" />
      <p>Donate</p>
    </BlahajButton>
    <BlahajButton>
      <img src="/icons/join.png" alt="Join" />
      <p>Sign up</p>
    </BlahajButton>
    <BlahajButton @click="changeLoc(links.open)">
      <img src="/icons/open.png" alt="Open" />
      <p>Log in</p>
    </BlahajButton>
    <BlahajButton @click="switchTheme()">
      <img src="/icons/theme.png" alt="Theme" />
      <p>Theme</p>
    </BlahajButton>
  </TopBar>
  <RouterView></RouterView>
  <CustomFooter>
    <BlahajButton class="displayOnMobile" color="var(--hover)" @click="switchTheme">
      <img src="/icons/theme.png" alt="Theme" />
      <p>Theme</p>
    </BlahajButton>
    <p>&copy; <a :href="links.eryn">eryn</a> Some rights reserved</p>
    <p>Made by <a :href="links.nerd">Nerd</a></p>
    <RouterLink to="/rules">Rules & TOS</RouterLink>
  </CustomFooter>
</template>

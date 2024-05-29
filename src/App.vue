<script setup lang="ts">
import TopBar from '@/components/containers/TopBar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import links from '@/assets/json/links.json'
import TabGroup from '@/components/containers/TabGroup.vue'
import HomeTabs from '@/views/tabs/HomeTabs.vue'
import RulesTabs from '@/views/tabs/RulesTabs.vue'
import NavBar from '@/components/roots/NavBar.vue'
import BlahajButton from '@/library/vue/BlahajButton.vue'

import { setThemeFromCookie, switchTheme } from '@/library/ts/theme-tools'
import { changeLoc } from '@/library/ts/common-tools'
import { assets } from '@/library/ts/static-tools'

setThemeFromCookie()
</script>

<template lang="pug">
NavBar
    TopBar
      BlahajButton(
        background="var(--background)",
        hover="var(--surface1)",
        @click="changeLoc(links.donate)")
        img(alt="Donate", :src="assets.images.icons.get('donate')")
        p.displayOnDesktop Donate
      BlahajButton(
        background="var(--background)",
        hover="var(--surface1)",
        @click="changeLoc(links.signup)")
        img(alt="Sign up", :src="assets.images.icons.get('signup')")
        p.displayOnDesktop Sign up
      BlahajButton(
        background="var(--background)",
        hover="var(--surface1)",
        @click="changeLoc(links.login)")
        img(alt="Log in", :src="assets.images.icons.get('login')")
        p.displayOnDesktop Log in
      BlahajButton(
        background="var(--background)",
        hover="var(--surface1)",
        @click="switchTheme()")
        img(alt="Theme", :src="assets.images.icons.get('theme')")
        p.displayOnDesktop Theme
    TabGroup
      HomeTabs(v-if="$route.name === 'home'")
      RulesTabs(v-if="$route.name === 'rules'")
RouterView
CustomFooter
  p &copy; #[b eryn] Some rights reserved
  p Website by #[b Blahaj Team]
  RouterLink(to="/credits") Credits
  RouterLink(to="/rules") Rules & TOS
  a(:href="links.status") Apps status
</template>

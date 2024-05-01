<script setup>
import TopBar from '@/components/containers/TopBar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import { setThemeFromCookie, switchTheme } from '@/assets/js/themeTools.js'
import { changeLoc } from '@/assets/js/linkTools.js'
import BlahajButton from '@/components/inputs/BlahajButton.vue'

setThemeFromCookie()
</script>

<template>
  <TopBar>
    <BlahajButton @click="changeLoc('https://ko-fi.com/eryncloud/')">
      <img src="/icons/donate.png" alt="Donate" />
      <p>Donate</p>
    </BlahajButton>
    <BlahajButton @click="$router.push('/signup')">
      <img src="/icons/join.png" alt="Join" />
      <p>Sign up</p>
    </BlahajButton>
    <BlahajButton @click="changeLoc('https://blahaj.land/yunohost/sso/')">
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
    <p>&copy; <a href="https://blog.blahaj.land/">eryn</a> Some rights reserved</p>
    <p>Made by <a href="https://github.com/imalonelynerd">Nerd</a></p>
    <RouterLink to="/rules">Rules & TOS</RouterLink>
  </CustomFooter>
</template>

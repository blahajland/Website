<script setup>
import TopBar from '@/components/containers/TopBar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import { setThemeFromCookie, switchTheme } from '@/assets/js/themeTools.js'
import { changeLoc } from '@/assets/js/linkTools.js'
import CustomButton from '@/components/CustomButton.vue'

setThemeFromCookie()
</script>

<template>
  <TopBar>
    <CustomButton @click="changeLoc('https://ko-fi.com/eryncloud/')">
      <img src="/icons/donate.png" alt="Donate" />
      <p>Donate</p>
    </CustomButton>
    <CustomButton @click="changeLoc('https://discord.gg/23ScBhN7xx')">
      <img src="/icons/join.png" alt="Join" />
      <p>Sign up</p>
    </CustomButton>
    <CustomButton @click="changeLoc('https://blahaj.land/yunohost/sso/')">
      <img src="/icons/open.png" alt="Open" />
      <p>Log in</p>
    </CustomButton>
    <CustomButton @click="switchTheme()">
      <img src="/icons/theme.png" alt="Theme" />
      <p>Theme</p>
    </CustomButton>
  </TopBar>
  <RouterView></RouterView>
  <CustomFooter>
    <CustomButton class="displayOnMobile" color="var(--hover)" @click="switchTheme">
      <img src="/icons/theme.png" alt="Theme" />
      <p>Theme</p>
    </CustomButton>
    <p>&copy; <a href="https://blog.blahaj.land/">eryn</a> Some rights reserved</p>
    <p>Made by <a href="https://github.com/imalonelynerd">Nerd</a></p>
    <RouterLink to="/rules">Rules & TOS</RouterLink>
  </CustomFooter>
</template>

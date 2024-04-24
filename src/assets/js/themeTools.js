import { getCookie, setCookie } from './cookieTools.js'

export function setThemeFromCookie() {
  let cookie = getCookie('theme')
  cookie === 'dark' ? setTheme(cookie) : setTheme('light')
}

export function setTheme(theme) {
  document.querySelector('html').dataset.theme = theme
  setCookie('theme', theme)
}

export function switchTheme() {
  let cookie = document.querySelector('html').dataset.theme
  cookie === 'dark' ? setTheme('light') : setTheme('dark')
}

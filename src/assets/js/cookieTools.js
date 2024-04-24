/**
 *  Creates a new cookie with the $cname key and $cvalue value.
 * @param cname
 * @param cvalue
 */
export function setCookie(cname, cvalue) {
  if (getCookie(cname) !== '') {
    deleteCookie(cname)
  }
  document.cookie = `${cname}=${cvalue}`
}

/**
 * Returns the value associated with the cookie tagged as $cname.
 * An empty string is returned if the cookie doesn't exist.
 * @param cname
 * @returns {string}
 */
export function getCookie(cname) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

/**
 * Deletes the cookie tagged as $cname.
 * Doesn't have any effects if the cookie doesn't exist.
 * @param cname
 */
export function deleteCookie(cname) {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
}

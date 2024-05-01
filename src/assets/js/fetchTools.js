export async function fetchDataAsJson(url, tag = undefined) {
  let res
  const response = await fetch(url)
  if (!response.ok) {
    return []
  }
  let responseAsJson = await response.json()
  if (tag && Object.prototype.hasOwnProperty.call(responseAsJson, tag)) {
    res = responseAsJson[tag]
  } else {
    res = responseAsJson
  }
  return res
}

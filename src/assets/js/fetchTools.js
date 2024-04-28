export async function fetchDataAsJson(url) {
  const res = await fetch(url)
  if (!res.ok) {
    console.log(`Failed to fetch data from ${url}`)
    return null
  }
  return res.json()
}

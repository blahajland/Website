<template>
  <div class="LoadingState">
    <img alt="Loading..." src="https://blahaj.land/static/images/Loading.png" />
    <div>
      <h1>Loading...</h1>
      <p>It won't be long we promise :3</p>
    </div>
  </div>
</template>

<style lang="sass">
.LoadingState
  width: 100%
  padding: 16px 0
  display: flex
  justify-content: center
  align-items: center

  @media (min-width: 1201px)
    flex-direction: row
    gap: 32px

  @media (max-width: 1200px)
    flex-direction: column
    gap: 8px

  > div
    display: flex
    flex-direction: column
    justify-content: start
    align-items: start

  *
    margin: 0

  > img
    height: 48px
</style>

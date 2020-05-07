<template>
  <div>
    <h1>uh-oh!</h1>
    <p>
      Looks lile you are experiening network error , kindly click back button
      and try again later
    </p>
    <router-link :to="{ name: 'event-list' }"></router-link>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

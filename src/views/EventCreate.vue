<template>
  <div>
    <h1>Event Create Page {{ $store.state.user.name }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    }
  }
}
</script>

<style></style>

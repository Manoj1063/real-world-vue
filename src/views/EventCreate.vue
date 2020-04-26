<template>
  <div>
    <h1>Event by "{{ user.name }}"</h1>
    <p>This event is created by the ID {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <p>These are done todos {{ doneTodosList }}</p>
    <p>Getting event by passing id {{ getEventByID(1) }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['user', 'categories']),
    ...mapGetters(['catLength', 'doneTodosList', 'getEventByID'])
  }
}
</script>

<style></style>

<template>
  <div>
    <nav-bar />
    <list-component />

  </div>
</template>

<script>
import ListComponent from '../components/ListComponent.vue'
import NavBar from '../components/NavBar.vue'
export default {
  components: { NavBar, ListComponent },
    name: "list"
}
</script>

<style>

</style>
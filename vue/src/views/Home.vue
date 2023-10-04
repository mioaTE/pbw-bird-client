<template>
  <div class="home">
    <nav-bar />
    <search />
  </div>
</template>

<script>
import Search from '../components/Search.vue';
import NavBar from '../components/NavBar.vue';
export default {
  name: "home",
  components: {
    Search,
    NavBar
  }
};
</script>

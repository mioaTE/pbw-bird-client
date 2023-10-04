<template>
    <div class = "profile">
        <nav-bar />
        
        <profile-component />
    </div>
</template>
  

<script>
import NavBar from '../components/NavBar.vue';
import ProfileComponent from '../components/ProfileComponent.vue'
export default {
    name: "profile",
    components: {
        ProfileComponent,
        NavBar
    }
};
</script>

<style>

</style>
<template>
  <div>
    <h2>Welcome,  {{ user.username }}</h2>
    <h2>User ID: {{ user.id }}</h2>
    <button type="editButton" v-on:click="updateEditProfile">Edit Profile</button>

    <section id="profile" v-show="this.editProfile == false">
      <h4>My favorite bird: {{ profile.favoriteBird }}</h4>
      <h4>Most common bird at my feeder: {{ profile.mostCommonBird }} </h4>
      <h4>My skill level: {{ profile.skillLevel }}</h4>
      <h4>My zip code: {{ profile.zipCode }}</h4>
    </section>

    <section id="editProfile" v-show="this.editProfile != false">
      <form @submit.prevent="submitForm">
        <label for="favoriteBird">What is your favorite bird?</label>
        <input id="favoriteBird" name="favoriteBird" type="text"  v-model="formData.favoriteBird"/>

        <label for="mostCommonBird">Tell us what bird you most commonly spot.</label>
        <input id="mostCommonBird" name="mostCommonBird" type="text"  v-model="formData.mostCommonBird"/>

        <label for="zipCode">Please enter your zip code:</label>
        <input id="zipCode" name="zipCode" type="number"  v-model="formData.zipCode"/>

        <label for="skillLevel">What is your skill level?</label>
  
        <select id="skillLevel" name="skillLevel" v-model="selectedSkillLevel">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    
    </section>
      
  </div>
</template>

<script>
import BirdService from '../services/BirdService';
export default {
  data() {
    return {
      formData: {
        profileId:'',
        username:'',
        profileImg:'',
        zipCode:'',
        favoriteBird:'',
        skillLevel:'',
        mostCommonBird:'',
      },
      profile: [],
      editProfile: false,
      selectedSkillLevel:'',
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    BirdService.getProfile().then(response => {
    this.profile = response.data;
    
    this.formData.profileId = this.profile.profileId;
    this.formData.username = this.profile.username;
    this.formData.favoriteBird = this.profile.favoriteBird;
    this.formData.mostCommonBird = this.profile.mostCommonBird;
    this.formData.zipCode = this.profile.zipCode;
    this.formData.skillLevel = this.profile.skillLevel;
  });
  },
  methods: {
      submitForm(){
           BirdService.editProfile(this.formData).then(response => {
            this.profile = response.data;
            this.editProfile = false;
            window.location.reload();
          });
      },
      updateEditProfile(){
        this.editProfile = true;
      }
  },
  
};
</script>

<style>

</style>
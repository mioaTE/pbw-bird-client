<template>
  <div>
    <h2>SEARCH RECENT SIGHTINGS</h2>
    <div id="search">
        <form @submit.prevent="submitForm">
            <label for="zipCode">Zip Code:</label>
            <input type="text" id="zipCode" v-model="zipCode" />
            <button type="submit">Submit</button>
        </form>
       
            <div v-for= "bird in birds" v-bind:key="bird.birdId">
       <!-- <router-link id="post" v-bind:to="{name: 'post', params: {id: post.postId} }"> -->
        <iframe
          width="350"
          height="350"
          v-bind:src="bird.imgUrl + '/embed/400'"
          frameborder="0"
          allowfullscreen
          scrolling="no"
          style="width: 320px"
        ></iframe>
         <!-- <img class="image" v-bind:src="bird.imgUrl + '/embed/800'" /> -->
       <!-- </router-link> -->
     
    </div>
    </div>
  </div>
</template>

<script>
import BirdService from '../services/BirdService';
export default {
    data(){
        return {
            zipCode: 0,
            birds: []
        }
    },
    methods: {
        submitForm(){
            BirdService.getBirdsByZipcode(this.zipCode).then(response => this.birds = response.data);
        }
    }
}
</script>

<style>

</style>
<template>
  <div id="search">
    <h2 id="searchRecent">SEARCH RECENT SIGHTINGS</h2>
    <div id="form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <div class="input-group">
              <label for="zipCode">Zip Code:</label>
              <input type="text" id="zipCode" v-model="zipCode" />
            </div>
          </div>

          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
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
body {
  background-color: lightgray;
}

#searchRecent {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
 display: flex;
 justify-content: center;
}

#form {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Vertically stack the form groups */
  
}




.form-group {
  margin-bottom: 10px;
}

.input-group {
  display: flex;
  align-items: center; /* Vertically center elements within the input group */
}

label {
  margin-right: 10px;
}

input[type="text"] {
  /*flex: 1;  Allow the input field to expand and fill available space */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

/* Add more styling as needed for other elements */
</style>
<template>
    <div>
    <form @submit.prevent="addNewSightingForm">
      <h3> Add new Sighting</h3>
              <label for="sightingType">Sighting type: </label>
  
              <label for="sightingType">Bird</label>
              <input type="checkbox" id="sightingType" v-model="sightingType" />
  
              <label for="sightingType">Nest/egg</label>
              <input type="checkbox" id="sightingType" v-model="sightingType" />
  
              <label for="sightingType">Feather</label>
              <input type="checkbox" id="sightingType" v-model="sightingType" />
  
              <label for="birdType">Bird type:</label>
              <input type="text" id="birdType" v-model="birdType" />
  
              <label for="birdType">Unknown</label>
              <input type="checkbox" id="birdType" v-model="birdType" />
  
  
              <label for="zipCode">Zip Code:</label>
              <input type="text" id="zipCode" v-model="zipCode" />
  
              <label for="image">Image:</label>
              <input type="file" id="image" ref="imageInput" accept="image/*" @change="handleImageChange" />
              
              <button type="submit">Submit</button>
          </form>
    </div>
  </template>
  
  <script>
  export default {
    
  
  }
  </script>
  
  <style>
  
  </style>
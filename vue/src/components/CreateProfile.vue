<template>
  <div>
    <p>CREATE COMPONENT TEST</p>
    <form>
        <label for="zipCode"> Zip Code: </label>
        <input type="text" id="zipCode" placeholder="Zip Code" 
        />
        <label for="favoriteBird"> Favorite Bird: </label>
        <input type="text" id="favoriteBird" placeholder="Favorite Bird" 
        />
        <label for="skillLevel"> Skill Level: </label>
        <input type="text" id="skillLevel" placeholder="Skill Level" 
        />
        <label for="mostCommonBird"> Most Common Bird: </label>
        <input type="text" id="mostCommonBird" placeholder="Most Common Bird" 
        />

    </form>
  </div>
</template>

<script>
export default {
    profile: {
        zipCode: "",
        favoriteBird: "",
        skillLevel: "",
        mostCommonBird: "",
    }
}
</script>

<style>

</style>
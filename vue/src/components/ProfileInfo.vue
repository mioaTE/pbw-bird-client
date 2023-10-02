<template>
  <div>
    <p>INFO COMPONENT TESTING</p>
    <p>{{profile.username}}</p>
    <!--<p>{{profile.profileImg}}</p>
    <p>{{profile.zipCode}}</p>
    <p>{{profile.favoriteBird}}</p>
    <p>{{profile.skillLevel}}</p>
    <p>{{profile.mostCommonBird}}</p> -->
  </div>
</template>

<script>
import ProfileService from '../services/ProfileService'
export default {

    data() {
        return {
            profile: []
        }
    },
    /*methods: {
        profileStoreMethod() {
            this.$store.commit("SET_PROFILE", this.profile)
        },
    },*/
    created() {
        ProfileService.getProfile().then(response => {
            console.log(response);
             if(response.status == 200) {
                this.profile = response.data;
            } 
        })
    },

}
</script>

<style>

</style>
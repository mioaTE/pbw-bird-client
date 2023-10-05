<template>
  <div id="navbar">
    
      <section id="navbarsection">
        <h2 id="brandtitle"> BIRD TRACKER </h2>
      </section>
      <section id="btnsection">
            <router-link class="btn button" id="navbutton" v-bind:to="{ name: 'home' }">
            Search |
            </router-link>
   

            <router-link class="btn button" id="navbutton" v-bind:to="{ name: 'login' }" >
            Login |
            </router-link>
        
        <!-- <router-link v-bind:to="{ name: 'logout' }" >
          Logout |
        </router-link> -->
        <router-link class="btn button" id="navbutton" v-bind:to="{ name: 'list' }">
            List |
            </router-link>
        
            <router-link class="btn button" id="navbutton" v-bind:to="{ name: 'profile' }">
            Profile
            </router-link>
          </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#navbar {
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

#brandtitle {
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 24px;
}

#btnsection {
  display: flex;
  align-items: center;
  margin-left: auto; /* Move the buttons to the right */
}

.btn {
  color: white;
  text-decoration: none;
  margin-left: 10px; /* Add some margin between buttons */
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #333;
}
</style>
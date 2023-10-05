<template>
  <div>
    <h2>Create a List </h2>
    <form @submit.prevent="submitList">
        <input type="text" id="newListName" v-model="list.listName" />
        <button type="submit">Submit</button>
    </form>

    <h2>My Lists</h2>
    <div v-for= "list in lists" v-bind:key="list.listId">
        <h3>{{ list.listName }}</h3>
        <button type="button" v-on:click="deleteList(list.listId)">Delete</button>
    </div>
    
  </div>
</template>

<script>
import BirdService from '../services/BirdService'
export default {
    data(){
        return{
            list:{
                listId:'',
                listName:'',
                userId: this.$store.state.user.id,
            },
            lists: [],

        }
    },
    created() {
        BirdService.getLists().then((response) => {
            this.lists = response.data;
        })
    },
    methods:{
        submitList(){
            BirdService.createList(this.list).then((response) =>{
                if (response.status === 201) {
            window.location.reload();
          }
        })
        },
        deleteList(listId) {
            //if the user clicks 'ok' in the confirmation dialog, then this will be true and we will go ahead with the delete
            if(
                confirm("Are you sure you want to delete this list?")
             )
            {
                //go ahead with deleting the board
                BirdService.deleteList(listId)
            .then((response) => {
                console.log('DELETE request successful', response);
                if (response.status === 204) {
                    // Successfully deleted, remove the list from the local array
                    this.lists = this.lists.filter(list => list.listId !== listId);
                    alert("List was deleted!");
                    window.location.reload();
                }
            })
            .catch((error) => {
                if (error.response) {
                    // Handle errors as needed
                    this.errorMsg = `Error deleting the list. The response from the server was ${error.response.status} ${error.response.statusText}.`;
                } else if (error.request) {
                    this.errorMsg = "Error deleting the list. The server cannot be reached.";
                } else {
                    this.errorMsg = "Something has gone horribly, terribly wrong, and everything is awful.";
                }
            });
      }
    }
    }
}
</script>

<style>

</style>
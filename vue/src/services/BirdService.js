import axios from 'axios';

export default {

    getBirdsByZipcode(zipcode) {
        return axios.get(`/birds/${zipcode}`);
    },

    getLists(){
        return axios.get(`/lists`);
    },

    getBirdsByListId(listId){
        return axios.get(`/lists/${listId}/birds`);
    },

    getProfile(){
        return axios.get(`/profile`);
    },

    editProfile(formData){
        return axios.put(`/editProfile`, formData);
    },

    createList(newList){
        return axios.post(`/createList`, newList);
    },
    
    deleteList(listId){
        return axios.delete(`/deleteList/${listId}`);
    }
}

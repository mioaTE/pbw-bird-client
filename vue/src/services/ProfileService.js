import axios from 'axios';

export default {

  getProfile() {
    return axios.get('/profile')
  },
  editProfile() {
    return axios.put('/editProfile')
  },
  createProfile() {
    return axios.post('/createProfile')
  },
}

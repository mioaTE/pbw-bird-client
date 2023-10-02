import axios from 'axios';

export default {

    getBirdsByZipcode(zipcode) {
        return axios.get(`/birds/${zipcode}`);
    }


}

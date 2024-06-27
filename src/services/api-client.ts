import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'b1c35931eebd4085864d0966b7718f46'
    }
})
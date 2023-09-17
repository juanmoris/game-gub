import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '03eae9dc48244fa59178908a4851b288'
    }
})
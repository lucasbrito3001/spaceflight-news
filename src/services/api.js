const API_URL = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=10'
import axios from 'axios'

const Requests = {
    getArticles: async (queryParams = '') => {
        try {
            const { status, data } = await axios.get(API_URL + queryParams)
            return { statusCode: status, data }
        } catch (error) {
            return error.response.data
        }
    }
}

export default Requests
const PAGE_SIZE = 10

const API_URL = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${PAGE_SIZE}`
import axios from 'axios'

const queryForEachFilterType = {
    start: '&_start=',
    title: '&title_contains=',
    sort: '&_sort=publishedAt:'
}

const mountQueryParams = (filters) => {
    const query = filters.reduce((prev, next) => {
        if(next.value && queryForEachFilterType[next.type]) {

            if(next.type === 'start') next.value = next.value * PAGE_SIZE
            return prev += `${queryForEachFilterType[next.type]}${next.value}`  || ''

        } else return prev += ''
    }, '')

    return query
}

const Requests = {
    getArticles: async (filtersToApply) => {
        const queryParams = mountQueryParams(filtersToApply)

        try {
            const { status, data } = await axios.get(API_URL + queryParams)
            return { status, data }
        } catch (error) {
            let statusToReturn, errorToReturn

            if (error.code === 'ERR_NETWORK') {
                statusToReturn = 404
                errorToReturn = 'Network Error, contacte o administrador'
            } else {
                statusToReturn = error.response.status
                errorToReturn = error.response.data.message || 'Recurso não encontrado, contacte o administrador'
            }

            return { status: statusToReturn, error: errorToReturn }
        }
    }
}

export default Requests
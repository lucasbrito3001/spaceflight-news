<template>
    <div class="container">
        <header
            class="d-flex justify-content-center align-items-center flex-column"
        >
            <img
                src="https://spaceflightnewsapi.net/img/SNAPI_logo.png"
                alt="spaceflight logo containing a earth and a pencil rocket"
                width="72"
            />
            <h1 class="my-4 h4 title-dark">Space Flight News</h1>
        </header>
        <hr />
        <b-row v-if="isSearchingNews && articles.length === 0">
            <b-col class="text-center mt-5">
                <b-spinner type="grow"/>
                <br>
                <strong>Loading news...</strong>
            </b-col>
        </b-row>
        <ul v-else class="news-list mt-5">
            <b-row class="justify-content-center align-items-center">
                <b-col v-if="articles.length === 0">
                    <p class="text-center mt-5">
                        <b-icon-exclamation-circle width="32" height="32" class="mb-3"></b-icon-exclamation-circle>
                        <br>
                        Nenhuma notícia encontrada, tente novamente retirando/modificando os filtros adicionados
                    </p>
                </b-col>
                <b-col
                    v-else
                    cols="12"
                    md="6"
                    lg="9"
                    v-for="(article, idx) in articles"
                    :key="idx"
                >   
                    <li class="news-list-item mb-2 mb-lg-5">
                        <CardNews
                            :imgSide="idx % 2 === 0 ? 'left' : 'right'"
                            :cardInfos="article"
                        >
                            <div :class="`card-${idx % 2 === 0 ? 'left' : 'right'}`">
                                <b-card-title class="mb-0"> {{ article.title }} </b-card-title>
                                <b-card-text>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="my-1 d-block">{{ article.publishedAt | formatDate }}</small>
                                        <a :href="article.url" target="_blank" class="newsSite-button-link">
                                            <b-button size="sm" squared class="py-0 btn-orange shadow"> {{ article.newsSite }} </b-button>
                                        </a>
                                    </div>
                                    <p>{{ article.summary }}</p>
                                </b-card-text>
                            </div>
                        </CardNews>
                    </li>
                </b-col>
            </b-row>
        </ul>
    </div>
</template>

<script>
import CardNews from "./Card.vue";
export default {
    props: {
        articles: Array,
        isSearchingNews: {
            type: Boolean,
            default: false
        }
    },
    components: {
        CardNews,
    },
    filters: {
        formatDate(value) {
            return new Date(value).toLocaleString().slice(0,10)
        }
    },
};
</script>

<style scoped>
.news-list {
    list-style: none;
}
</style>

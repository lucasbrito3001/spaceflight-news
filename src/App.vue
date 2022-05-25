<template>
    <div id="app">
        <header>
            <Header
                @searchByTitle="setTitleSearched"
                @sortBySelected="setSelectedSortOrder"
                @clearFilters="clearFilters"
            >
            </Header>
        </header>
        <section class="pt-5">
            <ListOfNews
                :articles="articles"
                :isSearchingNews="isSearchingNews"
            ></ListOfNews>
        </section>
        <footer v-if="articles.length > 0">
            <Footer @clickToSeeMore="seeMore"></Footer>
        </footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ListOfNews from "./components/ListOfNews.vue";
import api from "./services/api.js";
import Toast from "./mixins/Toast.vue";
export default {
    name: "App",
    components: {
        Header,
        ListOfNews,
        Footer,
    },
    mixins: [Toast],
    data: () => ({
        articles: [],
        isSearchingNews: false,
        actualPage: 0,
        searchedTitle: '',
        selectedSortOrder: ''
    }),
    mounted() {
        this.getArticles();
    },
    methods: {
        async getArticles(seeMore = false) {
            if(!seeMore) this.articles = [];
            this.isSearchingNews = true;

            const filtersToApply = [
                { type: 'start', value: this.actualPage },
                { type: 'title', value: this.searchedTitle },
                { type: 'sort', value: this.selectedSortOrder }
            ]

            console.log(filtersToApply)

            const news = await api.getArticles(filtersToApply);

            const actions = {
                200: () => {
                    if (seeMore) this.articles = [...this.articles, ...news.data];
                    else this.articles = news.data;

                    this.makeToast(
                        "success",
                        "Busca feita com sucesso",
                        `Foram retornados ${news.data.length} notícias`
                    );
                },
                400: () => {
                    this.makeToast(
                        "warning",
                        "Houve um erro na sua busca",
                        news.error
                    );
                },
                404: () => {
                    this.makeToast("danger", "Erro inesperado", news.error);
                },
            };

            actions[news.status]();
            this.isSearchingNews = false;
        },
        returnQueryParamToSend() {
            const filtersToIterate = [
                { type: 'title', value: this.searchedTitle }, 
                { type: 'sort', value: this.selectedSortOrder }
            ]

            const additionalQuery = filtersToIterate.reduce((prev, next) => prev += this.returnQueryParamToEachFilterType(next.type, next.value), '')

            return additionalQuery
        },
        returnQueryParamToEachFilterType(type, value) {
            const queryToReturn = {
                title: `&title_contains=${value}`,
                sort: `&_sort=publishedAt:${value}`
            }

            if(value) return queryToReturn[type] || ''
            else return ''
        },
        seeMore() {
            this.actualPage++
            this.getArticles(true);
        },
        setTitleSearched(title) {
            this.searchedTitle = title
            this.actualPage = 0
            this.getArticles()
        },
        setSelectedSortOrder(sortOrder) {
            this.selectedSortOrder = sortOrder
            this.actualPage = 0
            this.getArticles()
        },
        clearFilters() {
            this.searchedTitle = ""
            this.selectedSortOrder = ""
            this.actualPage = 0
            this.getArticles()
        }
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");
:root {
    --color-dark: #1e2022;
    --color-purple: #302e53;
    --light-purple: #bebbdf;
    --light-gray: #dddddd;
    --color-orange: #d07017;
}

* {
    font-family: "Roboto Condensed", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.title-dark {
    color: var(--color-dark);
}

.btn.outlined.purple {
    border: 1px solid var(--color-purple);
    color: var(--color-purple);
    background-color: transparent;
}

.btn.link.orange {
    border: none;
    color: var(--color-orange);
    text-decoration: underline;
    background-color: transparent;
}

.btn-purple {
    background-color: var(--color-purple) !important;
    color: white !important;
}

.btn-orange {
    background-color: var(--color-orange) !important;
    border: 1px solid var(--color-orange) !important;
    color: white !important;
}
</style>

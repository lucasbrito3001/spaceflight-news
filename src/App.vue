<template>
    <div id="app">
        <header>
            <Header 
                @searchByTitle="searchNewsByTitle"
                @sortBySelected="sortNews"
            >
            </Header>
        </header>
        <section class="pt-5">
            <ListOfNews></ListOfNews>
        </section>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import ListOfNews from './components/ListOfNews.vue'
export default {
    name: "App",
    components: {
        Header,
        ListOfNews
    },
    data: () => ({

    }),
    methods: {
        searchNewsByTitle(titleSearched) {
            console.log(titleSearched)
        },
        sortNews(sortSelected) {
            console.log(sortSelected)
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
:root {
    --color-dark: #1E2022;
    --color-purple: #302E53;
    --color-orange: #D07017;
}

* {
    font-family: 'Roboto Condensed', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.title-dark {
    color: var(--color-dark);
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

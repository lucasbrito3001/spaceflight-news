<template>
    <div id="app">
        <header>
            <Header 
                @searchByTitle="searchNewsByTitle"
                @sortBySelected="sortNews"
            >
            </Header>
        </header>
    </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    name: "App",
    components: {
        Header
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
* {
    font-family: 'Roboto Condensed', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
</style>

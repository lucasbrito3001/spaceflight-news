<template>
    <nav class="container my-3">
        <b-row class="justify-content-end">
            <b-col cols="3" class="div-search">
                <b-form-input
                    type="search"
                    v-model="titleSearched"
                    placeholder="Search"
                    id="input-search-by-title"
                    class="input-group"
                >
                </b-form-input>
                <span
                    class="btn-search"
                    @click="emitEvent('searchByTitle', titleSearched)"
                >
                    <b-icon-search></b-icon-search>
                </span>
            </b-col>
            <b-col cols="2">
                <b-form-select
                    id="select-sort-news"
                    v-model="sortSelected"
                    :options="sortOptions"
                    @change="emitEvent('sortBySelected', sortSelected)"
                >
                </b-form-select>
            </b-col>
        </b-row>
    </nav>
</template>

<script>
export default {
    data: () => ({
        titleSearched: "",
        sortSelected: undefined,
        sortOptions: [
            { value: 0, text: "Mais antigas" },
            { value: 1, text: "Mais novas" },
        ],
    }),
    methods: {
        emitEvent(name, value) {
            this.$emit(name, value);
        },
    },
};
</script>

<style scoped>
.div-search {
    position: relative;
}
.btn-search {
    position: absolute;
    right: 20px;
    top: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 26px;
    z-index: 1000;
    background: rgb(70, 70, 70);
    cursor: pointer;
}
.bi-search {
    color: white;
    width: 12px;
}
</style>

<template>
    <div class="container text-center py-5">
        <div :class="`dot-div ${isSearchingNews ? 'div-1' : ''}`" ref="div-1"></div>
        <div :class="`dot-div ${isSearchingNews ? 'div-2' : ''}`" ref="div-2"></div>
        <div :class="`dot-div ${isSearchingNews ? 'div-3' : ''}`" ref="div-3"></div>

        <b-button 
            class="outlined purple mt-3" 
            :disabled="isSearchingNews"
            @click="emitEvent"
        >
            {{ isSearchingNews ? 'Buscando noticias...' : 'Carregar mais' }}
        </b-button>
    </div>
</template>

<script>
export default {
    props: {
        isSearchingNews: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        emitEvent() {
            this.$emit('clickToSeeMore')
        }
    }
}
</script>

<style scoped>
.dot-div {
    width: 14px;
    height: 12px;
    border: 2px solid var(--light-purple);
    background: var(--light-gray);
    display: block;
    margin: 4px auto 0;
}

.div-1 {
    animation: dotsPulsing .8s normal infinite;
}

.div-2 {
    animation: dotsPulsing .8s normal infinite .25s;
}

.div-3 {
    animation: dotsPulsing .8s normal infinite .55s;
}

@keyframes dotsPulsing {
    0% {
        transform: scale(1);
    } 50% {
        transform: scale(1.2);
    } 100% {
        transform: scale(1);
    }
}
</style>
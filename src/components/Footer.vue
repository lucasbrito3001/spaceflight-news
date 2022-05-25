<template>
    <div class="container text-center py-5">
        <div class="dot-div"></div>
        <div class="dot-div"></div>
        <div class="dot-div"></div>

        <b-button class="outlined purple mt-3" @click="emitEvent">Carregar mais</b-button>
    </div>
</template>

<script>
export default {
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
</style>
<template>
    <div class="p-4 modal-article">
        <div class="content">
            <slot></slot>
        </div>
        <a :href="modalInfo.url" target="_blank" class="d-block text-center mt-4">
            <b-button class="btn-purple shadow"> Ir para o site </b-button>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        modalInfo: Object
    }
}
</script>

<style scoped>
.newsSite-button-link {
    display: none;
}
.modal-img {
    width: 320px;
    height: 200px;
}
.content {
    display: flex;
    gap: 20px;   
}

@media screen and (max-width: 991px) {
    .content {
        flex-direction: column;
    }
    .modal-img {
        width: 100%;
    }
}
</style>
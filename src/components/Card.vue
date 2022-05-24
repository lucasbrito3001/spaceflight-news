<template>
    <div>
        <b-card
            :img-src="cardInfos.imageUrl"
            img-width="50%"
            img-height="150"
            class="card"
            :img-left="imgSide === 'left'"
            :img-right="imgSide === 'right'"
        >
            <slot></slot>
            <b-button
                :class="`mt-2 shadow btn-purple btn-${imgSide}`"
                @click="$bvModal.show(`modal-see-more-${cardInfos.id}`)"
                >Ver mais</b-button
            >
        </b-card>
        <b-modal
            size="lg"
            centered
            :id="`modal-see-more-${cardInfos.id}`"
            hide-footer
            hide-header
        >
            <Modal :modalInfo="cardInfos">
                <img class="modal-img" :src="cardInfos.imageUrl" />
                <slot></slot>
            </Modal>
        </b-modal>
    </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
    name: "CardsNews",
    components: {
        Modal,
    },
    props: {
        imgSide: String,
        cardInfos: Object,
    },
    data: () => ({
        showModal: false,
    }),
};
</script>

<style scoped>
.card {
    border: none;
}

.card-left,
.btn-left {
    margin-left: 340px;
}

.card-right,
.btn-right {
    margin-right: 340px;
}

.card-img-left,
.card-img-right {
    position: absolute;
    width: 320px;
    height: 100%;
    display: block;
}

.card-img-left {
    left: 20px;
}

.card-img-right {
    right: 20px;
}

@media screen and (max-width: 991px) {
    .card-img-left,
    .card-img-right {
        width: 100%;
        height: 200px;
        left: 0;
        right: 0;
    }
    .card {
        flex-direction: column !important;
    }
    .card-body {
        padding: 20px 0;
    }
    .card-left,
    .card-right,
    .btn-left,
    .btn-right {
        margin: 0;
        margin-top: 200px;
    }
}
</style>

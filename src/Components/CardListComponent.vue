<template>
    <div class="container">
        <!-- <div class="f-d-layer"></div> -->
        <h2>{{ title }}</h2>
        <div class="row gy-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="(card, index) in list" :key="card.id">
                <CardComponent :item="card" />

            </div>
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardListComponent',
    components: {
        CardComponent
    },
    props: {
        title: String,
        list: Array
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .container {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        background-color: $body-color;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 20px;
        padding: 0 20px;
    }

    // .f-d-layer {
    //     width: 100%;
    //     height: 100%;
    //     background-color: rgba(0, 0, 0, 0.5);
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    // }
    h2 {
        color: white;
        font-weight: bold;
        font-size: 40px;
    }
</style>
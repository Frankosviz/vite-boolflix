<template>
    <div class="f-d-main">
        <CardListComponent title="Movies" :list="store.movies" />
        <CardListComponent title="Tv Series" :list="store.tv" />
    </div>
</template>

<script>
    import { store } from '../store.js';
    import CardListComponent from './CardListComponent.vue';
    export default {
        name: 'MainComponent',

        components: {
            CardListComponent
        },

        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

    .f-d-main {
        min-height: 100vh;
        padding-top: 100px;
        background-color: $body-color;
    }
</style>
<template>
    <div>
        <CardListComponent title="Movies" :list="store.movies"/>
        <CardListComponent title="Tv Series" :list="store.tv"/>
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

</style>
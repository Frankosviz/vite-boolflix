<template>
    <div>
        main
        <CardListComponent />
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
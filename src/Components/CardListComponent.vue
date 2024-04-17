<template>
    <div class="d-flex flex-wrap p-5">
        <CardComponent />
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardListComponent',
    components: {
        CardComponent
    }
}
</script>

<style lang="scss" scoped></style>
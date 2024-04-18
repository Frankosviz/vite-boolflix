<template>
    <div class="f-d-card">
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: 'CardComponent',
    data() {
        return {
            store
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
    .f-d-card {
        width: 300px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        &:hover {
            cursor: pointer;
        }
    }
</style>
<template>
    <div class="fd-header">
        <h2>
            <a href="#">BoolFlix</a>
        </h2>
    </div>
</template>

<script>
    import HeaderComponent from './HeaderComponent.vue'
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>
    .fd-header {
        width: 100%;
        height: 100px;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        text-transform: uppercase;
    }

    a {
        color: red;
        font-size: 30px;
        text-decoration: none;
        font-weight: light;
    }

</style>
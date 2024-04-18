<template>
    <div class="fd-header">
        <h2>
            <a href="#">BoolFlix</a>
        </h2>
        <div class="d-flex align-items-center">
            <input class="form-control" type="search" placeholder="Cerca" @keyup.enter="searchMedia"
                v-model.trim="store.options.params.query" />
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
        }
    },
    methods: {
        searchMedia() {
            this.$emit('searchApi');
        }
    }
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}

a {
    color: red;
    font-size: 30px;
    text-decoration: none;
    font-weight: light;
}

input {
    width: 300px;
    height: 30px;
    font-weight: bold;
    border-right: none;
    line-height: 30px;
}

button {
    height: 30px;
    border-left: none;
    background-color: white;
}
</style>
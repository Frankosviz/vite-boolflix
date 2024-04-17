<template>
  <HeaderComponent />
  <CardListComponent />
  <!-- Qui ho omesso CardComponent perchè gia presente nel componente padre CardlistComponent -->
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderComponent from './Components/HeaderComponent.vue';
import CardListComponent from './Components/CardListComponent.vue';
import CardComponent from './Components/CardComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardListComponent,
    CardComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
        console.log(res.data.results);
      })
    },
    getTvSeries() {
      axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
        console.log(res.data.results);
      })
    }
  },
  created() {
      this.getMovies();
      this.getTvSeries();
    }
}


</script>

<style lang="scss" scoped>

</style>
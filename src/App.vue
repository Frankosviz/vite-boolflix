<template>
  <!-- Lasciamo in AppVue - HeaderComponent l'evento searchApi (creato in HeaderComponent) in ascolto -->
  <HeaderComponent @searchApi="getMedia()" />
  <MainComponent />
  <!-- Qui ho omesso CardComponent perchè gia presente nel componente padre CardlistComponent -->
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderComponent from './Components/HeaderComponent.vue';
import MainComponent from './Components/MainComponent.vue';
import CardListComponent from './Components/CardListComponent.vue';
import CardComponent from './Components/CardComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    CardListComponent,
    CardComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    // Metodo creato per fare le chiamate in HeaderComponent dell'evento emit che abbiamo creato
    getMedia(){
      if(this.store.options.params.query){
        this.getMovies();
        this.getTvSeries();
      }
    },
    getMovies() {
      axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
        //console.log(res.data.results);
        // Andiamo a buttare i nostri results nell'array vuoto in store.js
        this.store.movies = res.data.results;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        console.log('finally');
      })
    },
    getTvSeries() {
      axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
        //console.log(res.data.results);
        // Andiamo a buttare i nostri results nell'array vuoto in store.js
        this.store.tv = res.data.results;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        console.log('finally');
      })
    }
  },
  created() {
    }
}


</script>

<style lang="scss" scoped>

</style>
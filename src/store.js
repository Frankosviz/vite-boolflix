import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    options: {
        params: {
            api_key: '8c01fefc2763c1d51cbd748c17c53732',
            // Il nostro query lo abbiamo collegato al v-model della searchbar
            query: "",
        }

    },
    imageUrl: 'http://image.tmdb.org/t/p/original',
    movies: [],
    tv: [],
});

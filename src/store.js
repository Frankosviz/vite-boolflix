import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint : {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    options: {
        api_key: '8c01fefc2763c1d51cbd748c17c53732',
        query: 'a'
    },
    imageUrl: 'http://image.tmdb.org/t/p/original'
})

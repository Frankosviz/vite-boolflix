<template>
    <div class="card">
        <img :src="store.imageUrl + item.poster_path" class="card-img-top" :alt="item.title || item.name">
        <div class="card-body">
            <h4 class="card-title">{{ item.title || item.name }}</h4>
            <h6 class="card-title">({{ item.original_title || item.original_name }})</h6>
            {{ item.original_language }} <br>
            {{ item.vote_average }}
            <div class="card-text">
                <!-- <div class="flag">
                    Div fatto per le bandiere
                    <img :src="imgflag" :alt="item.original_language + 'flag'">
                </div> -->
                <!-- <div class="stars">
                    Div fatto per le stelline
                    <i :class="{'fa-solid' : n <= voteStar, 'fa-regular': n > voteStar}" class="fa-star" v-for="n in 5"></i>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: 'CardComponent',
    props: {
        item: Object
    },
    data() {
        return {
            store,
            flags: [
                'en', 'es', 'de', 'it', 'fr'
            ]
        }
    },
    methods: {
    },
    // computed: {
    //     // computed fatta per le immagini
    //     imgflag() {
    //         if(this.flags.includes(this.item.original_language)) {
    //             return `${this.item.original_language}.png`;
    //         } else {
    //             return '/images/';
    //         }
    //     },
    //     // computed fatta per le stelline
    //     voteStar() {
    //     return math.cell(this.item.vote_average / 2)
    //}
    // }
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

// .flag {
//     img{
//         height: 50px;
//     }
// }

// .stars {
//     img{
//         color: gold;
//     }
// }

</style>


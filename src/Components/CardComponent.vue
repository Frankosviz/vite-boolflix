<template>
    <div class="f-d-card flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="store.imageUrl + item.poster_path" class="" :alt="item.title || item.name">
            </div>
            <div class="flip-card-back d-flex flex-column justify-content-between align-items-center">

                <h4 class="card-title">{{ item.title || item.name }}</h4>
                <h6 class="card-title"><em class="fw-lighter">{{ item.original_title || item.original_name }}</em></h6>
                <div class="flag">
                    <img :src="`../images/${item.original_language}.png`" :alt="item.original_language + 'flag'">
                </div>
                <div>
                    {{ item.vote_average }}
                </div>
                <!-- <div class="card-text">
                 <div class="flag">
                    Div fatto per le bandiere
                    <img :src="imgflag" :alt="item.original_language + 'flag'">
                </div> 
                 <div class="stars">
                    Div fatto per le stelline
                    <i :class="{'fa-solid' : n <= voteStar, 'fa-regular': n > voteStar}" class="fa-star" v-for="n in 5"></i>
                </div> 
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
                'en', 'es', 'de', 'it', 'fr', 'ja', 'ko', 'pt', 'ru',
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
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
}

img {
    width: 300px;
    height: 500px;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
        cursor: pointer;
    }
}

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 500px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
    border: 5px solid white;
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
}

h4 {
    color: white;
}

h6 {
    color: red;
}

.flag {
    img {
        width: 40px;
        height: 40px;
    }

}

// .stars {
//     img{
//         color: gold;
//     }
// }</style>

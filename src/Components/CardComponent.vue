<template>
    <div class="f-d-card flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="store.imageUrl + item.backdrop_path" :alt="item.title || item.name" v-if="item.backdrop_path">
                <div class="flag d-flex flex-column justify-content-between align-items-center" v-else>
                    <img src="/images/Placeholder.png" :alt="item.title || item.name">
                    <p class="text-dark">{{ notFoundMessage }}</p>
                </div>
            </div>
            <div class="flip-card-back d-flex flex-column justify-content-between align-items-center">

                <h4 class="card-title">{{ item.title || item.name }}</h4>
                <h6 class="card-title"><em class="fw-lighter">{{ item.original_title || item.original_name }}</em></h6>

                <div class="flag">

                    <!-- Div per l'aggiunta di immagini dinamiche in base alle nostre lingue che abbiamo in data.return -->

                    <img :src="imgflag" :alt="item.original_language + 'flag'">
                </div>

                <div class="stars">
                    
                    <!-- Div per il voto che prendiamo dall'api e trasformiamo in stelle tramite la computed sotto dichiarata-->
                    
                    <i :class="{'fa-solid' : n <= voteStar, 'fa-regular': n > voteStar}" class="fa-star " v-for="n in 5"></i>
                </div> 

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
            notFoundMessage : 'ooops! Image not found',

            // dati per la restituzione di flag sottoforma di img in base al linguaggio preso dall'api

            flags: [
                'en', 'es', 'de', 'it', 'fr', 'ja', 'ko', 'pt', 'ru',
            ]
        }
    },
    methods: {

    },

    computed: {

        // computed fatta per la restituzioni di immagini, se le ho nel mio return data dammi quell'immagine associata alla bandiera... altrimenti restituisce immagine placeholder

        imgflag() {
            if (this.flags.includes(this.item.original_language)) {
                return `/images/${this.item.original_language}.png`;
            } else {
                return '/images/Placeholder.png';
            }
        },

        //     // computed fatta per rappresentare le stelline in base al voto che prendiamo dall'api
        voteStar() {
            return Math.ceil(this.item.vote_average / 2)
        }
    }
}
</script>

<style lang="scss" scoped>
.f-d-card {
    width: 300px;
    height: 200px;
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
    height: 200px;
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
    height: 200px;
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

.stars {
    color: gold;
}

</style>

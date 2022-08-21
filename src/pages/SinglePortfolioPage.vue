<template>
    <Header />

    <section class="single-portfolio">
        <div class="__container">
            <span class="goBack" @click="$router.go(-1)"> &#171; Назад</span>

            <p class="work-count">Работа № {{ count }}</p>

            <h1 class="page-title">{{ this.state.title }}</h1>

            <div class="work">

                <button v-if="count > 1" @click="goTo('prev')" class=" btn previous">
                    <Icon idIcon="arrowDown" class="arrow arrow-left" />
                    <span class="arrow-count"> {{ count - 1 }}</span>
                </button>
                <button v-if="count < arrLength" @click="goTo('next')" class=" btn next">
                    <span class="arrow-count"> {{ count + 1 }}</span>
                    <Icon idIcon="arrowDown" class="arrow arrow-right" />
                </button>


                <div class="imgs">
                    <img :src="this.state.bigImg" :alt="this.state.alt">
                </div>
                <div class="description">
                    <p class=" item stack"> <b>Стек технологий: </b> <i>{{ this.state.stack }}</i> </p>
                    <p class=" item produtionTime"> <b>Срок разработки: </b> <i> {{ this.state.time }}</i>
                    </p>
                    <p class=" item cost"> <b>Стоимость разработки: </b> <i>{{ this.state.cost }}</i>
                    </p>
                    <p v-if="this.state.link" class=" item work-link"> <b>Ссылка на сайт: </b>
                        <a class="description-link" :href="this.state.link" target="blank"> <i>{{ this.state.link }}</i>
                        </a>
                    </p>
                    <p v-if="this.state.github" class=" item work-github"> <b>Код на
                            gitHub: </b> <a class="description-link" :href="this.state.github" target="blank"> <i>{{
                                    this.state.github
                            }}</i> </a></p>


                </div>
            </div>

        </div>

    </section>
    <Footer />
</template>

<script>
export default {
    name: "SinglePortfolioPage",
    data() {
        return {
            state: "",
            count: +(this.$route.params.id) + 1,
            arrLength: this.$store.state.portfolioPageData.length
        };
    },
    methods: {
        back() {
            router.go(-1);
        },
        goTo(direction) {
            const count = this.$store.state.portfolioPageData;
            const id = +(this.$route.params.id) + 1;
            console.log("count = ", count.length);
            console.log("id = ", id);
            if (direction === "next" && id < count.length) {
                this.$route.params.id++;
            }
            if (direction === "prev" && id > 1) {
                this.$route.params.id--;
            }
            this.$router.replace(`/portfolio/${this.$route.params.id}`);
        }
    },
    watch: {
        "$route.params.id": {
            immediate: true,
            handler() {
                const state = this.$store.state.portfolioPageData[this.$route.params.id];
                const id = +(this.$route.params.id) + 1;
                this.count = id;
                this.state = state;
            }
        },
    },
    mounted() {
    },

}
</script>
<style scoped lang="scss">
.single-portfolio {
    margin-top: 100px;
    overflow: hidden;
    transition: var(--trans03);

}

.goBack {
    display: block;
    margin-bottom: 10px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    font-weight: bold;
    color: var(--thirdColor);
    transition: var(--trans03);

    &:hover {
        color: var(--blackColor);
        transform: translateX(10px);
        transition: var(--trans03);
    }
}

.btn {
    height: 100%;
    background-color: rgba(0, 0, 0, .05);
    padding: 15px;
    border-radius: var(--radius);
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: -55px;
    bottom: 0;
    transition: var(--trans03);
    display: flex;
    align-items: start;
    justify-content: center;

    &.next {
        right: 0;
        text-align: right;
    }

    &.previous {
        left: 0;
        text-align: left;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);

        @media screen and (max-width: 400px) {
            background-color: rgba(0, 0, 0, .1);
        }
    }
}

.arrow {
    width: 30px;
    height: 30px;
    fill: var(--whiteColor);

    @media screen and (max-width: 400px) {
        width: 20px;
        height: 20px;
        position: sticky;
        top: 0;
    }

    &-right {
        transform: rotate(-90deg);
        filter: drop-shadow(-4px 0px 3px rgb(0 0 0 / 0.6));
    }

    &-left {
        transform: rotate(90deg);
        filter: drop-shadow(4px 0px 3px rgb(0 0 0 / 0.6));
    }

    &-count {
        font-size: 2em;
        color: var(--whiteColor);

        @media screen and (max-width: 400px) {
            font-size: 1.5em;
        }
    }
}

.work {
    display: flex;
    align-items: start;
    position: relative;
    &-count{
        text-align: center;
        font-size: 1.2em;
        font-weight: bold;
        margin: 0 0 60px 0;
    }

    &:hover .btn {
        opacity: 1;
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }
}

.imgs {
    width: 50%;

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
    }
}

.description {
    padding-left: 10px;
    letter-spacing: 1.5px;
    word-spacing: .4em;
    line-height: 30px;

    &-link {
        color: var(--thirdColor);

        &:hover {
            color: var(--blackColor);
        }
    }

}
</style>
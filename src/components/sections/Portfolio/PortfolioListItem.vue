<template>

    <div @click="$router.push(`/portfolio/${id}`)"  class="portfolio-item">
        <img :src="img" :alt="alt" />
        <div class="portfolio-item-descr">
            <h4>{{ title }}</h4>
            <p>{{dataType}}</p>
            <span class="more">&#10137;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "PortfolioListItem",
    data() {
        return {

        };
    },
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required:true
        },
        dataType:{
            type:String
        }

    },
    methods: {},
    components: {}
}
</script>

<style scoped lang="scss">
.portfolio-item {
    width: 350px;
    height: 350px;
    border-radius: var(--radius);
    background-color: var(--secondColor);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    transition: var(--trans03);
    cursor: pointer;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: inherit;
        transition: var(--trans03);

    }

    &-descr {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--secondColor);
        border-radius: 0 0 var(--radius) var(--radius);
        color: var(--blackColor);

        .more {
            font-size: 2em;
        }
    }

    &:hover {
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.3);
        transition: var(--trans03);
    }

    &:hover img {
        transform: scale(.8) rotate(3deg) translateY(-30px);
        transition: var(--trans03);
    }
}
</style>
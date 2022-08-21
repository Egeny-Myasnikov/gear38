<template>
    <section class="portfolio">
        <div class="__container portfolio-container">
            <h2 class="page-title portfolio-title">{{ portfolioTitle }}</h2>
            <PortfolioList v-if="!homePage" :portfolioData="portfolioData" />
            <PortfolioList v-else :portfolioData="portfolioData.slice(0, 3)" />
        </div>
    </section>
</template>

<script>
import PortfolioList from './PortfolioList.vue';

export default {
    name: "Portfolio",
    data() {
        return {
           
        };
    },
    methods: {
        clack(){

        }
    },
    components: { PortfolioList},
    props: {
        portfolioTitle: String,
        portfolioData: Array,
        homePage: {
            type: Boolean,
            default: false
        }
        
    }
}
</script>

<style scoped lang="scss">
.portfolio {
    

    &-btn-primary {
        margin-top: 20px;
        display: inline-block;
    }


    &-filter {
        display: flex;
        gap: 20px;
        margin: 20px 0;
        padding: 10px 0;

    }
}
</style>
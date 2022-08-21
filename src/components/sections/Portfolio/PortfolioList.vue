<template>

    <div class="portfolio-list">
        <PortfolioListItem v-for="p in portfolioData" :dataType="dataType" :id="p.id" :alt="p.alt" :key="p.id" :img="p.img"
            :title="p.title" />
    </div>
   
</template>

<script>

import PortfolioListItem from './PortfolioListItem.vue';
export default {
    name: "PortfolioList",
    data() {
        return {
            
        };
    },
    methods: {},
    components: { PortfolioListItem },
    props: {
        portfolioData: Array,
        dataType:[String]
       
    }
}
</script>

<style scoped lang="scss">
.portfolio-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
}
</style>
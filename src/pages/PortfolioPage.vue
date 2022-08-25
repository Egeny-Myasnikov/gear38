<template>
  <Header />
  <div class="filter">
    <button v-for="(type, i) in types" :key="i" @click="getType(type)" class="btn-types">{{ type }} </button>
  </div>
  <Portfolio :portfolioData="dataType" :portfolioTitle="portfolioTitle" />
  <Footer />
</template>

<script>
// @ is an alias to /src  
import Portfolio from '@/components/sections/Portfolio/Portfolio.vue'

export default {
  name: 'PortfolioPage',
  components: {
    Portfolio
  },
  mounted() {
    this.dataType = this.portfolioPageData
  },
  data() {
    return {
      portfolioTitle: 'Портфолио',
      types: ['Все', 'Каталог', 'Визитка'],
      portfolioPageData: this.$store.state.portfolioPageData,
      dataType: [],
    }
  },
  methods: {
    // getType(type){
    //   this.dataType = this.$store.state.portfolioPageData.filter(data => data.type === type)
    //   if(this.dataType.length === 0) this.dataType = this.$store.state.portfolioPageData
    // }
  },
  computed: {
    getType() {
      return (type) => {
        this.dataType = this.portfolioPageData.filter((data) => data.type === type)
        if (this.dataType.length === 0) this.dataType = this.portfolioPageData
      }
    }
  }
}
</script>
<style scoped lang="scss">
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-top: 1px solid var(--thirdColor);
  border-bottom: 1px solid var(--thirdColor);
}

.btn-types {
  background-color: #fff;
  padding: 10px 15px;
  border-radius: var(--radius);
  box-shadow: 0 1px 3px #333;
  cursor: pointer;
  font-size: 1.1em;
  transition: .4s;

  &:hover {
    box-shadow: none;

  }
}
</style>

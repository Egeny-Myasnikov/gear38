<template>
  <Header />
  <Portfolio :portfolioData="$store.state.portfolioPageData" :portfolioTitle="portfolioTitle" />
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
data() {
  return {
    portfolioTitle: 'Портфолио',
  }
}
}
</script>
<style scoped lang="scss">
</style>

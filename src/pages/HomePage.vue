<template>
  <Header />
  <HomeGreeting />
  <HomeSitesTypes />
  <Portfolio :homePage="homePage" :portfolioData="$store.state.portfolioPageData" :portfolioTitle="portfolioTitle" />
  <ButtonPrimary @click="$router.push('/portfolio')" class="btn">Перейти в портфолио </ButtonPrimary>
  <Footer />
</template>

<script>
// @ is an alias to /src  
import HomeGreeting from '@/components/sections/HomeGreeting.vue'
import HomeSitesTypes from '@/components/sections/HomeSitesTypes/HomeSitesTypes.vue'
import Portfolio from '@/components/sections/Portfolio/Portfolio.vue'


export default {
  name: 'HomePage',
  components: {
    HomeGreeting,
    HomeSitesTypes,
    Portfolio,
},
  data() {
    return {
      portfolioTitle: 'Немного моих работ',
      homePage: true
  }
}


}
</script>
<style scoped lang="scss">
.btn{
  margin-top: 20px;
  margin-left: 5%;
}
</style>

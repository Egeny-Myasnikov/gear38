<template>
  <header class="header">

    <div class="__container container">

      <Logo />

      <Navigation />

      <div class="header-phone">
        <Tel />
      </div>

      <SocialBarHeader />
    </div>
  </header>
</template>

<script>
import Logo from './UI/Logo.vue';
import Navigation from './Navigation.vue';
import Tel from './UI/Tel.vue';
import SocialBarHeader from './UI/SocialBarHeader.vue';

export default {
  name: "Header",
  components: { Logo, Navigation, Tel, SocialBarHeader }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: 20px;
}


</style>

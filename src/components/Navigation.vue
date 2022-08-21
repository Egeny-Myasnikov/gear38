<template>
  <nav class="navigation">
    <router-link class="nav-link link" to="/">Главная</router-link>
    <router-link class="nav-link link" to="/portfolio">Портфолио</router-link>
    <router-link class="nav-link link" to="/about">Обо мне</router-link>
    <router-link class="nav-link link" to="/contacts">Контакты</router-link>

  </nav>

</template>

<script>
export default {
name:'Navigation'
}

</script>

<style scoped lang="scss">



.router-link-active{
  font-weight:bold;
  &::after {
      width: 80%;
    }
}
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  .nav-link {
    font-size: 1em;
    font-weight: medium;
    padding-bottom: 10px;
  }
}
@media screen and(max-width:769px) {
    .navigation {
      gap: 15px;
      flex-wrap: wrap;
      position: absolute;
        top: 90px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
    }
}
@media screen and(max-width:850px) {
    .navigation {
      gap: 15px;
    }
      
}


</style>
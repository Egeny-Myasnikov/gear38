<template>
  <a href="tel:+79501081773" title="Позвонить" class="phone link">
    <Icon idIcon="phone" className="phone-svg" />
    +7 (950) 108-17-73
  </a>
</template>

<script>
import Icon from './Icon.vue';
export default {
    name: "Tel",
    components: { Icon }
}
</script>

<style scoped lang="scss">


.phone {
  display: flex;
  gap: 10px;
  font-size: 1em;
}
@media screen and(max-width:769px) {
  
    .phone-svg {
      left: -20px;
      width: 15px;
      height: 15px;
    } 
}
</style>
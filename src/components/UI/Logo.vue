<template>
  <div class="logo">
    <Icon idIcon="gearGroup" className="svg-medium logo-svg" />
    <strong class="logo-title">
      LOGO
    </strong>
  </div>
</template>

<script>
import Icon from './Icon.vue';
export default {
  name: "Logo",
  components: { Icon },

}
</script>

<style scoped lang="scss">
.logo {
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: var(--thirdColor);
  border-radius: var(--radius);
  padding: 5px;
  padding-left: 10px;

  &-svg {
    fill: var(--whiteColor);
    height: 40px;
  }

  &-title {
    color: var(--whiteColor);
    letter-spacing:2px;
  }
}

@media screen and(max-width:790px) {
 .logo {
      width: 40px;
      height: 40px;
      padding: 5px 7px;

      &-svg {
        width: 110%;
        height: 110%;
      }

      &-title {
        font-size: .3em;
      }
    }

}
</style>
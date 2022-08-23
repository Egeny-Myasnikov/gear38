<template>
  <div class="logo">
    <Icon idIcon="gear" className="svg-medium logo-svg" />
    <strong class="logo-title">
      Gear 38
    </strong>
  </div>
</template>

<script>
export default {
  name: "Logo",
}
</script>

<style scoped lang="scss">
.logo {
  display: grid;
  justify-content: center;
  align-items: center;

  &-svg {

    fill: var(--thirdColor);
    animation: rotate 20s infinite forwards linear;
  }

 

  &-title {
    color: var(--thirdColor);
    font-weight: 900;
    letter-spacing:2px;
    animation: ls 15s infinite forwards alternate linear;

  }
}
 @keyframes rotate {
    from{
      transform:rotate(0deg);
      

    }
    to{
      transform:rotate(360deg);
     
    }
  }
   @keyframes ls {
    from{
      letter-spacing:.2em;
      filter: hue-rotate(0deg);

    }
    to{
      letter-spacing:.5em;
       filter: hue-rotate(90deg);
    }
  }

@media screen and(max-width:790px) {
 .logo {
      width: 40px;
      height: 40px;
      padding: 5px 7px;

      &-svg {
        width: 100%;
        height: 120%;
      }

      &-title {
        font-size: .3em;
      }
    }

}
</style>
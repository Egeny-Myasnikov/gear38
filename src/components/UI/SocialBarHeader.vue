<template>
  <div class="social">
    <div class="social-wrap" @click="showAndHideSocBar">
      <Icon idIcon="arrowDown" className="social-svg arrowDown" />
      <Icon :class="{active:isActive}" idIcon="gearMail" className="svg-small social-svg gearMail" />
    </div>

    <div :class="{active:isActive}" class="social-icons-container">
      <a href="https://vk.com/fljenya">
        <Icon idIcon="vk" className="svg-small vk" />
      </a>
      <a href="https://t.me/fljenya">
        <Icon idIcon="telegram" className="svg-small telegram" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=79501081773">
        <Icon idIcon="whatsapp" className="svg-small whatsapp" />
      </a>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
    name: "SocialBarHeader",
    data() {
        return {
            isActive: false
        };
    },
    methods: {
        showAndHideSocBar() {
            this.isActive = !this.isActive;
        }
    },
    components: { Icon }
}



</script>

<style scoped lang="scss">

.social {
  position: relative;
}

.social-wrap {
  cursor: pointer;
  display: flex;
  justify-content: end;
  align-items: center;
}

.arrowDown {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
.gearMail{
  transform: rotate(0deg);
  transition:var(--trans05);
    &.active {
        transform: rotate(360deg);
      }
}

.social-icons-container {
  display: grid;
  justify-content: end;
  margin-top: 15px;
  position: absolute;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transform:translateY(-150%);
  transition:var(--trans05);
    &.active{
    visibility: visible;
    opacity: 1;
    transform: translateY(0%);
    }
}
</style>>


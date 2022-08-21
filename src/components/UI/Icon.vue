<template>
   <svg :class="className">
          <use :xlink:href="require('@/assets/svg/icons.svg') + '#' + idIcon"></use>
        </svg>
</template>

<script>
export default {
name:'Icon',
props: {
    idIcon:{
        type:String,
        required: true
  },
  className: {
    type: String
  },
  }
}
</script>

<style scoped lang="scss">

</style>
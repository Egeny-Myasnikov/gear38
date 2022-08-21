<template>
    <input type="tel" maxlength="18"  @input="updateInput" class="input-tel"
        placeholder="+7(950) 108-17-73" v-phoneMask :required="required" />
</template>

<script>
    export default {
    name: 'InputPhone',
    props: {
        required: {
            type: Boolean,
        },  
        
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>
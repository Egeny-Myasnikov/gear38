<template>
    <section class="sites-types">
        <div class="__container sites-types-container">
            <h2 class="page-title">{{ title }}</h2>
          <HSTList/>
        </div>
    </section>
</template>

<script>
import HSTList from './HSTList.vue';
export default {
    name: "HomeSitesTypes",
    data() {
        return {
            title: "Выберите нужный вид сайта",
        };
    },
    methods: {},
    components: { HSTList }
}
</script>

<style scoped lang="scss">

</style>
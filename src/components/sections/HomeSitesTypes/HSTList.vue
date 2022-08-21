<template>
    <div class="list">
        <HSTListItem :key="item.name" v-for="item in items" :itemTitle="item.itemTitle"
            :itemDescription="item.itemDescription" :fullDescription="item.fullDescription" :idIcon="item.idIcon" />
    </div>
</template>

<script>
import HSTListItem from './HSTListItem.vue';
export default {
    name: "HSTList",
    data() {
        return {
            items: [
                {   
                    name:'lending',
                    itemTitle: 'Лендинг (Lending Page)',
                    itemDescription: 'Целевя промостраница для продвижения товара или услуги',
                    idIcon: 'target',
                    fullDescription:'Веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге.'
                },
                {
                    name: 'catalog',
                    itemTitle: 'Каталог товаров',
                    itemDescription: 'Сайт с возможностью демонстрации каталога продукции',
                    idIcon: 'catalog',
                    fullDescription:'Это вид коммерческого сайта, на котором представлен весь ассортимент компании с подробным описанием. Это прекрасный способ проинформировать покупателей о том, какие товары и услуги предоставляет предприятие. Такой ресурс ещё называют ветриной.'
                },
                {
                    name: 'shop',
                    itemTitle: 'Интернет магазин',
                    itemDescription: 'Современный интернет-магазин с возможностью оплаты товаров онлайн',
                    idIcon: 'cart',
                    fullDescription:'Сайт, торгующий товарами посредством сети интернет. Позволяет пользователям онлайн, в своём браузере или через мобильное приложение сформировать заказ на покупку, выбрать способ оплаты и доставки заказа, оплатить заказ.'
                },
            ]

        };
    },
    methods: {},
    components: { HSTListItem }
}
</script>

<style scoped lang="scss">
.list {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width:1050px) {
    .list {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
}

@media screen and (max-width:710px) {
    .list {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
}

</style>
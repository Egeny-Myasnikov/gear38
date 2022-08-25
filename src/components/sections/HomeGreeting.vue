<template>
    <section class="home-greeting">
        <div class="__container home-greeting-container">
            <div class="right-col">
                <img class="img" :src="image" :alt="title" />
            </div>
            <div class="left-col">
                <h1 class="page-title">{{title}}</h1>
                <p class="subTitle">
                    {{subTitle}}
                </p>
                <ButtonPrimary @click="modalWindowShow" classes="js-get-consultation">
                    Получить бесплатную консультацию
                </ButtonPrimary>
            </div>
        </div>
        <ModalWindow v-model:show="modalVisible" title="Свяжитесь со мной">
            <Tel />
            <FormCollback class="modal-form-collback" />
        </ModalWindow>
    </section>
</template>

<script>
export default {
    name: "HomeGreeting",
    data() {
        return {
            title: "Разработка сайтов под ключ",
            subTitle: "Создаю эффективные сайты, которые решают бизнес-задачи и приносят прибыль.Если вам нужен сайт для продаж или презентации компании — это мой профиль.При разработке я уделяю внимание: - изучению целевой аудитории - специфике вашего бизнеса - определяю, какие цели он должен выполнять.",
            image: require("@/assets/img/createSite.webp"),
            modalVisible:false
        };
    },
    methods: {
        modalWindowShow() {
            this.modalVisible = true
        }
    },
}
</script>

<style scoped lang="scss">

.home-greeting {
   
    &-container {
        display: flex;
        flex-direction: row-reverse;
        gap: 20px;
    }
}
.modal-form-collback{
    border-top:1px solid var(--secondColor);
}

.subTitle {
    margin: 50px 0;
    display: block;
}
@media screen and(max-width:1200px) {

    .home-greeting-container {
        flex-direction: row-reverse;

        .left-col {
            width: 100%;
        }

        .right-col {
            position: absolute;
            width: 100%;
            left: 0;
            right: 0;

            img {
                object-fit: cover;
                width: 100%;
                opacity: .1;

            }
        }
    }
}
</style>
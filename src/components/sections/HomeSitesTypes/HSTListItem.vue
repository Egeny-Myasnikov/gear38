<template>

    <div @click="modalWindowShow" class="item js-lending">
        <div class="item-title">
            <h3>{{itemTitle}}</h3>
            <Icon :idIcon="idIcon" :className="'item-title-svg item-title-svg__' + idIcon" />
        </div>
        <div class=" item-descr">
            <p>{{itemDescription}}</p>
        </div>
        <div class="item-btn">
            <ButtonPrimary>
                Подробнее
            </ButtonPrimary>
        </div>


    </div>
    <ModalWindow v-model:show="modalVisible" :title="itemTitle">
        <p>{{fullDescription}}</p>
        <div class="btn-container">
            <ButtonPrimary>
                Заказать
            </ButtonPrimary>    
            <ButtonSecondary>
                Смотреть примеры
            </ButtonSecondary>
        </div>
    </ModalWindow>

</template>

<script>
export default {
    name: "HSTListItem",
    data() {
        return {
            modalVisible: false

        };
    },
    props: {
        itemTitle: {
            type: String,
            required: true
        },
        itemDescription: {
            type: String,
            required: true
        },
        idIcon: {
            type: String,
            required: true
        },
        fullDescription: {
            type: String,
            required: true
        }
    },
    methods: {
        modalWindowShow() {
            this.modalVisible = true
        }
    },
}
</script>

<style scoped lang="scss">

.item {
    display: grid;
    align-content: space-between;
    min-width: 280px;
    min-height: 370px;
    padding: 20px;
    border-radius: var(--radius);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    transition: var(--trans03);

    &:hover {
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.3);
        transform: translateY(-20px);
        transition: var(--trans03);
        cursor: pointer;

    }

    &:nth-child(1) {
        background: var(--firstColor);
    }

    &:nth-child(2) {
        background: var(--secondColor);
    }

    &:nth-child(3) {
        background: var(--forthColor);
    }

    &-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.7094em;

        &-svg {
            fill: transparent;
            stroke: var(--blackColor);
            width: 70px;

            &__catalog {
                stroke: var(--thirdColor);
                fill: var(--thirdColor);
            }

            &__cart {
                fill: var(--thirdColor);
            }

            &__target {
                fill: var(--thirdColor);
            }
        }
    }

    &-descr {
        font-weight: bold;
    }

    &-btn {
        margin-top: 70px;

        button {
            width: 100%;
        }
    }
}
.btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

@media screen and (max-width:1050px) {

    .item {
        min-height: 200px;

        &:first-child {
            grid-area: 1/3/1/1;
            min-height: 50px;
        }
    }
}

@media screen and (max-width:710px) {


    .item:first-child {
        grid-area: 1/1/1/1;
    }
}

@media screen and(max-width:400px) {
    .item-title-svg {
        width: 50px;
    }

}
</style>
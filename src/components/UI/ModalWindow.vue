<template>
    <div v-overflowHidden class="modal-window" v-if="show" @click="hideModal">
        <div @click.stop class="modal-window-wrap">
            <span @click="hideModal" class="btn-close"></span>
            <div class="title">
                {{ title }}
            </div>
            <div class="content">
                <slot>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalWindow',
    props: {
        show: [Boolean],
        title: [String]
    },
    methods: {
        hideModal() {
            this.$emit('update:show', false)

        }
    }
}
</script>

<style lang="scss">
.modal-window {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20000;
    display: grid;
    opacity: 1;
    visibility: visible;
    place-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--whiteColor);
    transition: var(--trans03);


    &-wrap {
        width: 50vw;
        max-height: 100vh;
        padding: 20px;
        border-radius: var(--radius);
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        display: grid;
        grid-template-columns: auto 40px;
        transform: scale(1);
        transition: var(--trans03);

        @media screen and (max-width:1050px) {
            width: 70vw;
        }

        @media screen and (max-width:710px) {
            width: 80vw;
        }

        @media screen and (max-width:400px) {
            width: 90vw;
            padding: 15px;
            font-size: 0.9em;
        }

        .btn-close {
            transform: translate(50%, -50%);
            position: absolute;
            right: 0;
            top: 0;
            width: 25px;
            height: 25px;
            background-color: #fff;
            box-shadow: inset 2px 2px 10px rgba(75, 0, 250, 0.2);
            border-radius: 30%;
            display: grid;
            place-items: center;
            cursor: pointer;
            transition: var(--trans03);

            &:hover::after {
                transform: rotate(55deg);
            }

            &:hover::before {
                transform: rotate(-55deg);
            }

            &::after,
            &::before {
                content: '';
                background-color: #000;
                width: 70%;
                height: 1px;
                grid-row-start: 1;
                grid-row-end: 2;
                grid-column-start: 1;
                grid-column-end: 2;
                transform-origin: center;
                transition: var(--trans03);

            }

            &::after {
                transform: rotate(45deg);

            }

            &::before {
                transform: rotate(-45deg);
            }

            @media screen and (max-width:400px) {
                width: 15px;
                height: 15px;

            }
        }

        .title {
            padding: 5px 0;
            margin-bottom: 30px;
            color: var(--secondColor);
            border-bottom: 1px solid var(--secondColor);
        }

        .content {
            font-size: 1em;
            grid-column: 1/-1;
            display: grid;
            gap: 35px;



            .phone {
                color: var(--whiteColor);

                &-svg {
                    fill: var(--whiteColor);
                }
            }

            .link::after {
                background-color: var(--whiteColor);
            }
        }
    }
}
</style>
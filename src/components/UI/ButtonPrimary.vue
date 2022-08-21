<template>
    <button :disabled="disabled" class="btn-primary" :type="type" :class="classes">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ButtonPrimary',
    props: {
        classes: { type: String },
        type: { type: String },
        disabled: { type: Boolean }
    }
}
</script>

<style lang="scss" scoped>

.btn-primary {
    border-radius: 5px;
    background-color: var(--thirdColor);
    padding: 15px 30px;
    font-size: 1em;
    padding-right: 12%;
    color: var(--whiteColor);
    border: none;
    position: relative;
    cursor: pointer;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, .3);
    transition: var(--trans03);
    &:disabled{
        color:#ccc;
        background-color: #999;
        cursor: default;
    }

    &::after {
        content: "";
        background-color: var(--whiteColor);
        width: 20px;
        height: 1px;
        position: absolute;
        right: 15px;
        top: 50%;
        transition: var(--trans03);
        @media screen and(max-width:400px) {
                width: 15px;
                right: 8px;
            }
    }
        &:hover::after {
            width: 40px;
            transition: var(--trans03);
        }
        &:disabled:hover::after {
            width: 20px;
            transition: var(--trans03);
        }
    }

</style>
<template>
    <button class="btn-secondary" :type="type" :class="classes">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ButtonSecondary',
    props: {
        classes: { type: String },
        type: { type: String }
    }
}
</script>

<style lang="scss" scoped>



.btn-secondary {
    font-size: 1em;
    position: relative;
    border: none;
    background-color: var(--secondColor);
    border-bottom: 1px solid var(--secondColor);
    border-top: 1px solid var(--secondColor);
    padding: 15px 30px;
    padding-right: 12%;
    border-radius: 10px;
    cursor: pointer;
    transition: var(--trans03);

    &::after {
        content: "";
        background-color: var(--blackColor);
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
}

</style>
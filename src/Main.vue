<template>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    components: {
},
    methods: {

    }
}
</script>

<style lang="scss">





// vars
:root {
    --mainColor: #333;
    --firstColor: #FFF6D3;
    --secondColor: #B5D5FF;
    --thirdColor: #493CA6;
    --forthColor: #C1B9FF;
    --blackColor: #2f2f2f;
    --whiteColor: #fafafa;
    --trans05: .5s linear;
    --trans03: .3s linear;
    --svgWidthLargeDesctop: 25px;
    --svgHeightLargeDesctop: 25px;
    --radius: 10px;
}

// fonts
@font-face {
    font-family: Montserrat;
    src: url(@/assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf);
}

// main styles
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(var(--forthColor), var(--thirdColor), var(--forthColor));

    }

}

body {
    font-family: 'Montserrat';
    font-size: 16px;
    color: var(--blackColor);
    line-height: 1.5;

    @media screen and(max-width:400px) {
        font-size: 14px;
    }
}

button {
    color: var(--blackColor);
    background: transparent;
    border: none;
}

a {
    text-decoration: none;
    color: var(--blackColor);
}

section {
    margin-top: 100px;
}

.vk {
    fill: #0085FF;
}

.whatsapp {
    fill: #00FF38;

}

.telegram {
    fill: #00D1FF;
}

.link {
    transition: color var(--trans05);
    position: relative;

    &::after {
        content: "";
        width: 0%;
        height: 1px;
        background-color: #000;
        position: absolute;
        bottom: -3px;
        left: 0;
        transition: width var(--trans03);
    }

    &:hover {
        color: #000;
        transition: color var(--trans05);

        &::after {
            width: 80%;
            transition: width var(--trans03);
        }
    }
}

.page-title {
    font-size: 2.2em;
    position: relative;
    margin-bottom: 50px;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -7px;
        width: 80%;
        height: 2px;
        background-color: var(--blackColor);

    }
}



.btn-secondary {
    font-size: 1.2em;
    border: none;
    background-color: transparent;
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    transition: var(--trans03);

    &:hover,
    &.active {
        background-color: var(--forthColor);
        transition: var(--trans03);

    }
}

.svg-small {
    width: 30px;
    height: 30px;
}

.svg-medium {
    width: 60px;
    height: 60px;
}

.svg-large {
    width: 40px;
    height: 40px;
}

.phone-svg {
    width: 18px;
    height: 18px;
    fill: var(--thirdColor);
}

input[type="tel"] {
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;

    &::placeholder {
        color: rgb(200, 200, 200);
    }
}

input[type="checkbox"] {
    margin: 0 10px;
}

.wrapper {
    background: linear-gradient(45deg, var(--firstColor), var(--secondColor));
    width: 100%;
    min-height: 100vh;
}
.overflow {
    overflow: hidden;
}

.__container {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
}
</style>
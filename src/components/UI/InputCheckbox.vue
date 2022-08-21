<template>
    <label :for="id">
        <input 
         @input="(event) => $emit('update:checked', event.target.checked)"
        :required="required"
        :checked="checked" 
        type="checkbox" 
        :name="id" 
        :id="id" />
        <span></span>
        <i class="indicator"></i>
       <slot/>
    </label>
</template>

<script>
    export default {
    name: 'InputCheckbox',
    props: {
        id: {
            String
        },
        checked: {
            type: Boolean,
            default:true
        },
        required:{
            type:Boolean
        }  

    }
    }
</script>

<style lang="scss" scoped>
label {
    position: relative;
    margin: 5px 0;
    cursor: pointer;
    input {
        appearance: none;
        display: none;

        &:checked~.indicator {
            left: 20px;
        }

        &:checked~.indicator::before {
            background: #0f0;
            box-shadow: 0 0 2px #0f0,
                0 0 5px #0f0,
                0 0 10px #0f0,
                0 0 15px #0f0,
                0 0 20px #0f0,
                0 0 25px #0f0,
                0 0 30px #0f0,
                0 0 40px #0f0;
        }

        &:checked~span {
            background: rgba(0, 255, 0, 0.7);

        }
    }

    span {
        display: block;
        position: relative;
        width: 40px;
        height: 20px;
        background: rgba(255, 0, 0, 0.1);
        border-radius: 20px;
        box-shadow: inset 0 2px 15px rgba(0, 0, 0, .4), inset 0 2px 2px rgba(0, 0, 0, .4), inset 0 -1px 1px rgba(0, 0, 0, .4);
        transition: .5s;
    }

    .indicator {
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        background: linear-gradient(to bottom, #444, #222);
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .5),
            inset 0 1px 1px rgba(255, 255, 255, .1);
        transition: .5s;

        &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            transition: .5s;
            background: #f00;
            box-shadow: 0 0 2px #f00,
                0 0 5px #f00,
                0 0 10px #f00,
                0 0 15px #f00,
                0 0 20px #f00,
                0 0 25px #f00,
                0 0 30px #f00,
                0 0 40px #f00;
        }
    }
}
</style>
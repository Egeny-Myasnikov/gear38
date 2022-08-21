<template>

    <div class="collback">
        <h3>
            Оставьте свой номер телефона <br />
            и я перезвоню Вам <br />
            в течении 5-10 минут
        </h3>
        <form @submit.prevent class="form-collback">
            <InputPhone required v-model="phone" v-model:value="phone" />

            <InputCheckbox :required="true" :checked="checked" class="agreement" id="checkbox"
                v-model:checked="checked">
                    <span v-if="checked === true">Я даю согласие на обработку персональных данных</span>
                   <span v-if="checked === false" class="unagreement">Для отправки телефона необходимо дать согласие</span>
            </InputCheckbox>

            <div class="btn-container">
                <ButtonPrimary :disabled="btnDis" type="submit">Отправить</ButtonPrimary>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: "FormCollback",
    
    data() {
        return {
            phone: "",
            checked: true,
            btnDis: false
        };
    },
    unmounted() {

    },
    updated(){
        this.checked ? this.btnDis= false: this.btnDis= true
    },
    methods: {
        
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.collback {
    padding: 20px;
    width: 100%;
    display: grid;
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    border-radius: var(--radius);
}

@media screen and(max-width:700px) {

    .collback {
        width: 100%;
    }

}

.form-collback {
    display: grid;
    gap: 10px;

    .agreement {
        margin-bottom: 30px;
        color: green;
    }

    .unagreement {
        color: red;
    }
}
</style>

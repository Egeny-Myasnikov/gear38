<template>
    <div class="filter">
            <button data-type="type1" @click="getDataType" class="btn-types">{{getType}}lending</button>
            <button class="btn-types">catalog</button>
            <button class="btn-types">shop</button>
    </div>
</template>

<script>
    export default {
        name:'Filter',
        data:()=>({
            arrObjs:[
                {type:'type1', id:1},
                {type:'type2', id:2},
                {type:'type3', id:3}
            ],
            
        }),
        props:{
           
        },
        methods:{
            // getType(arrObjs){
            //     arrObjs.filter(obj=> obj.type==='type1'? console.log(obj.type) : '')
            // },
            getDataType(){
                console.log(this.getType);
            }
        }
    }
</script>

<style lang="scss" scoped>
.filter{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    padding: 10px;
    border-top:1px solid var(--thirdColor);
    border-bottom:1px solid var(--thirdColor);
}
.btn-types{
    background-color: #fff;
    padding: 10px 15px;
    border-radius:var(--radius);
    box-shadow: 0 1px 3px #333;
    cursor: pointer;
    font-size: 1.1em;
    transition:.4s;
    &:hover{
    box-shadow: none;

    }
}

</style>
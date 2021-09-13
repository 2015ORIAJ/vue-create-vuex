<template>

    <h1 class="align-self-center">No hay nada seleccionado</h1>

<Fab/>
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        Fab: defineAsyncComponent(()=>import('../components/fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
div{
    height:100%
}
</style>
<template>
  <div
  @click="$router.push({name:'entry',params:{id:10}})"
   class="entry-container mb-3 pointer p-2">
      <div class="entry-title d-flex">
          <span class ="text-succes fs-5 fw-bold">15</span>
          <span class="mx-1 fs-5">Julio</span>
          <span class="mx-2 fw-light" >2021,jueves</span>
      </div>
      <div class="entry-descripcion">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eum blanditiis voluptates tenetur deleniti velit recusandae, eligendi consequatur necessitatibus. Neque, consequatur. Deleniti esse repudiandae nobis ducimus quibusdam nostrum perferendis quo.</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition:  0.2s all ease-in;
        &:hover{
            background-color: lighten($color: grey, $amount:25);
            transition:  0.2s all ease-in;
        }
        .entry-descripcion{
            font-size : 12px
            
            }
        }
        
</style>
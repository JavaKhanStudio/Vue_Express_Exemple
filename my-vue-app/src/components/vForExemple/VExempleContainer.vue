<template>
    <div class="container">
      <h1 class="my-comp">Ma V List</h1>
      <VForExemple v-for="(myValue, index) in list" :key="myValue" :requiredVariable="index" :initialParams="myValue.params" :possible-variable="myValue.params.color" />
    </div>
</template>
  
  <script>
    import VForExemple from './VForExemple.vue';
    export default {

      components: {
        VForExemple
      },
      name: 'Container_VFor',
      data() {
        return {
          list: [
            { params: { color: "Le jaune c'est tres bien" }},
            { params: { color: '' } },
            { params: { color: "Le rouge c'est encore mieux" } },
            { params: { color: ''} }
          ]
        }
      },
    };
  </script>
    
  <style scoped>
    .container {
      display: flex; 
      padding-bottom: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    
    .my-comp {
      font-size: 30px; 
      font-family: Arial, sans-serif;
      color: tomato;
    }
  </style>
  
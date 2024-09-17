<template>
    <div class="container">
      <h1 class="my-comp">List</h1>
      <VForExemple v-for="(myValue, index) in list" :key="myValue" :requiredVariable="index" :initialParams="myValue.params" />
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
            { params: { color: 'yellow', fontSize: '38px' }},
            { params: { color: 'purple', fontSize: '48px' } },
            { params: { color: 'crimson', fontSize: '30px' } },
            { params: { color: 'aqua', fontSize: '30px' } }
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
      color: aqua;
    }
  </style>
  
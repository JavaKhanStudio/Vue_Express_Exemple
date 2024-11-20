<template>
    <div class="container">
      <button @click="emitButton()">Emit</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmitComponent',
    methods: {
      emitButton() {
        this.$emit('emit-method', "Variables");
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .my-comp {
    font-size: 30px; 
    font-family: Arial, sans-serif;
    color: tomato;
  }
  </style>
  
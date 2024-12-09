<template>
    <div class="container">
      <button @click="emitButton()">Emit : {{ paramToEmit }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmitComponent',
    props: {
      paramToEmit: {
        type: String,
        required: true
      },
    },
    methods: {
      emitButton() {
        this.$emit('emit-method', `L'appel de la méthode viens de EmitComponent.vue, pas du parent !  ${ this.paramToEmit }`);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .my-comp {
    font-size: 30px; 
    font-family: Arial, sans-serif;
    color: tomato;
  }
  </style>
  
<template>
    <div class="container">
        <button @click="internalButton()">Internal</button>
        <EmitComponent @emit-method="emitMethod" param-to-emit="Le Param 1"/>
        <EmitComponent @emit-method="emitMethod" param-to-emit="Le deuxième param 1"/>
    </div>
  </template>
  
  <script>
import EmitComponent from './EmitComponent.vue';

  export default {
    components: {EmitComponent},
    name: 'ElementInternalAndEmit',
    methods: {
        internalButton() {
            alert("Mon code est dans ElementInternalAndEmit.vue !");
        },
        emitMethod(variable) {
          alert(variable) ;
        }
    }
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
    color: aqua;
  }
  </style>

  <style>
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  </style>
  
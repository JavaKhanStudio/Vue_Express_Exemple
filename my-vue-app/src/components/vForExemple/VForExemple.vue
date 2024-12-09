<template>
    <div class="container">
      <h1 class="my-comp">Element {{ requiredVariable }}</h1>
      <p>{{ possibleVariable }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VForExemple',
    props: {
      requiredVariable: {
        type: Number,
        required: true
      },
      possibleVariable: {
        type: String,
        required: false
      },
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
    color: darkcyan;
  }
  </style>
  
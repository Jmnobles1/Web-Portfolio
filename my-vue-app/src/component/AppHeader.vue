<template>
  <header class="modern">
    <div class="header-container">
      <div class="text">
        <h1>Networking Project</h1>
        <p>Networking can be fun</p>
      </div>
    </div>
  </header>
</template>
  
  <script>
  export default {
    name: 'AppHeader',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

   
  .modern{
    background-color:#cce7ff;
    color:white; 
    width:100%;
    z-index:1000;
    padding:10px 0;
    box-shadow:0 4px 6px rgba(0,0,0,0.3);
    box-sizing: border-box;
  }
  .header-container{
    margin-left:0 auto;
    justify-content: space-between;
    align-items:center;
    display:flex;
    max-width:1200px;
  }

  .text{
    flex-direction:column;
    padding-left:20px;
    color:#263238;
  }
  .text h1{
    font-size:2.2rem;
    margin:0;
    flex-grow:1;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    font-weight:700;
  }
  .text p{
    font-size:1.2rem;
    opacity:0.8;
    font-weight:400;
    text-align: center;
    margin:0;
  }
  </style>
  
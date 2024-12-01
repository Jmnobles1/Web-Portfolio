<template>
  <header class="modern">
    <div class="header-container">
      <div class="text">
        <h1>Project Webpage</h1>
        <p>Computer Networks are cool</p>
      </div>
    </div>
  </header>
</template>
  
  <script>
  export default {
    name: 'AppHeader',
  }
  </script>
 
  <style scoped>
  .modern {
    background-image: url("@/assets/nfl.jpg"); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    color: white;
    width: 100%;
    z-index: 1000;
    padding: 10px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    position: relative;
  }
  
  .modern::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); 
    z-index: 1; 
  }
  
  .header-container {
    margin-left: 0 auto;
    justify-content: space-between;
    align-items: center;
    display: flex;
    max-width: 1200px;
    z-index: 2; 
  }
  
  .text {
    flex-direction: column;
    padding-left: 50px;
    color: white;
    position: relative;
    z-index: 3; 
  }
  
  .text h1 {
    font-size: 2.2rem;
    margin: 0;
    flex-grow: 1;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    font-weight: 700;
  }
  
  .text p {
    font-size: 1.2rem;
    opacity: 0.8;
    font-weight: 400;
    text-align: center;
    margin: 0;
  }
  </style>
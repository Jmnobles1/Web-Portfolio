<template>
  <div class="about-container">
    <div class="header">Software Engineer</div>
      <div class="title">
        <h1>Hello, I'm <span id="title">Jaden Nobles</span></h1>
      </div>
        <div class="info">
          <span>Software engineer experienced in developing and maintaining scalable, reliable applications. 
              I’m passionate about writing code, solving real-world problems, and continuously learning new technologies.
          </span>
        </div>
        
        <div class="socialIcons">
          <a href="https://www.linkedin.com/in/jadennobles/" target="_blank" class="icon-button linkedin">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/jmnobles1" target="_blank" class="icon-button github">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:jadennobles13@gmail.com" class="icon-button email">
            <i class="fas fa-envelope"></i>
          </a>
        </div>

        <div class="resume-button">
          <a href="/Resume.pdf" target="_blank" class="resume">
            <span id="download"><i class="fas fa-file"></i>Download Resume </span>
          </a>
        </div>
  </div>
</template>
  
  <script>
  export default {
    name: "AboutPage",
    data() {
      return {
        
      }
    },
    methods: {
   },
  };
  </script>
  
<style scoped>

.resume-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin: 0 10px;
  margin-top: 100px;
  color: #333;
  text-decoration: none;
  border:transparent;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: fit-content;
  height:auto;
  font-weight: 500;
  padding: 15px;
  border-radius: 15px;
  background-color: #1d2b9f;
  text-align: center;
}

.resume-button i,#download{
  padding-right: 10px;
  color:white;
}

.icon-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  margin: 0 10px;
  border: 2px solid #1d2b9f;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.icon-button:hover {
  transform: translateY(-2px);
  background-color: #e0e0e0;
}

.icon-button i {
  font-size: 18px;
  color:#1d2b9f;
}

.socialIcons{
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
 .info{
  margin-top: 30px;
  font-size: clamp(14px, 2vw, 20px);;
  font-family: 'Courier New', Courier, monospace;
  max-width: 800px;
 }
  #title{
    color: #1d2b9f;
  }
  .about-container{
    max-width:100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    padding-left: 0;
    margin-left: 0;
    padding-top: 1px;
    box-sizing: border-box;
  }
  .header{
    position: relative;
    font-size: clamp(17px, 2vw, 22px);
    color:black;
    width:fit-content;
    padding:5px;
    color:#1d2b9f;
    font-weight: 500;
    background-color: rgba(101, 168, 255, 0.2);
    border-radius: 10px;
    border-left:2px solid #1d2b9f;
    border-bottom: solid 1px #1d2b9f
  }
  .title{
    margin-top: 35px;
    position: relative;
    letter-spacing: none;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    color: black;
  }

  .title h1 {
    font-size: clamp(45px, 5vw, 45px);
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    line-height: 1.2; 
    word-spacing: -1px;
    max-width: 100%;
    overflow-wrap: break-word;
  }

  @media (max-width:896px){
    .about-container{
      margin-top: 50px;
    }
    .header{
      font-size: 15px;
    }
    .title h1{
      font-size: clamp(30px, 5vw, 45px);
      line-height: 1.3;
    }
  }
</style>
  
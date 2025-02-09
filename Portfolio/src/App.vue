<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css">
  <title>Portfolio Webpage</title>

  <AppHeader/>

  <body>
    <section id='home' class="home">
        <div class="home-img">
            <img src="./assets/image.png" alt="">
        </div>
        <div class="home-content">
            <h1><span> Jaden Nobles </span></h1>
            <h3 class="typing-text">A <span></span></h3>
            <p>I am a Senior Computer Science student attending NC A&T State University 
              and a current Software Engineering intern at State Farm. I have a deep passion and interest in
              web development, software engineering, and AI & Machine Learning. I am eager to continue learning
              more in the world of technology and currently working toward more oppurtunities and continued growth in the field.
            </p>
            <div class="social-icons">
                <a href="https://www.linkedin.com/in/jadennobles/" target="_blank">Linkedin <i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Jmnobles1" target="_blank">GitHub<i class="fa-brands fa-github"></i></a>
                <a href="mailto:jmnobles1@aggies.ncat.edu" >Email<i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
    </section>

    <section id="skill">
      <SkillPage/>
    </section>
    <section id="education">
      <EducationPage/>
    </section>
    <section id="experience">
      <ExperiencePage/>
    </section>
  </body>
  
</template>

<script>
import AppHeader from './component/AppHeader.vue';
import EducationPage from './components/EducationPage.vue';
import ExperiencePage from './components/ExperiencePage.vue';
import SkillPage from './components/SkillPage.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SkillPage,
    ExperiencePage,
    EducationPage,
  }
}
</script>

<style>
@import "../src/assets/style.css";
</style>

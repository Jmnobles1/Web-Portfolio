<template>
  <div class="page-layout">
    <AppHeader/>
    

    <div class="main-content">
      <section id="about">
        <AboutPage/>
      </section>

      <section id="education">
        <EducationPage/>
      </section>

      <section id="experience">
        <ExperiencePage/>
      </section>

      <section id="projects">
        <ProjectPage/>
      </section>

      <section id="skills">
        <SkillPage/>
      </section>

      <section id="courses">
        <CoursePage/>
      </section>

      <section id="contact">
        <ContactPage/>
      </section>

      <footer class="footer">
        Copyrights &copy; <span style="color:#1d2b9f">Jaden Nobles</span> / Last updated 2025
      </footer>
    </div>
  </div>
</template>
  
<script>
import AppHeader from '../component/AppHeader.vue';
import AboutPage from './AboutPage.vue';
import ContactPage from './ContactPage.vue';
import CoursePage from './CoursePage.vue';
import EducationPage from './EducationPage.vue';
import ExperiencePage from './ExperiencePage.vue';
import ProjectPage from './ProjectPage.vue';
import SkillPage from './SkillPage.vue';
  
  export default {
    name: 'HomePage',
    components: {
      AppHeader,
      SkillPage,
      ExperiencePage,
      EducationPage,
      ProjectPage,
      AboutPage,
      CoursePage,
      ContactPage
    },
  }
</script>
  
  <style>
  @import "../assets/style.css";

  .page-layout{
    display:flex;
    align-items: stretch;
    width: 100%;
  }

  section#about{
    border-bottom: 1px solid #e0e0e0;
    background-color: #f5f5f5;
  }
  section#education{
    border-bottom: 1px solid #e0e0e0;
  }
  section#experience{
    border-bottom: 1px solid #e0e0e0;
    background-color: #f5f5f5;
  }
  section#projects{
    border-bottom: 1px solid #e0e0e0;
  }
  section#skills{
    border-bottom: 1px solid #e0e0e0;
    background-color: #f5f5f5;
  }
  section#courses{
    border-bottom: 1px solid #e0e0e0;
  }
  section#contact{
    border-bottom: 1px solid #e0e0e0;
    background-color: #f5f5f5;
  }

  .main-content{
    flex:1;
    padding: 0px;
    margin-left: 275px;
    box-sizing: border-box;
  }

  .footer {
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  color: black;
  background-color: #f5f5f5;
  border-top: 1px solid #000000;
}

  @media (max-width:896px){
    .page-layout{
      display:flex;
      flex-direction: column;
    }

    .main-content{
      margin-left: 0;
      margin-top: 50px;
    }
}

  </style>
  
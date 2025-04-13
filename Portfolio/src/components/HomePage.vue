<template>
  <div class="page-layout">
    <AppHeader/>
    

    <div class="main-content">

      <!--
      <section id="about">
        <AboutPage/>
      </section>
      -->

      <!--
      <section id="education">
        <EducationPage/>
      </section>
      -->

      <section id="experience">
        <ExperiencePage/>
      </section>

      <section id="skill">
        <SkillPage/>
      </section>

      <!--
      <section id="experience">
        <CoursePage/>
      </section>
      -->

      <!--
      <section id="contact">
        <ContactPage/>
      </section>
      -->


    </div>
  </div>
</template>
  
<script>
  import AppHeader from '../component/AppHeader.vue';
import ExperiencePage from './ExperiencePage.vue';
import SkillPage from './SkillPage.vue';
  
  export default {
    name: 'HomePage',
    components: {
      AppHeader,
      SkillPage,
      ExperiencePage,
      //EducationPage,
      //AboutPage,
      //CoursePage,
      //ContactPage
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

  .main-content{
    flex:1;
    padding: 20px;
    margin-left: 250px;
    box-sizing: border-box;
  }

  @media (max-width:768px){

    .page-layout{
      display:flex;
      flex-direction: column;
    }

    .main-content{
      padding: 20px;
      margin-left: 0;
      margin-top: 50px;
    }
}

  </style>
  
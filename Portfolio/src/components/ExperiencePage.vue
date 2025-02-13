<template>
    <div class="page-title">
        <h1 >Work Experience</h1>
    </div>
    <div class="experience-container">
      <!-- Work Experience Title -->
  
      <div class="tabs-container">
        <div
          class="tab"
          :class="{ active: selectedTab === index }"
          v-for="(job, index) in jobs"
          :key="index"
          @click="selectTab(index)"
        >
          <img :src="job.companyImage" alt="Company Logo" class="company-logo" />
          <h3 class="job-title">{{ job.jobTitle }}</h3>
          <p class="company-name">{{ job.companyName }}</p>
        </div>
      </div>
  
      <div class="job-info-container">
        <transition name="container-transition" mode="out-in">
          <div class="job-info" :key="selectedTab">
            <h2 class="job-title">{{ jobs[selectedTab].jobTitle }} - {{ jobs[selectedTab].companyName }}</h2>
            <p class="job-duration">{{ jobs[selectedTab].duration }}</p>
            <div class="job-details">
              <p v-for="(detail, index) in jobs[selectedTab].details" :key="index" class="job-detail">{{ detail }}</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ExperiencePage",
    data() {
      return {
        selectedTab: 0,
        jobs: [
          {
            jobTitle: "Software Engineer Intern",
            companyName: "State Farm",
            companyImage: require('@/assets/sf.png'),
            duration: "May 2024 - Present",
            details: [
              "Utilized technologies such as Vue.js, HTML, CSS, TypeScript and front-end frameworks such as bootstrap and 1x for front-end development",
              "Leveraged Prisma for database creation and management",
              "Designed and implemented API routes for data integration.",
              "Implemented ROSA (Red Hat OpenShift Service on AWS) in order to better scale and manage the deployment of application containers.",
              "Collaborated with team members in an agile development environment attending stand-ups, backlog grooming’s, sprint planning’s, and more."
            ]
          },
          {
            jobTitle: "Data Analyst Intern",
            companyName: "Brighthouse Financial",
            companyImage: require('@/assets/Brighthosue-Life-Logo.webp'),
            duration: "May 2023 - August 2023",
            details: [
              "Built a streamlined ad-hoc query reporting process with python and SQL that allowed for more efficient actuarial reporting across my team",
              "Utilized tools such as Jupyter Notebook , Excel and database software such as MySQL in order to pull in and manipulate data from a large database ",
              "Created interpolation methods using python to produce results for analyzing risk, index values and to build more accurate reports",
            ]
          },
        ]
      };
    },
    methods: {
      selectTab(index) {
        this.selectedTab = index;
      }
    }
  };
  </script>
  
  <style scoped>
  .experience-container {
    display: flex;
    gap: 6rem;
    padding: 3rem 10%;
  }
  
  .page-title {
    margin-top: 100px;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: lightgreen;
    margin-bottom: 2rem;
  }
  
  .tabs-container {
    width: 35%;
    background: #333;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  }
  
  .tab {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .tab:hover {
    background-color: #444;
  }
  
  .tab.active {
    background-color: #222;
    color: lightgreen;
  }
  
  .company-logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  .job-title {
    font-size: 2rem;
    color: white;
    font-weight: 700;
  }
  
  .company-name {
    font-size: 1.5rem;
    color: lightgray;
  }
  
  .job-info-container {
    width: 65%;
    background: #1a1a1a;
    border-radius: 12px;
    padding: 2.5rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  
  .container-transition-enter-active,
  .container-transition-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .container-transition-enter, 
  .container-transition-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  
  .job-info h2 {
    font-size: 3rem;
    color: lightgreen;
    margin-bottom: 1.5rem;
  }
  
  .job-duration {
    font-size: 1.5rem;
    color: gray;
    margin-bottom: 2.5rem;
  }
  
  .job-details {
    font-size: 1.3rem;
    color: white;
  }
  
  .job-detail {
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 1024px) {
    .experience-container {
      flex-direction: column;
      gap: 3rem;
    }
  
    .tabs-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  
    .job-info-container {
      width: 100%;
    }
  }
  </style>
  
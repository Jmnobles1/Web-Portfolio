<template>
  <div class="experience">
    <div class="header">Experience</div>

    <div class="experience-content" v-for="(experience, index) in experiences" :key="index">
      <div class="experience-info">
        <div class="image-content">
          <img :src="experience.image" alt="Company Logo" width="210" :height="experience.company === 'State Farm' ? 120:150"/>
        </div>
        <div class="text-content">
          <div class="experienceInfo">
            <h2 style="font-size: 17px; display: block;">{{experience.name}}</h2>
            <p style="display: block;"><i class="fa-solid fa-calendar-days"></i> {{experience.date}}</p>
            <p style="display: block;"><i class="fa-solid fa-location-dot"></i> {{experience.location}}</p>
          </div>
        </div>
      </div>
      <div class="description">
        <ul>
          <li v-for="(item,i) in experience.description" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperiencePage",
  data() {
    return {
      experiences: [
        { company: "State Farm", name: "Software Engineer", date: "June 2025 - Present", location: "Remote",
          description: ["Incoming"], image: require("../assets/statefarm.png")
        },
        { company: "State Farm", name: "Software Engineer Intern", date: "May 2024 - April 2025", location: "Remote",
        description: ["Rebuilt an internal IT compliance reporting tool used by standard owners to generate adherence reports, enhancing usability and data accuracy",
          "Implemented frontend components, API routes, and database integration to enable dynamic report generation; worked on deploying and maintaining the application using ROSA (Red Hat OpenShift on AWS).",
          "Utilized frameworks such as Vue.js, bootstrap, & 1x and languages like HTML, CSS, & TypeScript for front-end development.",
          "Leveraged Prisma for database creation and management, and integrated REST APIs for data retrieval and manipulation.",
          "Prepared technical documentation on application architecture, deployment processes, and researching findings for new technologies.",
          "Collaborated with teams to gather requirements and ensure alignment with business objectives. Participated in code reviews, planning sessions, standup meetings and more.",
          ], image: require("../assets/statefarm.png")
        },
        { company: "Brighthouse Financial", name: "Data Analyst Intern", date: "May 2023 - August 2023", location: "Remote",
        description: ["Built an ad-hoc reporting system using Python and SQL to streamline actuarial data analysis and reporting processes across the team.",
          "Automated data extraction and transformation from large databases using Jupyter, Excel, and MySQL, reducing manual effort across the team.",
          "Created interpolation methods using python to produce results for analyzing risk, index values and to build more accurate reports",
          ], image: require("../assets/brighthouse.png")
        },
      ],
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.experienceInfo{
  padding: 20px 0;
  display: block;
}
.experienceInfo h2{
  font-size: 17px;
  padding-bottom: 5px;
  display: block;
}
.experienceInfo p{
  padding-bottom: 5px;
  display: block;
  margin-bottom: 5px;
}

.description{
  width:100%;
  height: auto;
  margin-top: 10px;
  padding:5px;
  background-color: rgba(1, 26, 250, 0.1);
  border-radius: 6px;
}
.description ul{
  list-style-position: inside;
  padding-left:1rem;
  padding-top: 10px;
  margin:0;
}
.description li{
  padding:10px;
  font-size: 15px;
  align-items: left;
}
.experience {
  width:100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  padding-left: 0;
  height: 100%;
  margin-left: 0;
  color:black;
  padding-top: 1px;
  box-sizing: border-box;
}
.text-content{
  padding-top: 10px;
  width: 100%;
  flex: 1;
}

.image-content {
  display: flex;
  padding-top: 10px;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 0 0 120px;
}

.header {
  position: relative;
  font-size: clamp(25px, 2vw, 40px);
  font-weight: 600;
  width: 100%;
  color: #1d2b9f;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.header::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: linear-gradient(to right, #1d2b9f, transparent);
  opacity: 0.5;
}

.experience-info {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
}

.experience-content {
  margin-top: 20px;
  width: 100%;
  height: auto;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  min-height: unset;
  justify-content: flex-start;
  transition: transform 0.3s ease-in-out;
}

.experience-content:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .experience-info {
    flex-direction: column;
    align-items: center;
  }

  .text-content {
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
  }

  .image-content {
    width: 100%;
    justify-content: center;
    flex: 0 0 150px;
  }

  .experienceInfo {
    padding: 10px 0;
    text-align: left;
    display: block !important;
  }

  .experienceInfo h2, 
  .experienceInfo p {
    text-align: left;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    height: auto !important;
    overflow: visible !important;
    margin-bottom: 5px !important;
  }
}
</style>
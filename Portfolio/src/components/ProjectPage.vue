<template>
  <div class="project">
    <div class="header">Recent Projects</div>
    <div class="rowcards">
      <div class="project-content" v-for="(experience, index) in experiences" :key="index">
        <div class="project-info">
          <div class="image-content">
            <img :src="experience.image" alt="Company Logo" height="150px"/>
          </div>
          <div class="text-content">
            <div class="projectInfo">
              <h2 style="font-size: 17px; display: block;">{{experience.project}}</h2>
              <div class="skill-buttons">
                <div class="skill-tags" v-for="(skill, index) in experience.skills" :key="index">
                  <span id="skills">{{skill}}</span>
                </div>
              </div>
              <p style="display: block;"> {{experience.description}}</p>
            </div>
          </div>
        </div>
        <div class="skill-buttons">
          <div class="repo" v-for="(button, index) in experience.buttons" :key="index">
            <a :href="experience.links[index]" target="_blank">
              <span id="source"><i :class="experience.icons[index]"></i> {{button}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  data() {
    return {
      experiences: [
        { project: "Code Guardian", skills: ["React", "Typescript","XSS/SQL Injection", "Web Development", "Data Storage", "Unit Testing", "Architecture/System Design"], buttons: ["Source Code", "View Site"], icons: ["fab fa-github","fas fa-globe"],
          description: "Code Guardian is a web-based educational game that teaches developers about real-world security vulnerabilities through hands-on coding challenges. Built with technologies like React, TypeScript, and Deno, it features a full-stack architecture with integrated testing and performance tools.", 
          image: require("../assets/guardian.png"),links:["https://github.com/NCAT-CTRL-ALT-DELETE/Vulnerability-Game","https://www.cg6n.xyz/"]
        },
        { project: "Danger Room", skills: ["C#","Game Design","Game Physics","UI Design","Unity Engine"], buttons: ["Install Game"], icons: ["fas fa-download"],
          description: "Danger Room is a 3D third-person platformer where players navigate five challenging levels filled with traps and moving platforms. The goal is to reach the end with the fewest deaths while collecting hidden coins. Built in Unity with C#, the game features responsive movement, checkpoint respawns, and uses colliders, rigidbody physics, and the Input System for smooth player interaction. (Once the folder is accessed, open the 'Danger Room (Unity Game)' folder within the 'Danger_Room' folder and run the 'Danger Room.exe' file to play the game.)",
          image: require("../assets/danger.png"),links:["https://drive.google.com/drive/folders/1OyKv_1TTrhwiL_0D9OdNSRnQbsd-PIfC?usp=drive_link"]
        },
      ],
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.project {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  box-sizing: border-box;
  padding: 20px;
}

.rowcards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin-top: 50px;
}

.project-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  min-height: 600px;
}

.project-content:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.project-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.image-content {
  width: 100%;
  display: flex;
  justify-content: center;
}

.image-content img {
  max-width: 100%;
  height: auto;
}

.text-content {
  width: 100%;
  flex: 1;
}

.college {
  padding-top: 10px;
}

.projectInfo p{
  margin-bottom: 15px;
  margin-top: 15px;
}

.skill-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  justify-content: flex-start;
}

.skill-tags {
  font-weight: 500;
  padding: 10px;
  border-radius: 16px;
  color: #1d2b9f;
  background-color: rgba(29, 43, 159, 0.2);
  font-size: 11px;
  display: inline-flex;
  align-items: center;
}

.skill-tags #skills {
  padding-right: 5px;
}

.repo {
  font-weight: 500;
  padding: 12px;
  border-radius: 16px;
  color: white;
  background-color: #1d2b9f;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.repo i,
#source {
  padding-right: 10px;
  color: white;
}

.header {
  font-size: clamp(25px, 2vw, 40px);
  font-weight: 600;
  width: 100%;
  color: #1d2b9f;
  margin-bottom: 20px;
  position: relative;
  text-align: center;
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

@media (max-width: 768px) {
  .rowcards {
    flex-direction: column;
    align-items: center;
  }

  .project-content {
    width: 95%;
    min-height: auto;
  }

  .project-info {
    flex-direction: column;
    align-items: center;
  }

  .text-content,
  .image-content {
    width: 100%;
  }

  .projectInfo h2,
  .projectInfo p {
    text-align: left;
  }
}



</style>
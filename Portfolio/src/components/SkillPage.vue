<template>
  <div class="skills-container">
    <div class="header">Skills</div>

    <div class="skills-grid">
      <!-- FrontEnd Section -->
      <div class="category">
        <h3>FrontEnd</h3>
        <div class="skills-row">
          <div class="skill-card" v-for="(skill, index) in FrontEnd" :key="index">
            <i :class="skill.icon"></i>
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>

      <!-- BackEnd Section -->
      <div class="category">
        <h3>BackEnd</h3>
        <div class="skills-row">
          <div class="skill-card" v-for="(skill, index) in BackEnd" :key="index">
            <i :class="skill.icon"></i>
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div class="category">
        <h3>Tools</h3>
        <div class="skills-row">
          <div class="skill-card" v-for="(skill, index) in Tools" :key="index">
            <i :class="skill.icon"></i>
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillPage",
  data() {
    return {
      FrontEnd: [
        { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      ],
      BackEnd: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Insomnia", icon: "devicon-insomnia-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      ],
      Tools: [
        { name: "GitHub", icon: "devicon-github-original colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "ROSA (Red Hat)", icon: "devicon-redhat-plain colored" },
      ],
    };
  },
};
</script>

<style scoped>
.skills-container {
  max-width:100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-left: 0;
  margin-left: 0;
  color:black;
  padding-top: 1px;
  box-sizing: border-box;
}

.header {
position: relative;
font-size: clamp(25px, 2vw, 40px);
font-weight: 600;
width: 100%;
color: #1d2b9f;
margin-bottom: 30px;
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

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.category {
  text-align: center;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.8rem;
  color: gray;
  margin-bottom: 1rem;
}

.skills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  width: 120px;
  height: 120px;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}

.skill-card i {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.skill-card p {
  font-size: 1rem;
  color: black;
  font-weight: 500;
  text-align: center;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 896px) {
  .skills-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 0.5rem;
    justify-content: center;
  }

  .skill-card {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 480px) {
  .skills-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  .skill-card {
    width: 90px;
    height: 90px;
  }
}
</style>

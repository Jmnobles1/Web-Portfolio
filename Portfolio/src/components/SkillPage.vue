<template>
  <div class="skills-container">
    <h1 class="page-title">Skills</h1>

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
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
      ],
      BackEnd: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "Insomnia", icon: "devicon-insomnia-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      ],
      Tools: [
        { name: "GitHub", icon: "devicon-github-original colored" },
        { name: "NPM", icon: "devicon-npm-original-wordmark colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "ROSA (Red Hat)", icon: "devicon-redhat-plain colored" },
        { name: "GitLab", icon: "devicon-gitlab-plain colored" },
      ],
    };
  },
};
</script>

<style scoped>
.skills-container {
  text-align: center;
}

.page-title {
  font-size: 4rem;
  font-weight: 700;
  color: lightgreen;
  margin-bottom: 50px;
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
  background: #2d2d2d;
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
  color: white;
  font-weight: 500;
  text-align: center;
}

.skill-card:hover {
  transform: scale(1.1);
  background: lightgreen;
  box-shadow: 0 0 10px lightgreen;
}

.skill-card:hover p {
  color: black;
}

@media (max-width: 768px) {
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

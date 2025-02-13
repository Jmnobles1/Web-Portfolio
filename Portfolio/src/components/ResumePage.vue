<template>
  <div class="resume-container">
    <router-link to="/">
      <button class="nav-button back-to-home">Back to Home</button>
    </router-link>

    <button class="nav-button download-resume" @click="openResume">
      Open Resume
    </button>

    <h1 class="page-title">My Resume </h1>

    <div class="resume-preview">
      <img 
        src="@/assets/resume-preview.png" 
        alt="Resume Preview" 
        class="resume-image" 
        @click="openResume"
      />
      <p>Click to open the full PDF</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumePage",
  methods: {
    openResume() {
      window.open("/Resume.pdf", "_blank");
    }
  }
};
</script>

<style scoped>
.resume-container {
  text-align: center;
  padding: 4rem 2rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: lightgreen;
  margin-bottom: 2rem;
  padding-top: 2rem; 
}

.nav-button {
  background-color: transparent;
  color: lightgreen;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  margin: 10px 20px;
  padding: 10px 20px;
  transition: color 0.3s, transform 0.3s ease;
}

.nav-button:hover {
  color: white;
  transform: scale(1.05);
}

.resume-preview {
  cursor: pointer;
  display: inline-block;
  margin-top: 2rem;
}

.resume-image {
  width: 80%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.resume-image:hover {
  transform: scale(1.05);
}

.resume-preview p {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: gray;
}

p {
  font-size: 2rem;
}
</style>

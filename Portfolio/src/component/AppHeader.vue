<template>
  <header>
    <nav>
        <a href="#home">Home</a>
        <a href="#skill">Skills</a>
        <a href="#experience">Experience</a>
        <router-link to="/resume">Resume</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  mounted() {
    // Handle smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20, // Adjust for header offset
            behavior: 'smooth'
          });
        }
      });
    });
  }
};
</script>

<style scoped>
h1, a {
  color: lightgreen;
}
nav a {
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.6rem;
}
</style>

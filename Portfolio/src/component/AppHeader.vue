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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          slowScroll(targetElement.offsetTop - 20, 450);
        }
      });
    });

    function slowScroll(targetPosition, duration) {
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Easing effect

        window.scrollTo(0, startPosition + distance * progress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }
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

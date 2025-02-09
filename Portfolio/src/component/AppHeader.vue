<template>
  <header>

    <nav>
        <a href="#home">Home</a>
        <a href="#skill">Skills</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
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
          window.scrollTo({
            top: targetElement.offsetTop -20,
            behavior: 'smooth'
          });
        }
      });
    });
  }
};
</script>
 
  <style scoped>
  h1,a{
    color:lightgreen;
  }
  </style>
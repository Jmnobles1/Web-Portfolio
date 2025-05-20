<template>
  <div id="home" class="sidebar">
    <!-- Desktop view -->
    <div class="home-img">
      <img src="../assets/image.png" alt="">
    </div>
    <div class="links">
      <h1 :class="{active: setSelected === 'about'}"><a @click="navigateTo('about')"><i class="fa-solid fa-house"></i> ABOUT</a></h1>
      <h1 :class="{active: setSelected === 'education'}"><a @click="navigateTo('education')"><i class="fa-solid fa-user-graduate"></i> EDUCATION</a></h1>
      <h1 :class="{active: setSelected === 'experience'}"><a @click="navigateTo('experience')"><i class="fa-solid fa-toolbox"></i> EXPERIENCE</a></h1>
      <h1 :class="{active: setSelected === 'projects'}"><a @click="navigateTo('projects')"><i class="fa-solid fa-diagram-project"></i> PROJECTS</a></h1>
      <h1 :class="{active: setSelected === 'skills'}"><a @click="navigateTo('skills')"><i class="fa-solid fa-code"></i> SKILLS</a></h1>
    </div>

    <h1 @click="navigateTo('about')" class="mobile-name">Jaden Nobles</h1>
    <button :class="{open: menuOpen}" @click="toggleMenu">☰</button>

    <!-- Mobile nav -->
    <div class="mobile-fullscreen-nav" v-if="menuOpen">
      <div class="mobile-nav">
        <a :class="{active: setSelected === 'about'}" @click="navigateTo('about')"><i class="fa-solid fa-house"></i> ABOUT</a>
        <a :class="{active: setSelected === 'education'}" @click="navigateTo('education')"><i class="fa-solid fa-user-graduate"></i> EDUCATION</a>
        <a :class="{active: setSelected === 'experience'}" @click="navigateTo('experience')"><i class="fa-solid fa-toolbox"></i> EXPERIENCE</a>
        <a :class="{active: setSelected === 'projects'}" @click="navigateTo('projects')"><i class="fa-solid fa-diagram-project"></i> PROJECTS</a>
        <a :class="{active: setSelected === 'skills'}" @click="navigateTo('skills')"><i class="fa-solid fa-code"></i> SKILLS</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false,
      setSelected:'',
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    navigateTo(id) {
      this.menuOpen = false;
      this.setSelected = id;

      // Wait for menu to close before scrolling
      this.$nextTick(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  },
};
</script>

<style>
.links{
  margin-top:40px;
  display:flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
}

.links h1.active{
  color:white;
}

.links h1.active a i{
  color:white;
}

.links h1{
  margin-top: 25px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  display:block;
  color:#bfbfbf;
}

.links a,
  .links router-link {
    font-size: 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    position: relative;
  }
  .links a i{
    font-size: 12px;
    color: #bfbfbf;
    padding-right: 4px;
  }

.links h1.active a::after{
    width: 100%;
   
}
.links a::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background: white;
    transition: width 0.3s ease;
}

.links a:hover::after{
  width:100%;
}

.sidebar {
  background-color: #1d2b9f;
  position: fixed;
  overflow-y:hidden;
  border: solid transparent;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 275px;
  padding: 30px;
  text-align: center;
  overflow-x: hidden;
  word-wrap: break-word;
}

.mobile-name,
button {
  display: none;
}

/* ===== MOBILE STYLES ===== */
@media (max-width: 896px) {
  .links{
    display: none;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3b82f6;
    z-index: 10;
  }

  .home-img,
  .typing-text,
  .social-icons,
  .name,
  p {
    display: none;
  }

  .mobile-name {
    display: block;
    font-size: 20px;
    cursor:pointer;
    font-family: 'Roboto', sans-serif;
    color: white;
  }

  button{
    display: block;
    background: none;
    border: none;
    border: solid .5px #bfbfbf;
    padding: 2px;
    font-size: 23px;
    margin-right: 5px;
    width:40px;
    color: white;
    cursor: pointer;
  }
  button.open {
    border: solid 2px white;
  }

  .mobile-fullscreen-nav {
    position: fixed;
    top: 60px;
    left: 0;
    height: calc(100vh - 60px);
    width: 100vw;
    background-color: #3b82f6;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    z-index: 9;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    left:0;
    text-align: left;
    width: 100%;
    align-items: flex-start;
    gap: 20px;
  }

  .mobile-nav a.active{
    color:white;
  }
  .mobile-nav a.active::after{
    width:100%;
  }
  .mobile-nav a.active i{
    color:white;
  }

  .mobile-nav a{
    font-family: 'Roboto', sans-serif;
    color:#bfbfbf;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: 2rem;
    text-decoration: none;
    width: 100%;
    cursor: pointer;
    position: relative;
    gap:20px;
  }

  .mobile-nav a i{
    font-size: 12px;
    color: #bfbfbf;
    padding-right: 4px;
  }

  .mobile-nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2.5px;
    width: 0;
    background: white;
    transition: width 0.4s ease;
  }

  .mobile-nav a:hover::after {
    width: 100%;
  }

}
</style>

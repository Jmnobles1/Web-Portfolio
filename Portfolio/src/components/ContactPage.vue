<template>
  <div class="contact">
    <div class="header">Contact</div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.contact {
  max-width:100%;
  display: flex;
  align-items: flex-start;
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
</style>

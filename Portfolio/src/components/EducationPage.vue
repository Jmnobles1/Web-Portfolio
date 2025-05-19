<template>
  <div class="education">
    <div class="header">Education</div>

    <div class="education-content">
      <div class="education-info">
        <div class="text-content">
          <h1 style="font-size: 17px; color: #1d2b9f;">North Carolina Agricultural and Technical State University</h1>
          <p><i class="fa-solid fa-location-dot"></i> Greensboro, NC</p>
          
          <div class="college">
            <h2 style="font-size: 17px; display: block;">Bachelor of Science in Computer Science (CS)</h2>
            <p style="display: block;">College of Engineering</p>
            <p style="display: block;"><i class="fa-solid fa-calendar-days"></i> August 2021 - May 2025</p>
          </div>
        </div>
        <div class="image-content">
          <img src="../assets/ncat.png" alt="NCAT Logo" width="220" height="100"/>
        </div>
      </div>
      <div class="acts">
        <h2 style="color:#1d2b9f">Courses & Activities</h2>
        <ul>
          <li><strong>Courses:</strong> Your course list</li>
          <li><strong>Activities:</strong> Your activities</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationPage",
  data() {
    return {
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.college{
  padding: 20px 0;
  display: block;
}
.college h2{
  font-size: 17px;
  padding-bottom: 5px;
  display: block;
}
.college p{
  padding-bottom: 5px;
  display: block;
  margin-bottom: 5px;
}

.acts{
  width:100%;
  height: auto;
  margin-top: 70px;
  padding:5px;
  background-color: rgba(29, 43, 159, 0.1);
  border-radius: 6px;
}
.acts ul{
  list-style-position: inside;
  padding-left:1rem;
  padding-top: 10px;
  margin:0;
}
.acts li{
  padding:10px;
  list-style: none;
  font-size: 15px;
  align-items: left;
}
.education {
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
  padding-top: 20px;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 0 0 220px;
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

.education-info {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
}

.education-content {
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

.education-content:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .education-info {
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
    flex: none;
  }

  .college {
    padding: 10px 0;
    text-align: left;
    display: block !important;
  }

  .college h2, 
  .college p {
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
<template>
  <div class="form">
    <!-- First Team Selection -->
    <div class="team-select-container">
      <label for="team-select">Select a NFL team</label>
      <v-select
        id="team-select"
        v-model="selectedTeam"
        :options="teams"
        label="name"
        placeholder="Type here to search for your Team"
        class="team-select"
      ></v-select>

      <!-- Compare Button -->
      <button
        v-if="selectedTeam"
        class="compare-button"
        @click="showComparison = true"
      >
        Compare Team Stats
      </button>
    </div>

    <!-- First Team Display -->
    <div v-if="selectedTeam" class="team-display">
      <div class="card">
        <p><strong>{{ selectedTeam.name }}</strong></p>
        <a :href="selectedTeam.website" target="_blank" class="team-link">Visit Team Page</a>
        <img :src="selectedTeam.logo" alt="Team Logo" class="team-logo" />
      </div>
      <div class="team-stats">
        <h3>Team Stats</h3>
        <ul>
          <li><strong>Founded:</strong> 1933</li>
          <li><strong>Championships:</strong> 6</li>
          <li><strong>Stadium:</strong> Heinz Field</li>
        </ul>
      </div>
    </div>

    <!-- Second Team Selection -->
    <div v-if="showComparison" class="compare-select">
      <label for="compare-team-select">Select a team to compare with</label>
      <v-select
        id="compare-team-select"
        v-model="comparisonTeam"
        :options="teams"
        :filter="filterTeams"
        label="name"
        placeholder="Select a team to compare"
        class="team-select"
      ></v-select>

      <!-- Remove Comparison Button -->
      <button
        v-if="comparisonTeam"
        class="remove-comparison-button"
        @click="removeComparison"
      >
        Remove Comparison
      </button>
    </div>

    <!-- Comparison Team Stats Card -->
    <div v-if="comparisonTeam" class="team-stats comparison">
      <h3>{{ comparisonTeam.name }} Stats</h3>
      <ul>
        <li><strong>Founded:</strong> 2002</li>
        <li><strong>Championships:</strong> 1</li>
        <li><strong>Stadium:</strong> Levi's Stadium</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BodyComp',
  data(){
    return{
      selectedTeam: null,
      comparisonTeam: null,
      showComparison: false,
      teams:[
        {name:'Pittsburgh Steelers',logo:require("@/assets/Pittsburgh_Steelers_logo.svg-min.png"), website:"https://www.steelers.com/"},
        {name:'Baltimore Ravens',logo:require("@/assets/ravens-min.png"), website:"https://www.baltimoreravens.com/"},
        {name:'Buffalo Bills',logo:require("@/assets/bills-min.png"), website:"https://www.buffalobills.com/"},
        {name:'Seattle Seahawks',logo:require("@/assets/sea-min.png"), website:"https://www.seahawks.com/"},
        {name:'Washington Commanders',logo:require("@/assets/comm-min.png"),website:"https://www.commanders.com/"},
        {name:'Miami Dolphins',logo:require("@/assets/dolphins-min.png"), website:"https://www.miamidolphins.com/"},
        {name:'Kansas City Cheifs',logo:require("@/assets/cheifs-min.png"), website:"https://www.chiefs.com/"},
        {name:'Cincinnati Bengals',logo:require("@/assets/bengals-min.png"), website:"https://www.bengals.com/"},
        {name:'Carolina Panthers',logo:require("@/assets/panthers-min.png"), website:"https://www.panthers.com/"},
        {name:'NewYork Jets',logo:require("@/assets/jets-min.png"), website:" https://www.newyorkjets.com/"},
        {name:'New England Patriots',logo:require("@/assets/patriots-min.png"), 
        website:"https://www.patriots.com/"},
        {name:'Clevland Browns',logo:require("@/assets/browns-min.png"), website:"https://www.clevelandbrowns.com/"},
        {name:'Chicago Bears',logo:require("@/assets/bears-min.png"), website:"https://www.chicagobears.com/"},
        {name:'Dallas Cowboys',logo:require("@/assets/cowboys-min.png"), website:"https://www.dallascowboys.com/"},
        {name:'Atlanta Falcons',logo:require("@/assets/falcons-min.png"), website:"https://www.atlantafalcons.com/"},
        {name:'Denver Broncos',logo:require("@/assets/broncos-min.png"), website:"https://www.denverbroncos.com/"},
        {name:'Green Bay Packers',logo:require("@/assets/packers-min.png"), website:"https://www.packers.com/"},
        {name:'Houston Texans',logo:require("@/assets/texans-min.png"), website:"https://www.houstontexans.com/"},
        {name:'Indianapolis Colts',logo:require("@/assets/colts-min.png"), 
        website:"https://www.colts.com/"},
        {name:'Jacksonville Jaguars',logo:require("@/assets/jaguars-min.png"), website:"https://www.jaguars.com/"},
        {name:'Las Vegas Raiders',logo:require("@/assets/raiders-min.png"), website:"https://www.raiders.com/"},
        {name:'Arizona Cardinals',logo:require('@/assets/card-min.jpg'),
        website:"https://www.azcardinals.com/"},
        {name:'Tennessee Titans',logo:require("@/assets/titans-min.png"), website:" https://www.tennesseetitans.com/"},
        {name:'Los Angeles Chargers',logo:require("@/assets/chargers-min.png"), website:"https://www.chargers.com/"},
        {name:'New York Giants',logo:require("@/assets/giants-min.png"), website:"https://www.giants.com/"},
        {name:'Philiadelphia Eagles',logo:require("@/assets/eagles-min.png"),website:"https://www.philadelphiaeagles.com/"},
        {name:'Detroit Lions',logo:require("@/assets/lions-min.png"), website:"https://www.detroitlions.com/"},
        {name:'Minnesota Vikings',logo:require("@/assets/vikings-min.png"), website:"https://www.vikings.com/"},
        {name:'New Orleans Saints',logo:require("@/assets/saints-min.png"), website:"https://www.neworleanssaints.com/"},
        {name:'Tampa Bay Buccaneers',logo:require("@/assets/bucs.png"), website:"https://www.buccaneers.com/"},
        {name:'Los Angeles Rams',logo:require("@/assets/rams.png"), website:"https://www.therams.com/"},
        {name: 'San Francisco 49ers',logo:require("@/assets/49ers-min.png"),
         website:"https://www.49ers.com/"},

      ],
    };
  },
  methods: {
    filterTeams(team) {
      return team.name !== this.selectedTeam?.name;
    },

    // Method to remove the comparison team and hide the comparison section
    removeComparison() {
      this.comparisonTeam = null;
      this.showComparison = false;
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "vue-select/dist/vue-select.css";
.compare-section {
  margin-top: 20px;
}
.compare-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.compare-button:hover {
  background-color: #0056b3;
}

.compare-select {
  margin-top: 10px;
}

.comparison {
  margin-top: 20px;
}

.form{
  text-align: center;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  margin-top:100px;
  width:100%;
  box-sizing:border-box;
  display:flex;
}
h2{
  margin-bottom:100px;
}

.team-select {
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  background-color: white;
  width:400px;
  margin:10px 0;
}

.team-select:hover {
  border-color: #007BFF;
}

label{
  display:block;
  font-weight:bold;
  margin-bottom:5px;
}
.card {
  flex: 0 0 300px; /* Fixed width */
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 40px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
}
.card p{
  margin:5px 0;
  font-size:1rem;
  line-height:1.5;
}
.team-logo{
  margin-top:5px;
  width:200px;
  height:auto;
  object-fit: contain;
  margin-bottom:10px;
  image-rendering:auto;
}

.team-link{
  display:inline-block;
  padding: 10px 20px;
  background-color: #007BFF;
  color:white;
  text-decoration: none;
  border-radius:5px;
  margin-top:10px;
}
.team-link:hover{
  background-color: #0056b3;
}

.team-display {
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  margin-top: 20px;
  gap: 20px;
}

.team-stats, .comparison {
  flex: 0 0 300px; 
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  flex: 0 0 300px;
  height: 100px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-stats:hover {
  transform: scale(1.05);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
}

.team-stats h3 {
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #000; 
}

.team-stats ul {
  padding: 0;
  list-style-type: none;
  margin: 0;
}

.team-stats li {
  margin-bottom: 5px;
  font-size: 0.9rem;
}

.remove-comparison-button{
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

</style>

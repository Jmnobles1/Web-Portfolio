<template>
  <div class="form">
  
    <div class="team-select-container">

      <div class="intro-header">
        <h2>Welcome to the NFL Project Webpage</h2>
        <p>Choose a team to view its statistics and compare them with another team's stats.</p>
      </div>


      <label for="team-select">Select your Team</label>
      <v-select
        id="team-select"
        v-model="selectedTeam"
        :options="filteredTeam"
        label="name"
        placeholder="Type here to search for your Team"
        class="team-select"
      ></v-select>

      
      <button
        v-if="selectedTeam"
        class="compare-button"
        @click="showComparison = true"
      >
        Compare Teams
      </button>

      <div v-if="showComparison" class="compare-select">
      <v-select
        id="compare-team-select"
        v-model="comparisonTeam"
        :options="filteredTeams"
        label="name"
        placeholder="Select a team to compare stats with"
        class="team-select"
      ></v-select>

    
      <button
        class="remove-comparison-button"
        @click="removeComparison"
      >
        Remove Comparison
      </button>
    </div>
    </div>

    <div v-if="selectedTeam" class="team-display">
      <div class="card">
        <p><strong>{{ selectedTeam.name }}</strong></p>
        <a :href="selectedTeam.website" target="_blank" class="team-link">Visit Team Page</a>
        <img :src="selectedTeam.logo" alt="Team Logo" class="team-logo" />
      </div>
      <div class="col">
        <div class="team-stats">
          <h3>{{ selectedTeam.name }}</h3>
          <ul>
            <li><strong>Super Bowls:</strong> {{ selectedTeam.champ }}</li>
            <li><strong>Playoff Appearances:</strong> {{ selectedTeam.apps }}</li>
            <li><strong>Conference Championships:</strong> {{ selectedTeam.c }} </li>
            <li><strong>Regular Season Record:</strong> {{ selectedTeam.rec }}</li>
          </ul>
        </div>

        <div v-if="comparisonTeam" class="team-stats comparison">
          <h3>{{ comparisonTeam.name }}</h3>
          <ul>
            <li><strong>Super Bowls:</strong> {{ comparisonTeam.champ }}</li>
            <li><strong>Playoff Appearances:</strong> {{ comparisonTeam.apps }}</li>
            <li><strong>Conference Championships:</strong> {{ comparisonTeam.c }} </li>
            <li><strong>Regular Season Record:</strong> {{ comparisonTeam.rec }}</li>
          </ul>
        </div>
      </div>
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
        {name:'Pittsburgh Steelers',logo:require("@/assets/Pittsburgh_Steelers_logo.svg-min.png"), website:"https://www.steelers.com/"
        ,champ:6,rec:'703-588-22',c:8,apps:33},
        {name:'Baltimore Ravens',logo:require("@/assets/ravens-min.png"), website:"https://www.baltimoreravens.com/",champ:2,rec:'243-200-1',c:2,apps:14},
        {name:'Buffalo Bills',logo:require("@/assets/bills-min.png"), website:"https://www.buffalobills.com/",champ:0,rec:'468-493-8',c:4,apps:22},
        {name:'Seattle Seahawks',logo:require("@/assets/sea-min.png"), website:"https://www.seahawks.com/",champ:1,rec:'402-394-1',c:3,apps:20},
        {name:'Washington Commanders',logo:require("@/assets/comm-min.png"),website:"https://www.commanders.com/",champ:3,rec:'628-638-29',c:5,apps:25},
        {name:'Miami Dolphins',logo:require("@/assets/dolphins-min.png"), website:"https://www.miamidolphins.com/",champ:2,rec:'500-402-4',c:5,apps:24},
        {name:'Kansas City Chiefs',logo:require("@/assets/cheifs-min.png"), website:"https://www.chiefs.com/",champ:3,rec:'543-437-12',c:5,apps:25},
        {name:'Cincinnati Bengals',logo:require("@/assets/bengals-min.png"), website:"https://www.bengals.com/",champ:0,rec:'394-462-5',c:3,apps:16},
        {name:'Carolina Panthers',logo:require("@/assets/panthers-min.png"), website:"https://www.panthers.com/",champ:0,rec:'219-246-1',c:2,apps:8},
        {name:'NewYork Jets',logo:require("@/assets/jets-min.png"), website:" https://www.newyorkjets.com/",champ:1,rec:'418-542-8',c:1,apps:14},
        {name:'New England Patriots',logo:require("@/assets/patriots-min.png"), 
        website:"https://www.patriots.com/",champ:6,rec:'545-429-9',c:11,apps:27},

        {name:'Cleveland Browns',logo:require("@/assets/browns-min.png"), website:"https://www.clevelandbrowns.com/",champ:0,rec:'541-540-14',c:0,apps:29},
        {name:'Chicago Bears',logo:require("@/assets/bears-min.png"), website:"https://www.chicagobears.com/",champ:1,rec:'788-623-42',c:2,apps:27},
        {name:'Dallas Cowboys',logo:require("@/assets/cowboys-min.png"), website:"https://www.dallascowboys.com/",champ:5,rec:'551-410-6',c:10,apps:35},
        {name:'Atlanta Falcons',logo:require("@/assets/falcons-min.png"), website:"https://www.atlantafalcons.com/",champ:0,rec:'391-511-6',c:2,apps:14},
        {name:'Denver Broncos',logo:require("@/assets/broncos-min.png"), website:"https://www.denverbroncos.com/",champ:3,rec:'507-455-10',c:8,apps:22},
        {name:'Green Bay Packers',logo:require("@/assets/packers-min.png"), website:"https://www.packers.com/",champ:4,rec:"800-592-38",c:9,apps:36},
        {name:'Houston Texans',logo:require("@/assets/texans-min.png"), website:"https://www.houstontexans.com/",champ:0,rec:"143-191-1",c:0,apps:6},
        {name:'Indianapolis Colts',logo:require("@/assets/colts-min.png"), website:"https://www.colts.com/",champ:2,rec:"552-505-7",c:7,apps:28},
        {name:'Jacksonville Jaguars',logo:require("@/assets/jaguars-min.png"), website:"https://www.jaguars.com/",champ:0,rec:"198-273",c:0,apps:9},
        {name:'Las Vegas Raiders',logo:require("@/assets/raiders-min.png"), website:"https://www.raiders.com/",champ:3,rec:"498-458-11",c:4,apps:23},
        {name:'Arizona Cardinals',logo:require('@/assets/card-min.jpg'),website:"https://www.azcardinals.com/",champ:0,rec:"587-802-41",c:1,apps:10},
        {name:'Tennessee Titans',logo:require("@/assets/titans-min.png"), website:"https://www.tennesseetitans.com/",champ:0,rec:"482-488-6",c:1,apps:25},
        {name:'Los Angeles Chargers',logo:require("@/assets/chargers-min.png"), website:"https://www.chargers.com/",champ:0,rec:"478-468-11",c:1,apps:20},
        {name:'New York Giants',logo:require("@/assets/giants-min.png"), website:"https://www.giants.com/",champ:4,rec:"723-641-33",c:5,apps:33},
        {name:'Philadelphia Eagles',logo:require("@/assets/eagles-min.png"),website:"https://www.philadelphiaeagles.com/",champ:1,rec:"628–629–26",c:5,apps:29},
        {name:'Detroit Lions',logo:require("@/assets/lions-min.png"), website:"https://www.detroitlions.com/",champ:0,rec:"584-707-33",c:0,apps:21},
        {name:'Minnesota Vikings',logo:require("@/assets/vikings-min.png"), website:"https://www.vikings.com/",champ:0,rec:"522-452-11",c:4,apps:31},
        {name:'New Orleans Saints',logo:require("@/assets/saints-min.png"), website:"https://www.neworleanssaints.com/",champ:1,rec:"413-46-5",c:1,apps:15},
        {name:'Tampa Bay Buccaneers',logo:require("@/assets/bucs.png"), website:"https://www.buccaneers.com/",champ:2,rec:"300-442-1",c:2,apps:13},
        {name:'Los Angeles Rams',logo:require("@/assets/rams.png"), website:"https://www.therams.com/",champ:2,rec:"599-594-21",c:8,apps:30},
        {name:'San Francisco 49ers',logo:require("@/assets/49ers-min.png"),website:"https://www.49ers.com/",champ:5,rec:"619-527-16",c:7,apps:28},
      ],
    };
  },
  methods: {
    removeComparison() {
      this.comparisonTeam = null;
      this.showComparison = false;
    },
  },
  computed: {
    filteredTeams() {
      return this.teams.filter(team => team.name !== this.selectedTeam?.name);
    },
    filteredTeam() {
      return this.teams.filter(team => team.name !== this.comparisonTeam?.name);
    },
  },
}

</script>


<style scoped>
@import "vue-select/dist/vue-select.css";

.intro-header {
  text-align: center;
  margin-bottom: 100px;
}

.intro-header h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

.intro-header p {
  font-size: 1rem;
  margin-top: 0;
  color: #666;
  margin-bottom: 0;
}

.col{
  flex-direction: column; 
  gap: 20px; 
}

.compare-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  margin-bottom:10px;
  border-radius: 5px;
  cursor: pointer;
}

.compare-button:hover {
  background-color: #0056b3;
}

.compare-select {
  margin-top: 30px;
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

  margin:10px 0;

  align-items: center; /* Ensure it stays centered */
  justify-content: center;
  width: 100%;
  margin-top: 20px;
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
  flex: 0 0 300px; 
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
  max-width:100%;
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
  flex: 0 0 200px; 
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  width:fit-content;
  flex: 0 0 200px;
  flex-grow: 1;
  overflow: auto;
  height: auto;
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
  margin-bottom: 5px;
  list-style-type: none;
  margin: 0;
}

.team-stats li {
  line-height: 1.8;
  font-size: 0.9rem;
}
.team-stats li::before{
  content: '🏈';
  margin-right: 3px;
}

.remove-comparison-button{
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 20px;
}

</style>

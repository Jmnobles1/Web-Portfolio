<template>
  <div class="form">

    <label for="team-select">Select a NFL team</label>
    <v-select
      id="team-select"
      v-model="selectedTeam"
      :options="teams"
      label="name"
      placeholder="Type here to search for your Team"
      class="team-select"
    ></v-select>
    <div v-if="selectedTeam" class="card">
      <p><strong>Team Name:  </strong>{{ selectedTeam.name }}</p>
      <a :href="selectedTeam.website" target="_blank" class="team-link">Visit Team Page</a>
      <p><strong>Location:</strong>{{  }}</p>
      <p><strong>Origin:</strong>{{  }}</p>
      <img  :src="selectedTeam.logo" alt="Team Logo" class="team-logo"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BodyComp',
  data(){
    return{
      selectedTeam:null,
      teams:[
        {name:'Pittsburgh Steelers',logo:"http://americanfootballfilms.com/wp-content/uploads/2013/03/pittsburgh-steelers-logo.jpg", website:"https://www.steelers.com/"},
        {name:'Baltimore Ravens',logo:"https://i.pinimg.com/originals/6b/7c/4d/6b7c4d7cbdcaf55133ae645474a2355d.jpg", website:"https://www.baltimoreravens.com/"},
        {name:'Buffalo Bills',logo:"https://blog.logomyway.com/wp-content/uploads/2021/05/buffalo-bills-logo-transparent-PNG.png", website:""},
        {name:'Seattle Seahawks',logo:"https://images.fun.com/products/51409/1-1/nfl-seattle-seahawks-logo-foam-sign.jpg", website:""},
        {name:'Washington Commanders',logo:"https://static.vecteezy.com/system/resources/previews/015/863/727/original/washington-commanders-logo-on-transparent-background-free-vector.jpg", 
        website:""},
        {name:'Miami Dolphins',logo:"https://cdn.freebiesupply.com/images/large/2x/miami-dolphins-logo-transparent.png", website:""},
        {name:'Kansas City Cheifs',logo:"https://logos-world.net/wp-content/uploads/2020/05/Kansas-City-Chiefs-Logo-1972-present.png", website:""},
        {name:'Cincinnati Bengals',logo:"https://pixelz.cc/wp-content/uploads/2019/04/cincinnati-bengals-nfl-logo-uhd-4k-wallpaper.jpg", website:""},
        {name:'Carolina Panthers',logo:"https://i.pinimg.com/736x/51/d2/8d/51d28d6ca239e52a119c36e1a3081df0.jpg", website:""},
        {name:'NewYork Jets',logo:"https://logos-world.net/wp-content/uploads/2020/05/New-York-Jets-Logo-1978-1997.png", website:""},
        {name:'New England Patriots',logo:"https://static.vecteezy.com/system/resources/previews/015/863/602/original/new-england-patriots-logo-on-transparent-background-free-vector.jpg", 
        website:""},
        {name:'Clevland Browns',logo:"https://logos-world.net/wp-content/uploads/2020/05/Cleveland-Browns-Logo-2006-2014.png", website:""},
        {name:'Chicago Bears',logo:"https://logosmarcas.net/wp-content/uploads/2020/07/Chicago-Bears-logo.png", website:""},
        {name:'Dallas Cowboys',logo:"https://www.freepnglogos.com/uploads/dallas-cowboys-logo-22.png", website:""},
        {name:'Atlanta Falcons',logo:"https://www.pngmart.com/files/4/Atlanta-Falcons-PNG-Free-Download.png", website:""},
        {name:'Denver Broncos',logo:"https://www.pngkit.com/png/detail/65-652400_denver-broncos-logo.png", website:""},
        {name:'Green Bay Packers',logo:"https://logoeps.com/wp-content/uploads/2012/12/green-bay-packers-logo-vector.png", website:""},
        {name:'Houston Texans',logo:"https://logosmarcas.net/wp-content/uploads/2020/07/Houston-Texans-Logotipo-2006-Presente.jpg", website:""},
        {name:'Indianapolis Colts',logo:"https://static.vecteezy.com/system/resources/previews/015/863/592/non_2x/indianapolis-colts-logo-on-transparent-background-free-vector.jpg", 
        website:""},
        {name:'Jacksonville Jaguars',logo:"https://vectorified.com/image/jacksonville-jaguars-logo-vector-15.jpg", website:""},
        {name:'Las Vegas Raiders',logo:"https://www.pngitem.com/pimgs/m/32-322686_oakland-raiders-logo-hd-png-download.png", website:""},
        {name:'Arizona Cardinals',logo:"https://www.clipartmax.com/png/middle/246-2463094_weekly-update-arizona-cardinals-logo-png.png", website:""},
        {name:'Tennessee Titans',logo:"https://logos-world.net/wp-content/uploads/2020/05/Tennessee-Titans-Logo.png", website:""},
        {name:'Los Angeles Chargers',logo:"https://logodownload.org/wp-content/uploads/2020/09/los-angeles-chargers-logo-2.png", website:""},
        {name:'New York Giants',logo:"https://freepngimg.com/download/new_york_giants/32178-5-new-york-giants-transparent-background.png", website:""},
        {name:'Philiadelphia Eagles',logo:"https://png.pngtree.com/thumb_back/fw800/background/20230613/pngtree-philadelphia-eagles-logo-with-a-white-background-image_2921898.jpg",
         website:""},
        {name:'Detroit Lions',logo:"https://cdn.freebiesupply.com/logos/large/2x/new-lions-logo-png-transparent.png", website:""},
        {name:'Minnesota Vikings',logo:"https://www.kindpng.com/picc/m/2-29287_nfl-logos-heavy-metal-png-minnesota-vikings-transparent.png", website:""},
        {name:'New Orleans Saints',logo:"https://cdn.freebiesupply.com/images/large/2x/new-orleans-saints-logo-transparent.png", website:""},
        {name: 'San Francisco 49ers',logo:"https://banner2.cleanpng.com/20180617/fax/kisspng-san-francisco-49ers-nfl-washington-redskins-americ-2012-san-francisco-49ers-season-5b26e07d505b39.1973930015292744933292.jpg",
         website:""},

      ],
    };
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "vue-select/dist/vue-select.css";
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
.team-select{
  width:400px;
  margin:10px 0;
}
label{
  display:block;
  font-weight:bold;
  margin-bottom:5px;
}
.card{
  margin-top:40px;
  border:1px solid #ccc;
  border-radius:10px;
  box-shadow:0 4px 8px rgba(0,0,0,0.1);
  padding:10px;
  width:300px;
  text-align: center;
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
</style>

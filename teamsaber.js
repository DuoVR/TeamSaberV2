teams = {
   "team0":{
      "teamName":"BannedMods",
      "color":"#32fcbc",
   },
   "team1":{
      "teamName":"Kalalads",
      "color":"#32cd32",
   },
   "team2":{
      "teamName":"ApeSexLegends",
      "color":"#36393E",
   },
   "team3":{
      "teamName":"GymBodImprovementClub",
      "color":"#00ff00",
   },
   "team4":{
      "teamName":"MysteryInc",
      "color":"#39ff14",
   },
   "team5":{
      "teamName":"PP",
      "color":"#800080",
   },
   "team6":{
      "teamName":"FenceBois",
      "color":"#ffff00",
   },
   "team7":{
      "teamName":"EYES",
      "color":"#00CED1",
   },
   "team8":{
      "teamName":"Pat Joelseph",
      "color":"#4863A0",
   },
   "team9":{
      "teamName":"SkyrimVRGOTYPepehands",
      "color":"#AEF9F8",
   },
   "team10":{
      "teamName":"BloqCuttersAnonymous",
      "color":"#56e0ff",
   },
   "team11":{
      "teamName":"NekoEmpire",
      "color":"#CCEEFF",
   },
   "team12":{
      "teamName":"Deeeeno",
      "color":"#FF7400",
   },
   "team13":{
      "teamName":"NamelessNoodles",
      "color":"#c8c800",
   },
   "team14":{
      "teamName":"RaiseMySaber",
      "color":"#E7732F",
   },
   "team15":{
      "teamName":"Team15",
      "color":"#ffffff",
   },
   "team16":{
      "teamName":"PEPECAR540752444142125057",
      "color":"#d24dff",
   },
   "team17":{
      "teamName":"smileW",
      "color":"#42f4f4",
   },
   "team18":{
      "teamName":"PepeChads",
      "color":"#FFFF00",
   },
   "team19":{
      "teamName":"BackStabbers",
      "color":"#940c0c",
   },
   "-1":{
      "teamName":"???",
      "color":"#FFFFFF",
   }
}

points = {
  1: "+15",
  2: "+12",
  3: "+10",
  4: "+9",
  5: "+8",
  6: "+7",
  7: "+6",
  8: "+5",
  9: "+5",
  10: "+4",
  11: "+4",
  12: "+3",
  13: "+3",
  14: "+2",
  15: "+2",
  16: "+1",
  17: "+1",
  18: "+1",
  19: "+1",
  20: "+0",
  21: "+0",
  22: "+0",
  24: "+0",
  25: "+0"
}

$(document).ready(function() {
  $.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  $.ajax({
    type: "GET",
    url: "https://networkauditor.org/api-teamsaber/getsongleaderboards/all/25/",
    dataType: "json",
    success: function(data) {
      var loading = $('#loading');
      loading.hide()
      readData(data);
    }
  });

  function readData(json) {
    show1();
    for (var song in json) {
      var songdata = json[song];
      var songId = songdata["songId"];
      var tbody = $('#' + songId + ' tbody');
      var scores = songdata["scores"];
      for (var rank in scores) {
        var player = scores[rank]["player"];
        var score = scores[rank]["score"];
        var teamid = scores[rank]["team"];
        if (!(teamid in teams)) {
          continue;
        }
        var team = teams[teamid]["teamName"];
        var color = teams[teamid]["color"];
        var point = points[rank]
        var html = '<tr><td class="col1"><font color="' + color + '">';
        if (rank == 1) {
          ranked = "♛";
        }
        else {
          ranked = rank.toLocaleString()
        }
        html += ranked
        html += ' : [' + team + '] ' + player + ' : ';
        html += score.toLocaleString() + " (" + point + ')</font></td></tr>';

        tbody.append(html);
      }
    }
  }
});

function show1() {
  var song1 = $('#' + "206-124");
  var song2 = $('#' + "4690-4449");
  var song3 = $('#' + "10652-11215");
  var tab1 = $('#one');
  var tab2 = $('#two');
  var tab3 = $('#three');
  console.log("SHOW 206-124");
  song1.show();
  song2.hide();
  song3.hide();
  tab1.addClass('active');
  tab2.removeClass('active');
  tab3.removeClass('active');
}

function show2() {
  var song1 = $('#' + "206-124");
  var song2 = $('#' + "4690-4449");
  var song3 = $('#' + "10652-11215");
  var tab1 = $('#one');
  var tab2 = $('#two');
  var tab3 = $('#three');
  console.log("SHOW 4690-4449");
  song1.hide();
  song2.show();
  song3.hide();
  tab1.removeClass('active');
  tab2.addClass('active');
  tab3.removeClass('active');
}

function show3() {
  var song1 = $('#' + "206-124");
  var song2 = $('#' + "4690-4449");
  var song3 = $('#' + "10652-11215");
  var tab1 = $('#one');
  var tab2 = $('#two');
  var tab3 = $('#three');
  console.log("SHOW 10652-11215");
  song1.hide();
  song2.hide();
  song3.show();
  tab1.removeClass('active');
  tab2.removeClass('active');
  tab3.addClass('active');
}

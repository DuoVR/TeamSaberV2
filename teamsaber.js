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

$(document).ready(function() {
  $.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  $.ajax({
    type: "GET",
    url: "https://networkauditor.org/api-teamsaber/getsongleaderboards/all/50/",
    dataType: "json",
    success: function(data) {
      var loading = $('#loading');
      loading.hide()
      readData(data);
    }
  });

  var tagsI = ["t1", "t2", "t3", "t4"]
  var tagsN = ["one", "two", "three", "four"]
  var tagN = 0

  function readData(json) {
    show1();
    for (var song in json) {
      console.log(song);
      var songdata = json[song];
      var songId = songdata["songId"];
      var tbody = $('#' + tagsI[tagN] + ' tbody');
      var name = $('#' + tagsN[tagN]);
      words = songdata["songName"].split(" ");
      s = words[0];
      name.text(s);
      console.log("Name:" + name);
      console.log("Song:" + s);
      tagN += 1
      console.log(songId);
      var scores = songdata["scores"];
      console.log(scores);
      for (var rank in scores) {
        var player = scores[rank]["player"];
        var score = scores[rank]["score"];
        var teamid = scores[rank]["team"];
        if (!(teamid in teams)) {
          continue;
        }
        var team = teams[teamid]["teamName"];
        var color = teams[teamid]["color"];
        var html = '<tr><td class="col1"><font color="' + color + '">';
        if (rank == 1) {
          ranked = "♛";
        }
        else {
          ranked = rank.toLocaleString()
        }
        html += ranked
        html += ' : [' + team + '] ' + player + ' : ';
        html += score.toLocaleString() + '</font></td></tr>';

        console.log(html);

        tbody.append(html);
      }
    }
  }
});

function show1() {
  console.log("SHOW 1");
  var song1 = $('#' + "t1");
  var song2 = $('#' + "t2");
  var song3 = $('#' + "t3");
  var song4 = $('#' + "t4");
  var tab1 = $('#one');
  var tab2 = $('#two');
  var tab3 = $('#three');
  var tab4 = $('#four');
  song1.show();
  song2.hide();
  song3.hide();
  song4.hide();
  tab1.addClass('active');
  tab2.removeClass('active');
  tab3.removeClass('active');
  tab4.removeClass('active');
}
function show2() {
  console.log("SHOW 2");
  var song1 = $('#' + "t1");
  var song2 = $('#' + "t2");
  var song3 = $('#' + "t3");
  var song4 = $('#' + "t4");
  var tab1 = $('#one');
  var tab2 = $('#two');
  var tab3 = $('#three');
  var tab4 = $('#four');
  song1.hide();
  song2.show();
  song3.hide();
  song4.hide();
  tab1.removeClass('active');
  tab2.addClass('active');
  tab3.removeClass('active');
  tab4.removeClass('active');
}
function show3() {
  console.log("SHOW 3");
  var song1 = $('#' + "t1");
  var song2 = $('#' + "t2");
  var song3 = $('#' + "t3");
  var song4 = $('#' + "t4");
  var tab1 = $('#one');
  var tab2 = $('#two');
  var tab3 = $('#three');
  var tab4 = $('#four');
  song1.hide();
  song2.hide();
  song3.show();
  song4.hide();
  tab1.removeClass('active');
  tab2.removeClass('active');
  tab3.addClass('active');
  tab4.removeClass('active');
}
function show4() {
  console.log("SHOW 4");
  var song1 = $('#' + "t1");
  var song2 = $('#' + "t2");
  var song3 = $('#' + "t3");
  var song4 = $('#' + "t4");
  var tab1 = $('#one');
  var tab2 = $('#two');
  var tab3 = $('#three');
  var tab4 = $('#four');
  song1.hide();
  song2.hide();
  song3.hide();
  song4.show();
  tab1.removeClass('active');
  tab2.removeClass('active');
  tab3.removeClass('active');
  tab4.addClass('active');
}

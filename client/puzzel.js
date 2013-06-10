function storeLocal (){
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
  } catch(e) {
      return false;
  }
}


Template.viewscorepuzzel.texthigh = function(index){
  if(index == 1){
    return 'Zo te zien ben jij een puzzel fanaat!';
  }else if(index >= 1 && index <= 5){
    return 'Wowzers! Top 5';
  }
  return 'Bummer je staat niet in de top 5!';
}


Template.puzzelGame.rendered = function(){
  $(document).ready(function() {
    var images = new Array(
      '/rijksimg/small/painting3.jpg',
      '/rijksimg/small/bucolia.jpg'
    );
    var l = images.length;
    var randomElement = Math.floor( l * Math.random() );
    document.getElementById("gamePuzzle").src = images[randomElement];

    var settings = { 
      rows: 3,                    // number of rows [3 ... 9] 
      cols: 3,                    // number of columns [3 ... 9] 
      hole: 9,                   // initial hole position [1 ... rows*columns] 
      shuffle: true,             // initially show shuffled pieces [true|false] 
      numbers: false,              // initially show numbers on pieces [true|false] 
      language: 'en',             // language for gui elements [language code] 
      beginScore: 200,
      control: { 
        shufflePieces: false,    // display 'Shuffle' button [true|false] 
        confirmShuffle: false,   // ask before shuffling [true|false] 
        toggleOriginal: false,   // display 'Original' button [true|false] 
        toggleNumbers: false,    // display 'Numbers' button [true|false] 
        counter: false,          // display moves counter [true|false] 
        timer: false,            // display timer (seconds) [true|false] 
        pauseTimer: false         
      }, 
      success: { 
        fadeOriginal: true,    // cross-fade original image [true|false] 
        callback: function(results){
          Meteor.call('insertHighscore', Meteor.userId(), 'puzzel', 1, results.score, function (err, res){
            Meteor.call('refreshUserScore', Meteor.userId());
            if(storeLocal){
              Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
                localStorage.setItem(Meteor.userId(), res);
              });
            }
          });
          setTimeout(function(){Meteor.Router.to('/viewscorepuzzel')}, 1000);
        },    // callback a user-defined function [function]  
        callbackTimeout: 300    // time in ms after which the callback is called 
      }, 
      animation: { 
        shuffleRounds: 2,       // number of shuffle rounds [1 ... ] 
        shuffleSpeed: 800,      // time in ms to perform a shuffle round 
        slidingSpeed: 200,      // time in ms for a single move 
        fadeOriginalSpeed: 600  // time in ms to cross-fade original image 
      },  
      style: { 
        gridSize: 2,            // space between two pieces in px 
        overlap: true,          // if true, adjacent piece borders will overlap 
        // applies only if gridSize is set to 0 
        backgroundOpacity: 0.2  // opacity of the original image behind the pieces 
      // [0 ... 1] (0 means no display) 
      } 
    } 
    $('#gamePuzzle').jqPuzzle(settings);
  });
}


Template.viewscorepuzzel.created = function(){
  Meteor.call('rankingLevelList', Meteor.userId(), 'puzzel', 1, function (err, res){
    Session.set('userHighscoreLevelList', res);
  });
}

Template.viewscorepuzzel.testUser = function(bool){
  return bool;
}
Template.viewscorepuzzel.userlist = function(){
  console.log('rankingLevelList');
  
  var data = Session.get('userHighscoreLevelList');
  if(!data){
    Meteor.call('rankingLevelList', Meteor.userId(), 'puzzel', 1, function (err, res){
      Session.set('userHighscoreLevelList', res);
    });
  }
  console.log(data);
  return data;
}


// Facebook share
Template.viewscorepuzzel.events({
  'click #publishwall': publish_to_wall
});

function publish_to_wall(e,t){
  e.preventDefault();
  var data = Session.get('userHighscoreLevelList');
  var highscore = _.find(data, function(obj){ 
    if(obj.isUser){
      return obj;
    }
  });
  
  FB.ui({
    method: 'feed',
    name: 'Hoera! Ik heb '+highscore.game+' gehaald met RKSMSM!',
    caption: 'Ik heb zojuist '+highscore.score+' punten gehaald met '+highscore.game+'!',
    description: (
      'Klik hier om mijn voortgang bij te houden.'
    ),
    link: 'http://rksmsm.meteor.com/',
    picture: 'http://rksmsm.meteor.com/img/main-logo.png'
  }, function(response) {
    if (response && response.post_id) {
      // alert('Post was published.');
    } else {
      // alert('Post was not published.');
    }
  });
}



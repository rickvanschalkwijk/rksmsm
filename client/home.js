/**
 * EVENTS
 */
function storeLocal (){
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
  } catch(e) {
      return false;
  }
}
// event handler logins
Template.home.events({
  
});

Template.home.profilepic = function (){
  if(Meteor.user() != null){
    var user = Meteor.user();

    if(user.profile.picture){
      var picture = Meteor.user().profile.picture;
      return picture;
    }else{
      return "/img/default-avatar.png";
    }
  }
}

Template.home.scoreUser = function(){
  if(storeLocal){
    var score = localStorage.getItem(Meteor.userId());
    if(score == null){
      Meteor.call('getTotalUserScoreClean', Meteor.userId(), function (err, res){
        console.log(res);
        localStorage.setItem(Meteor.userId(), res);
        var elem = $('#userScore');
        elem.html(res); 
      });
    }else{
      return localStorage.getItem(Meteor.userId());
    }
  }else{
    Meteor.call('getTotalUserScoreClean', Meteor.userId(), function (err, res){
      console.log(res);
      var elem = $('#userScore');
      elem.html(res);  
    });
  }
}

/**
 * FUNCTIONS
 */

// playalone
function playalone(e,t){
  Meteor.Router.to('/singleplayer');
}

// playgroup
function playgroup(e,t){
  Meteor.Router.to('/multiplayer');
}
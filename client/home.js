console.log("home js loaded");

/**
 * EVENTS
 */

// event handler logins
Template.home.events({
  'click #play-alone': playalone,
  'click #play-group': playgroup
});

Template.home.profilepic = function (){
  if(Meteor.user() != null){
    var user = Meteor.user();

    if(user.profile.picture){
      var picture = Meteor.user().profile.picture;
      return picture;
    }else{
      return "/img/default-avatar.jpg";
    }
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
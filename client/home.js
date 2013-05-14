console.log("home js loaded");

/**
 * EVENTS
 */

// event handler logins
Template.home.events({
  'click #play-alone': playalone,
  'click #play-group': playgroup
});


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
console.log("rksmsm loaded");



/* user */
Template.home.user = function(){
  if(Meteor.user() != null){
    var username = Meteor.user().profile.name;
    console.log(username);
    return username;
  }
}

Template.home.events({
	'click #play-alone-btn' : playAlone,
	'click #play-group-btn' : playGroup
});

function playAlone(e, t){
	e.preventDefault();
	Meteor.Router.to('/singleplayer');
}

function playGroup(e, t){
	e.preventDefault();
	Meteor.Router.to('/multiplayer');
}
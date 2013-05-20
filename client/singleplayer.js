Template.singleGameScreen.events({
	'click #memory' : function(e, t){
		Meteor.Router.to('/memory');
	},
	'click #slidepuzzel' : function(e, t){
		Meteor.Router.to('/puzzel');
	},
	'click #trivia' : function(e, t){
		Meteor.Router.to('/trivia');
	}
});
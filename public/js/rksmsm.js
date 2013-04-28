if (Meteor.isClient) {
	
  Meteor.Router.add({
  	'/', 'home',
  	'/signin',
  	'/select_picture',
  	'/games',
  	'/games/:gameid',
  	''
  });		
	
  Template.hello.greeting = function () {
    return "Welcome to rksmsm.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

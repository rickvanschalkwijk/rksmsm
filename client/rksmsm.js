console.log("rksmsm loaded");



/* user */
Template.home.user = function(){
  if(Meteor.user() != null){
    var username = Meteor.user().profile.name;
    console.log(username);
    return username;
  }
}
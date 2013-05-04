// first, remove configuration entry in case service is already configured
var services = ['facebook'];

var i = 0;
for(i; i < services.length; i++) {
  // Remove current login configurations
  Accounts.loginServiceConfiguration.remove({
    service: services[i]
  });
}

/**
 *  Create Facebook configuration
 */
Accounts.loginServiceConfiguration.insert({
  service: "facebook",
  appId: "295545233913371",
  secret: "b9f936e979f82c823be74d1117c10fdc"
});


Accounts.onCreateUser(function(options, user) {
  // logging user for testing
  console.log(user);
  user.profile = options.profile || {};

  if(options.profile){
    console.log("options profile");
    // if the user logged in with facebook
    if(user.services.facebook){
      // email of user
      options.profile.email = user.services.facebook.email;
      // full name
      options.profile.name = user.services.facebook.name;
      // first name
      options.profile.first_name = user.services.facebook.first_name;
      // last name
      options.profile.last_name = user.services.facebook.last_name;
      // gender
      options.profile.gender = user.services.facebook.gender;
      //  country of origin, example nl_NL means dutch
      options.profile.locale = user.services.facebook.locale;
      // the profile picture
      options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    }else if(user.services.twitter){
      options.profile.picture = "https://api.twitter.com/1/users/profile_image?id="+user.services.twitter.id+"&size=bigger";
    }else if(user.services.google){
      options.profile.picture = "https://www.google.com/s2/photos/profile/"+user.services.google.id;
    }

    user.profile = options.profile;
  }else{
    console.log("custom account");
    // if create custom login
    user.profile.name = user.username;
    user.profile.email = user.emails[0].address;
    user.profile.emailverified = user.emails[0].verified;
  }
  // the stuff that gets saved
  // console.log(options);
  return user;
});



console.log("login js loaded");

/**
 * LOGIN CONTROLLER
 */


// set session
Session.set('logged_in', false);
Session.set('acclog', false);

/**
 * EVENTS
 */

// event handler logins
Template.login.events({
  'click #facebooklogin': facebookLogin,
  'click #accountlogin': accountLogin,
  'click #registerAccount': registerAccount
});

Template.loginacc.events({
  'submit #customAccountLogin' : customLogin
});

Template.register.events({
  'submit #formCreateAccount' :createAccount
});

// event handler logout
Template.header.events({
  'click #logout' : logout
});

/**
 * TEMPLATE
 */

// on template create, for redirect if user already logged in
Template.login.created = function(){
  if(Meteor.userId() != null){
    Session.set('logged_in', true);
    Meteor.Router.to('/');
  }else{
    console.log("not logged in yet");
  }
}

Template.login.acclog = function(){
  console.log("test");
  if(Session.get('acclog')){
    return true;
  }else{
    return false;
  }
  
}

// Logout functions
Template.header.loggedIn = function(){
  return (Meteor.user() != null);
}

Template.home.user = function(){
  if(Meteor.user() != null){
    var username = Meteor.user().username;
    return username;
  }
}


/**
 * FUNCTIONS
 */

// logout
function logout(e,t){
  e.preventDefault();
  console.log("logging out");
  Meteor.logout(function(err){
    if(err){
      console.log(err);
    }
    Session.set('logged_in', false);
  });
}

// Facebook login
function facebookLogin(e,t){
  e.preventDefault();
  Meteor.loginWithFacebook(function(err){
    if (err) {
      return console.log(err);
    }
    Session.set('logged_in', true);
  });
}

// redirect account login
function accountLogin(e,t){
  e.preventDefault();
  console.log("accountLogin init");
  Meteor.Router.to('/loginacc');
}

// custom login
function customLogin(e,t){
  e.preventDefault();
  console.log("customLogin init");

  var username = t.find('#username').value,
      password = t.find('#password').value

  console.log(username, password);

  if(username != '' && password != ''){
    Meteor.loginWithPassword(username, password, function(err){
      if (err) {
        // Inform the user that account creation failed
        console.log(err);
      } else {
        // Success. 
        console.log("logged in");
        Session.set('acclog', false);
        Meteor.Router.to('/');
      }
    });
  }
}

// go to register page
function registerAccount(e,t){
  e.preventDefault();
  console.log("register init");
  Meteor.Router.to('/register');
}

// create account
function createAccount(e,t){
  e.preventDefault();
  console.log("create init");

  var username = t.find('#username').value,
      email = t.find('#email').value,
      password = t.find('#password').value

  console.log(username, email, password);

  if(username != '' && email != '' && password != ''){
    console.log("creating account");
    Accounts.createUser({ 
        username: username,
        email: email,
        password : password
      }, function(err){
        if (err) {
          // Inform the user that account creation failed
          console.log(err);
        } else {
          // Success. Account has been created and the user
          console.log("account created");
          Meteor.Router.to('/');
        }
    });
  }else{
    console.log("nothing")
  }
  

}






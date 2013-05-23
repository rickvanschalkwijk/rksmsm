Template.highscore.rendered = function(){
  // console.log('highscore template rendered');

};

Template.userMenu.rendered = function(){
  // console.log('getTotalUserscore');
  var elem = $('#totalscore span');
  Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
    elem.html(res);
  });
};

Template.gameMenu.rendered = function(){
  // console.log('getTotalUserscore');
  var elem = $('#totalscore span');
  Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
    elem.html(res);
  });
};

Template.gameMenuMemory.rendered = function(){
  // console.log('getTotalUserscore');
  var elem = $('#totalscore span');
  Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
    elem.html(res);
  });
};

// event handler logins
Template.highscore.events({
  'click #inserting': insertcall,
  'click #update': updatescall,
  'click #remove': removecollection
});

function insertcall(){
  Meteor.call('insertHighscore', 'asdfjklhg', 'test', 1, 32);
};

function updatescall(){
  Meteor.call('getHighscores', function (err, res){
    console.log(res);
  });
};

function removecollection(){
  // console.log('removecollection');
  Meteor.call('removeHighscore');
};
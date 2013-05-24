Template.highscore.rendered = function(){
  // console.log('highscore template rendered');

};






// event handler logins
Template.highscore.events({
  'click #inserting': insertcall,
  'click #update': updatescall,
  'click #rankingMemory': rankingGame,
  'click #rankingMemoryLevel': rankingLevel,
  'click #rankingUsers': rankingUser,
  'click #remove': removecollection
});

function insertcall(){
  // Meteor.call('insertHighscore', 'asdfjklhg', 'test', 1, 32);
  Meteor.call('insertHighscore',Meteor.userId(),'memory',0,10);
  Meteor.call('insertHighscore',Meteor.userId(),'memory',1,12);
  Meteor.call('insertHighscore',Meteor.userId(),'puzzel',0,14);
  Meteor.call('insertHighscore',Meteor.userId(),'puzzel',1,16);
};

function updatescall(){
  Meteor.call('getHighscores', function (err, res){
    console.log(res);
  });
};

function rankingGame(){
  console.log('rankingGame');
  Meteor.call('rankingGame', 'memory', function (err, res){
    console.log(res);
  });
};

function rankingLevel(){
  console.log('rankingLevel');
  Meteor.call('rankingLevel', 'memory', 1, function (err, res){
    console.log(res);
  });
};

function rankingUser(){
  console.log('rankingUser');
  Meteor.call('rankingUser', function (err, res){
    console.log(res);
  });
};

function removecollection(){
  // console.log('removecollection');
  Meteor.call('removeHighscore');
};
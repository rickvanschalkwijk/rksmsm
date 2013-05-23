Template.highscore.rendered = function(){
  console.log('highscore template rendered');

};

// event handler logins
Template.highscore.events({
  'click #inserting': insertcall,
  'click #update': updatescall,
  'click #remove': removecollection
});

function insertcall(){
  Meteor.call('insertHighscore', 'asdfjklhg', 'test', 1, 30);
};

function updatescall(){
  Meteor.call('getHighscores', function (err, res){
    console.log(res);
  });
};

function removecollection(){
  console.log('removecollection');
  Meteor.call('removeHighscore');
};
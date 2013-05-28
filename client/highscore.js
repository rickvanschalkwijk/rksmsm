function storeLocal (){
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
  } catch(e) {
      return false;
  }
}

Template.highscore.rendered = function(){
  // console.log('highscore template rendered');

};

Template.highscoreusers.rendered = function(){
  console.log('rankingUser');
  Meteor.call('rankingUser', Meteor.userId(), function (err, res){
    console.log(res);
  });
}




// event handler logins
Template.highscore.events({
  'click #inserting': insertcall,
  'click #update': updatescall,
  'click #rankingMemory': rankingGame,
  'click #rankingMemoryLevel': rankingLevel,
  'click #rankingUsers': rankingUser,
  'click #rankingLists': rankingList,
  'click #refreshUserScore': refreshScoreUser,
  'click #userScore': scoreUser,
  'click #remove': removecollection
});

function insertcall(){
  Meteor.call('insertHighscore',Meteor.userId(),'memory',2,8, function (err, res){
    Meteor.call('refreshUserScore', Meteor.userId());
    if(storeLocal){
      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
        localStorage.setItem(Meteor.userId(), res);
      });
    }
  });
  
};

function refreshScoreUser(){
  Meteor.call('refreshUserScore', Meteor.userId(), function (err, res){
    console.log(res);
  });
};

function scoreUser(){
  Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
    console.log(res);
  });
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

function rankingList(){
  console.log('rankingList');
  Meteor.call('rankingList', Meteor.userId(), function (err, res){
    console.log(res);
  });
};

function removecollection(){
  // console.log('removecollection');
  Meteor.call('removeHighscore');
  localStorage.setItem(Meteor.userId(), 'totaal: 0');
};
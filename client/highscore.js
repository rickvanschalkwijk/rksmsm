function storeLocal (){
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
  } catch(e) {
      return false;
  }
}

Template.highscorememory.testUser = function(bool){
  return bool;
}
Template.highscorememory.userlist = function(){
  console.log('rankingLevelList');
  Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
    Session.set('userHighscoreLevelList', res);
  });
  var data = Session.get('userHighscoreLevelList');
  if(!data){
    Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
      Session.set('userHighscoreLevelList', res);
    });
  }
  console.log(data);
  return data;
}

Template.highscoreusers.testUser = function(bool){
  return bool;
}

Template.highscoreusers.userlist = function(){
  Meteor.call('rankingList', Meteor.userId(), function (err, res){
    Session.set('userHighscoreList', res);
  });
  var data = Session.get('userHighscoreList');
  if(!data){
    Meteor.call('rankingList', Meteor.userId(), function (err, res){
      Session.set('userHighscoreList', res);
    });
  }
  data = Session.get('userHighscoreList');
  console.log(data);
  return data;
}

Template.highscore.admin = function(){

  var adminmail = [ 'jeroenhoebe2@hotmail.com',
                    'hoebejeroen@gmail.com'];
  
  if(Meteor.user() != null){
    var checkadmin = adminmail.indexOf(Meteor.user().profile.email);
    if(checkadmin >= 0){
      return true;
    }else{
      return true;
    }
  }
  
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
  Meteor.call('insertHighscore',Meteor.userId(),'memory',1,14, function (err, res){
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
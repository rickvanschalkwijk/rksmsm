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
      return false;
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

function insertcall(e,t){
  e.preventDefault();
  Meteor.call('insertHighscore',Meteor.userId(),'puzzel',1,41, function (err, res){
    Meteor.call('refreshUserScore', Meteor.userId());
    if(storeLocal){
      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
        localStorage.setItem(Meteor.userId(), res);
      });
    }
  });
  
};

function refreshScoreUser(e,t){
  e.preventDefault();
  Meteor.call('refreshUserScore', Meteor.userId(), function (err, res){
    console.log(res);
  });
};

function scoreUser(e,t){
  e.preventDefault();
  Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
    console.log(res);
  });
};


function updatescall(e,t){
  e.preventDefault();
  Meteor.call('getHighscores', function (err, res){
    console.log(res);
  });
};

function rankingGame(e,t){
  e.preventDefault();
  console.log('rankingGame');
  Meteor.call('rankingGame', 'memory', function (err, res){
    console.log(res);
  });
};

function rankingLevel(e,t){
  e.preventDefault();
  console.log('rankingLevel');
  Meteor.call('rankingLevel', 'memory', 1, function (err, res){
    console.log(res);
  });
};

function rankingUser(e,t){
  e.preventDefault();
  console.log('rankingUser');
  Meteor.call('rankingUser', function (err, res){
    console.log(res);
  });
};

function rankingList(e,t){
  e.preventDefault();
  console.log('rankingList');
  Meteor.call('rankingList', Meteor.userId(), function (err, res){
    console.log(res);
  });
};

function removecollection(e,t){
  e.preventDefault();
  // console.log('removecollection');
  Meteor.call('removeHighscore');
  localStorage.setItem(Meteor.userId(), 'totaal: 0');
};
Template.highscores.total = function(){
	Meteor.call('rankingList', Meteor.userId(), function (err, res){
    Session.set('HighscoreList', res);
  });
  var data = Session.get('HighscoreList');
  return data;
}

Template.highscores.testUser = function(bool){
  return bool;
}


Template.highscores.userlist = function(){
  Meteor.call('rankingList', Meteor.userId(), function (err, res){
    Session.set('userHighscoreList', res);
  });
  var data = Session.get('HighscoreList');

  return data;
}

Template.highscores.userlist = function(){
  Meteor.call('rankingList', Meteor.userId(), function (err, res){
    Session.set('userHighscoreList', res);
  });
  var data = Session.get('HighscoreList');

  return data;
}

Template.highscores.memoryBest = function(){
  Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
	  Session.set('rankingLevelList', res);
  });
  if(!Session.get('HighscoreMemory')){
    Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
      Session.set('HighscoreMemory', res);
      var data = res;
    });
 	}else{
    var data = Session.get('HighscoreMemory');
  }
  return data;
}

Template.highscores.memoryBestLevel2 = function(){
  Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 2, function (err, res){
    Session.set('HighscoreMemoryLevel2', res);
  });
  if(!Session.get('HighscoreMemoryLevel2')){
    Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 2, function (err, res){
      Session.set('HighscoreMemoryLevel2', res);
      var data = res;
    });
  }else{
    var data = Session.get('HighscoreMemoryLevel2');
  }
  return data;
}

Template.highscores.slidePuzzelBestLevel1 = function(){
	Meteor.call('rankingLevelList', Meteor.userId(), 'puzzel', 1, function (err, res){
 	  Session.set('HighscorePuzzel', res);
  });
  if(!Session.get('HighscorePuzzel')){
    Meteor.call('rankingLevelList', 'puzzel', 1, function(err, res){
     	Session.set('HighscorePuzzel', res);
      var data = res;
    });
  }else{
 		var data = Session.get('HighscorePuzzel');
 	}
  return data;
}

Template.highscores.slidePuzzelBestLevel2 = function(){
  Meteor.call('rankingLevelList', Meteor.userId(), 'puzzel', 2, function (err, res){
    Session.set('highscorePuzzelLevel2', res);
  });
  if(!Session.get('highscorePuzzelLevel2')){
    Meteor.call('rankingLevelList', 'puzzel', 2, function(err, res){
      Session.set('highscorePuzzelLevel2', res);
      var data = res;
    });
  }else{
    var data = Session.get('highscorePuzzelLevel2');
  }
  return data;
}

Template.highscores.triviaBestLevel1 = function(){
 	Meteor.call('rankingLevelList', Meteor.userId(), 'trivia', 1, function (err, res){
 	  Session.set('highscoreTriviaLevel1', res);
  });
  if(!Session.get('highscoreTriviaLevel1')){
     Meteor.call('rankingLevelList', 'trivia', 1, function(err, res){
      Session.set('highscoreTriviaLevel1', res);
      var data = res;
    });
  }else{
 	  var data = Session.get('highscoreTriviaLevel1');
  }
  return data;
}

Template.highscores.triviaBestLevel2 = function(){
  Meteor.call('rankingLevelList', Meteor.userId(), 'trivia', 2, function (err, res){
    Session.set('highscoreTriviaLevel2', res);
  });
  if(!Session.get('highscoreTriviaLevel2')){
    Meteor.call('rankingLevelList', Meteor.userId(), 'trivia', 2, function (err, res){
      Session.set('highscoreTriviaLevel2', res);
      var data = res;
    });
  }else{
    var data = Session.get('highscoreTriviaLevel2');  
  }
  return data;
}

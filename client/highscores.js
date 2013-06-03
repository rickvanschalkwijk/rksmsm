
Template.highscores.total = function(){
	Meteor.call('rankingList', Meteor.userId(), function (err, res){
    Session.set('HighscoreList', res);
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
	    Session.set('HighscoreMemory', res);
    });
	var data = Session.get('HighscoreMemory');
  return data;
}

Template.highscores.SlidePuzzelBest = function(){
	Meteor.call('rankingLevelList', Meteor.userId(), 'puzzel', 1, function (err, res){
	    Session.set('HighscorePuzzel', res);
    });
    if(!Session.get('HighscorePuzzel')){
    	Meteor.call('getRankingTopGame', 'puzzel', function(err, res){
    		var data = res;
    	});
    }else{
		var data = Session.get('HighscorePuzzel');
  	}
  return data;
}

Template.highscores.triviaBest = function(){
	Meteor.call('rankingLevelList', Meteor.userId(), 'trivia', 1, function (err, res){
	    Session.set('HighscoreTrivia', res);
    });
	var data = Session.get('HighscoreTrivia');
  return data;
}
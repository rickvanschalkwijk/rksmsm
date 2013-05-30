Template.highscores.total = function(){
	Meteor.call('rankingList', Meteor.userId(), function (err, res){
    Session.set('HighscoreList', res);
  });
  var data = Session.get('HighscoreList');

  return data;
}

Template.highscores.SlidePuzzelBest = function(){
	Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
	    Session.set('userHighscoreLevelList', res);
    });
	var data = Session.get('userHighscoreLevelList');
  return data;
}

Template.highscores.memoryBest = function(){
  	var data = Session.get('userHighscoreLevelList');
  	if(!data){
    	Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
      	Session.set('userHighscoreLevelList', res);
    	});
  	}
  // console.log(data);
  return data;
}
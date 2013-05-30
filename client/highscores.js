Template.highscores.rendered = function(){
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
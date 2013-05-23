console.log('Methods init');

Meteor.methods({
//   getTotalUsers: function () {
//     // .. do other stuff ..
//     console.log("getTotalUsers methods");

//     var TotalUsers = Meteor.users.find().count();
//     console.log(TotalUsers);

//     return TotalUsers;
//   }
  setActive: function(userId, bool){
    console.log('setActive method');
    console.log(userId);

    if(!bool){
      Meteor.users.update({ 
        _id:userId 
      },{ 
        $set: {
          'profile.active': false
        }
      },{
        multi: false
      });
      return 'logging out';
    }else{
      var timestamp = ( new Date() ).getTime();

      Meteor.users.update({ 
        _id:userId 
      },{ 
        $set: {
          'profile.active': true,
          'profile.last_activity': timestamp
        }
      },{
        multi: false
      });
      return 'logging in';

    }
  },
  getHighscores: function(){
    console.log('getHighscores');
    var scores = Highscores.find({}).fetch();
    console.log(scores);
    return scores;
  },
  getTotalUserscore: function(userid){
    console.log('getTotalUserscore');
    var scores = Highscores.find({userid: userid}).fetch();

    var totalScore = 0;

    _.each(scores, function(score){
      totalScore += score.score;
    });


    return totalScore;
  },
  insertHighscore: function(userid, game, level, score){
    console.log('insertHighscore');
    var scores = Highscores.findOne({userid: userid, game: game, level: level});
    
    if(scores){
      if(score >= scores.score){
        var timestamp = ( new Date() ).getTime();
        Highscores.update({_id: scores._id}, {$set:{'score': score, 'timestamp': timestamp}});
      }
    }else{
      var timestamp = ( new Date() ).getTime();
      Highscores.insert({userid: userid, game: game, level: level, score: score, timestamp: timestamp});
    }
    return 'insertHighscore';
  },
  removeHighscore: function(){
    console.log('removeHighscore');
    Highscores.remove({});
    return 'removeHighscore';
  }

});





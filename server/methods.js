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
  insertHighscore: function(userid, game, level, score){
    console.log('insertHighscore');
    var scores = Highscores.findOne({userid: userid, game: game, level: level});
    // console.log(scores);

    if(scores){
      // console.log('not empty', scores);
      if(score >= scores.score){
        console.log('het is groter of gelijk aan');
        Highscores.update({_id: scores._id}, {$set:{'score': score}});
      }else{
        console.log('het is lager');
      }


    }else{
      console.log('empty, so create a new one');
      Highscores.insert({userid: userid, game: game, level: level, score: score});
    }
    return 'insertHighscore';
  },
  removeHighscore: function(){
    console.log('removeHighscore');
    Highscores.remove({});
    return 'removeHighscore';
  }

});





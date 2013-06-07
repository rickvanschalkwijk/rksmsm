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
    // console.log('setActive method');
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
    // console.log('getHighscores');
    var scores = Highscores.find({}).fetch();
    console.log(scores);
    return scores;
  },
  getHighscoreLevel: function(userid, game, level){
    var score = Highscores.findOne({userid: userid, game: game, level: level});
    if(score){
      return score;
    }else{
      return 0;
    }
  },
  refreshUserScore: function(userid){
    // console.log('refreshUserScore');
    var userScore = Globalscores.findOne({userid: userid});
    var scores = Highscores.find({userid: userid}).fetch();
    var totalScore = 0;
    _.each(scores, function(score){
      totalScore += score.score;
    });
    if(userScore){
      Globalscores.update({_id: userScore._id}, {$set:{'score': totalScore}});
    }else{
      var username = Meteor.user().profile.name;
      // var username = Meteor.user().username;
      Globalscores.insert({userid: userid, username: username, score: totalScore});
    }
    return totalScore;
  },
  getTotalUserscore: function(userid){
    // console.log('getTotalUserscore');
    var totalScore = Globalscores.findOne({userid: userid});
    if(totalScore){
      return totalScore.score;
    }else{
      return 0;
    }
    
  },
  getTotalUserScoreClean: function(userid){
    var totalScore = Globalscores.findOne({userid: userid});
    if(totalScore){
      return totalScore.score;
    }else{
      return '0';
    }
  },
  insertHighscore: function(userid, game, level, score){
    // console.log('insertHighscore');
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
  },
  removeHighscore: function(){
    // console.log('removeHighscore');
    Highscores.remove({});
    Globalscores.remove({});
    return 'removeHighscore';
  },
  rankingGame: function(game){
    // console.log('rankingGame');
    var scores = Highscores.find({game: game},{sort: {score: -1}}).fetch();
    console.log(scores);
    return scores;
  },
  rankingLevel: function(game, level){
    // console.log('rankingLevel');
    var scores = Highscores.find({game: game, level: level}).fetch();
    return scores;
  },
  rankingUser: function(){
    console.log('rankingUser');
    var ranking = Globalscores.find({}, {sort: { score: -1 }}).fetch();
    return ranking;
  },
  rankingList: function(userid){
    console.log('rankingList');
    var ranking = Globalscores.find({}, {sort: { score: -1 }}).fetch();
    var mapranking = _.map(ranking, function(item){ return item.userid; });
    var indexrank = _.indexOf(mapranking, userid);
    console.log(indexrank);

    if(indexrank == -1){
      var newranking = ranking.slice(0,5);
      for (var i = newranking.length - 1; i >= 0; i--) {
        newranking[i]['index'] = (i+1);
        newranking[i]['isUser'] = false;
      };
    }else if(indexrank >= 0 && indexrank <= 4){
      var newranking = ranking.slice(0,5);
      for (var i = newranking.length - 1; i >= 0; i--) {
        if(i == indexrank){
          newranking[i]['index'] = (indexrank+1);
          newranking[i]['isUser'] = true;
        }else{
          newranking[i]['index'] = (i+1);
          newranking[i]['isUser'] = false;
        }
      };
    }else{
      var newranking = ranking.slice(0,4);
      newranking.push(ranking[indexrank]);
      for (var i = newranking.length - 1; i >= 0; i--) {
        if(i == 4){
          newranking[i]['index'] = (indexrank+1);
          newranking[i]['isUser'] = true;
        }else{
          newranking[i]['index'] = (i+1);
          newranking[i]['isUser'] = false;
        }
      };
    }
    return newranking;
  },
  rankingLevelList: function(userid, game, level){
    console.log('rankingMemoryList');
    var ranking = Highscores.find({game: game, level: level},{sort: {score: -1}}).fetch();
    var mapranking = _.map(ranking, function(item){ return item.userid; });
    var indexrank = _.indexOf(mapranking, userid);
    console.log(indexrank);

    if(indexrank == -1){
      var newranking = ranking.slice(0,5);
      for (var i = newranking.length - 1; i >= 0; i--) {
        var user = Meteor.users.findOne({_id: newranking[i]['userid']})
        newranking[i]['username'] = user.profile.name;
        newranking[i]['index'] = (i+1);
        newranking[i]['isUser'] = false;
      };

    }else if(indexrank >= 0 && indexrank <= 4){
      var newranking = ranking.slice(0,5);
      for (var i = newranking.length - 1; i >= 0; i--) {
        var user = Meteor.users.findOne({_id: newranking[i]['userid']})
        newranking[i]['username'] = user.profile.name;
        if(i == indexrank){
          newranking[i]['index'] = (indexrank+1);
          newranking[i]['isUser'] = true;
        }else{
          newranking[i]['index'] = (i+1);
          newranking[i]['isUser'] = false;
        }
      };
    }else{
      var newranking = ranking.slice(0,4);
      newranking.push(ranking[indexrank]);
      for (var i = newranking.length - 1; i >= 0; i--) {
        var user = Meteor.users.findOne({_id: newranking[i]['userid']})
        newranking[i]['username'] = user.profile.name;
        if(i == 4){
          newranking[i]['index'] = (indexrank+1);
          newranking[i]['isUser'] = true;
        }else{
          newranking[i]['index'] = (i+1);
          newranking[i]['isUser'] = false;
        }
      };
    }

    return newranking;
  },
  getRankingTopGame: function(game){
    var scores = Highscores.find({game: game},{sort: {score: -1}}).fetch();
    var newrank = scores.slice(0,5);
    for(var i = newrank.length; i >= 0; i--){
      var userName = Meteor.users.findOne({_id: newrank[i]['userid']});
      newrank[i]['username'] = userName.profile.name;
    }
    return newrank;
  },
  getRankingTopLevel: function(game, level){
    var scores = Highscores.find({game: game, level: level},{sort: {score: -1}}).fetch();
    var newrank = scores.slice(0,5);
    for(var i = newrank.length; i >= 0; i--){
      var userName = Meteor.users.findOne({_id: newrank[i]['userid']});
      newrank[i]['username'] = userName.profile.name;
    }
    return newrank;
  },
  getGamesPlayed: function(userid){
    console.log('getGamesPlayed');
    var scores = Highscores.find({userid: userid}).fetch();
    var unlockedgames = 0;

    if(scores){
      _.each(scores, function(item){
        unlockedgames++;
      });
    }
    return unlockedgames;
  },
  getTriviaQuestions: function(){
    var quizJSON = {
          "questions": [
              { // Question 1
                "q": "What number is the letter A in the English alphabet?",
                "a": [
                    {"option": "8",      "correct": false},
                    {"option": "14",     "correct": false},
                    {"option": "1",      "correct": true},
                    {"option": "23",     "correct": false}
                ],
                "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
                "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
            },
            { // Question 2
                "q": "How many inches of rain does Michigan get on average per year?",
                "a": [
                    {"option": "149",    "correct": false},
                    {"option": "32",     "correct": true},
                    {"option": "3",      "correct": false},
                    {"option": "1291",   "correct": false} // no comma here
                ],
                "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
                "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 times a year in Michigan.</p>" // no comma here
            },
            { // Question 3
                "q": "In which of these places can you purchase a car?",
                "a": [
                    {"option": "The Zoo",        "correct": false},
                    {"option": "Ebay",           "correct": true},
                    {"option": "Grocery Store",  "correct": false},
                    {"option": "Used Car Lot",   "correct": false} // no comma here
                ],
                "correct": "<p><span>Nice!</span> You can indeed buy a car on Ebay or in a used car lot.</p>",
                "incorrect": "<p><span>No.</span> You can't buy a car at the zoo or in a grocery store, try Ebay or a used car lot instead.</p>" // no comma here
            }
        ]
    };
    return quizJSON;
  }

});





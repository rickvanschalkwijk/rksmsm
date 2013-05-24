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
    // console.log('getHighscores');
    var scores = Highscores.find({}).fetch();
    console.log(scores);
    return scores;
  },
  getTotalUserscore: function(userid){
    // console.log('getTotalUserscore');
    var scores = Highscores.find({userid: userid}).fetch();
    var totalScore = 0;

    _.each(scores, function(score){
      totalScore += score.score;
    });
    totalScore = 'totaal: '+totalScore;

    return totalScore;
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
    return 'removeHighscore';
  },
  rankingGame: function(game){
    console.log('rankingGame');
    var scores = Highscores.find({game: game},{sort: {score: -1}}).fetch();
    return scores;
  },
  rankingLevel: function(game, level){
    console.log('rankingLevel');

    var scores = Highscores.find({game: game, level: level}).fetch();
    return scores;
  },
  rankingUser: function(){
    console.log('rankingUser');

    var scores = Highscores.find({}).fetch();

    var uniqUsers = _.uniq(_.map(scores, function(item){ return item.userid; }));
    // var uniqUsers = _.uniq(scores, false, function(item){ return item.userid; });

    var test = uniqUsers;

    return test;
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





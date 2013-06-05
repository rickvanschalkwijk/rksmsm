function storeLocal (){
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
  } catch(e) {
      return false;
  }
}

Template.userMenu.score = function(){
  if(storeLocal){
    var score = localStorage.getItem(Meteor.userId());
    if(score == null){
      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
        console.log(res);
        localStorage.setItem(Meteor.userId(), res);
        var elem = $('#totalscore span');
        elem.html('totaal: '+res+ '<i class="plus-grey"></i>'); 
      });
    }else{
      return localStorage.getItem(Meteor.userId());
    }
  }else{
    Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
      var elem = $('#totalscore span');
      console.log(res);
      elem.html('totaal: '+res+ '<i class="plus-grey"></i>');  
    });
  }
}

Template.gameMenu.score = function(){
  if(storeLocal){
    var score = localStorage.getItem(Meteor.userId());
    if(score == null){
      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
        console.log(res);
        localStorage.setItem(Meteor.userId(), res);
        var elem = $('#totalscore span');
        elem.html('totaal: '+res+ '<i class="plus-grey"></i>'); 
      });
    }else{
      return localStorage.getItem(Meteor.userId());
    }
  }else{
    Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
      var elem = $('#totalscore span');
      console.log(res);
      elem.html('totaal: '+res+ '<i class="plus-grey"></i>');  
    });
  }
}

Template.gameMenuMemory.score = function(){
  if(storeLocal){
    var score = localStorage.getItem(Meteor.userId());
    if(score == null){
      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
        console.log(res);
        localStorage.setItem(Meteor.userId(), res);
        var elem = $('#totalscore span');
        elem.html('totaal: '+res+ '<i class="plus-grey"></i>'); 
      });
    }else{
      return localStorage.getItem(Meteor.userId());
    }
  }else{
    Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
      var elem = $('#totalscore span');
      console.log(res);
      elem.html('totaal: '+res+ '<i class="plus-grey"></i>');  
    });
  }
}

Template.gameMenuPuzzel.score = function(){
  if(storeLocal){
    var score = localStorage.getItem(Meteor.userId());
    if(score == null){
      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
        console.log(res);
        localStorage.setItem(Meteor.userId(), res);
        var elem = $('#totalscore span');
        elem.html('totaal: '+res+ '<i class="plus-grey"></i>'); 
      });
    }else{
      return localStorage.getItem(Meteor.userId());
    }
  }else{
    Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
      var elem = $('#totalscore span');
      console.log(res);
      elem.html('totaal: '+res+ '<i class="plus-grey"></i>');  
    });
  }
}

Template.gameMenuTrivia.score = function(){
  if(storeLocal){
    var score = localStorage.getItem(Meteor.userId());
    if(score == null){
      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
        console.log(res);
        localStorage.setItem(Meteor.userId(), res);
        var elem = $('#totalscore span');
        elem.html('totaal: '+res+ '<i class="plus-grey"></i>'); 
      });
    }else{
      return localStorage.getItem(Meteor.userId());
    }
  }else{
    Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
      var elem = $('#totalscore span');
      console.log(res);
      elem.html('totaal: '+res+ '<i class="plus-grey"></i>');  
    });
  }
}




Template.logoutMenu.score = function(){
  if(storeLocal){
    var score = localStorage.getItem(Meteor.userId());
    if(score == null || score == 'totaal: 0'){
      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
        console.log(res);
        localStorage.setItem(Meteor.userId(), res);
        var elem = $('#totalscore span');
        elem.html(res); 
      });
    }else{
      return localStorage.getItem(Meteor.userId());
    }
  }else{
    Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
      var elem = $('#totalscore span');
      console.log(res);
      elem.html(res);  
    });
  }
}
Session.set('gamesUnlocked', 0);

Template.singleplayer.created = function(){
  Meteor.call('getGamesPlayed', Meteor.userId(), function (err, res){
    Session.set('gamesUnlocked', res);
  });
}
Template.singleGameScreen.unlockedMemoryOne = function(){
  var unlockedgames = Session.get('gamesUnlocked');
  if(unlockedgames > 0){
    return true;
  }
  
  return false;
}

Template.singleGameScreen.unlockedTriviaOne = function(){
  var unlockedgames = Session.get('gamesUnlocked');
  if(unlockedgames >= 1){
    return true;
  }
  
  return false
}

Template.singleGameScreen.unlockedPuzzelOne = function(){
  var unlockedgames = Session.get('gamesUnlocked');
  if(unlockedgames >= 2){
    return true;
  }
  
  return false;
}

Template.singleGameScreen.unlockedTriviaOne.unlockedPuzzelOne = function(){
  var unlockedgames = Session.get('gamesUnlocked');
  if(unlockedgames >= 2){
    return true;
  }
  
  return false;
}

Template.singleGameScreen.unlockedMemoryTwo = function(){
  var unlockedgames = Session.get('gamesUnlocked');
  if(unlockedgames >= 3){
    return true;
  }
  
  return false;
}

Template.singleGameScreen.unlockedPuzzelTwo = function (){
  var unlockedgames = Session.get('gamesUnlocked');
  if(unlockedgames >= 4){
    return true;
  }
  
  return false; 
}

Template.gameMenuMemory.events({
  'click #pauseBtn': initPause
});

Template.gameMenuTrivia.events({
  'click #pauseBtn': initPause
});

Template.gameMenuPuzzel.events({
  'click #pauseBtn': initPause
});

Template.pauseTemp.events({
  'click #unpauseBtn': initPause
});

function initPause (e,t) {
  e.preventDefault();
  var pauseelem = $('#pause').css('display');
  if(pauseelem == 'none'){
    $('#pause').css('display','block');
  }else{
    $('#pause').css('display','none');
  }
}

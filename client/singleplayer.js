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

Template.gameMenu.score = function(){
  if(storeLocal){
    var score = localStorage.getItem(Meteor.userId());
    if(score == null){
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


Template.gameMenuMemory.events({
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

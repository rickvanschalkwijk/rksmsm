Template.userMenu.rendered = function(){
  // console.log('getTotalUserscore');
  var elem = $('#totalscore span');
  Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
    elem.html(res);
  });
};

Template.gameMenu.rendered = function(){
  // console.log('getTotalUserscore');
  var elem = $('#totalscore span');
  Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
    elem.html(res);
  });
};

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

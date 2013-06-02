function storeLocal (){
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
  } catch(e) {
      return false;
  }
}




Template.memoryGame.rendered = function(){
	$('#my-memorygame').quizyMemoryGame({
		itemWidth: 80,
		itemHeight: 80, 
		itemsMargin:15,
		colCount:3,
		animType:'flip',
		flipAnim:'tb',
		animSpeed:150,
		openDelay:1000,
		resultIcons:false,
		gameSummary:false,
		textSummaryTitle:'Goed gedaan, je hebt het spel voltooid!',
		textSummaryClicks: '',
		textSummaryTime: '',
		onFinishCall : function(param){
			console.log(param);
			Meteor.call('insertHighscore', Meteor.userId(), 'memory', 1, param.score, function (err, res){
		    Meteor.call('refreshUserScore', Meteor.userId());
		    if(storeLocal){
		      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
		        localStorage.setItem(Meteor.userId(), res);
		      });
		    }
		  });
			setTimeout(function(){Meteor.Router.to('/viewscorememory')}, 1000);
		}
	});
}

Template.memoryIntro.rendered = function(){
	$('#my-memoryintro').quizyMemoryGame({
		itemWidth: 80,
		itemHeight: 80, 
		itemsMargin:20,
		colCount:2,
		animType:'flip',
		flipAnim:'tb',
		animSpeed:150,
		openDelay:1000,
		resultIcons:false,
		gameSummary:false,
		textSummaryTitle:'Goed gedaan, je hebt het spel voltooid!',
		textSummaryClicks: '',
		textSummaryTime: '',
		onFinishCall : function(param){
			setTimeout(function(){Meteor.Router.to('/introendmemory')}, 1000);
		}
	});
}



Template.viewscorememory.created = function(){
  Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
    Session.set('userHighscoreLevelList', res);
  });
}

Template.viewscorememory.testUser = function(bool){
  return bool;
}

Template.viewscorememory.userlist = function(){
  console.log('rankingLevelList');
  var data = Session.get('userHighscoreLevelList');
  if(!data){
    Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
      Session.set('userHighscoreLevelList', res);
    });
  }
  // console.log(data);
  return data;
}

// Facebook share

Template.viewscorememory.facebooklogin = function(){
  if(Meteor.user() != null){
    if(Meteor.user().profile.picture){ 
      return true; 
    }else{ return false; }
  }else{ return false; }
}


Template.viewscorememory.events({
  'click #publishwall': publish_to_wall
});

function publish_to_wall(e,t){
  e.preventDefault();
  var data = Session.get('userHighscoreLevelList');
  var highscore = _.find(data, function(obj){ 
    if(obj.isUser){
      return obj;
    }
  });
  
  FB.ui({
    method: 'feed',
    name: 'Hoera! Ik heb '+highscore.game+' gehaald met RKSMSM!',
    caption: 'Ik heb zojuist '+highscore.score+' punten gehaald met '+highscore.game+'!',
    description: (
      'Klik hier om mijn voortgang bij te houden.'
    ),
    link: 'http://rksmsm.meteor.com/',
    picture: 'http://rksmsm.meteor.com/img/main-logo.png'
  }, function(response) {
    if (response && response.post_id) {
      // alert('Post was published.');
    } else {
      // alert('Post was not published.');
    }
  });
}





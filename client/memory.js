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

Template.gameMenuMemory.rendered = function(){
  // console.log('getTotalUserscore');
  var elem = $('#totalscore span');
  Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
    elem.html(res);
  });
};


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
  console.log(data);
  return data;
}

// Template.viewscorememory.testUser = function(bool){
//   return bool;
// }
// Template.viewscorememory.userlist = function(){
//   console.log('rankingLevelList');
//   Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
//     Session.set('userHighscoreLevelList', res);
//   });
//   var data = Session.get('userHighscoreLevelList');
//   if(!data){
//     Meteor.call('rankingLevelList', Meteor.userId(), 'memory', 1, function (err, res){
//       Session.set('userHighscoreLevelList', res);
//     });
//   }
//   console.log(data);
//   return data;
// }






function storeLocal (){
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
  } catch(e) {
      return false;
  }
}

Session.set("memorySummary", {clicks: 0, time: 0, items: 0, score: 0} );
Session.set("Pause", true );

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
		    if(storeLocal){
		      Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
		        localStorage.setItem(Meteor.userId(), res);
		      });
		    }
		  });
			Session.set("memorySummary", param);
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
			console.log(param);
			// Meteor.call('insertHighscore', Meteor.userId(), 'memory', 0, param.score);
			 Session.set("memorySummary", param);
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

Template.memoryViewscore.score = function(){
	console.log( Session.get("memorySummary") );
	var summary = Session.get("memorySummary");
	return summary.score;
}

Template.memoryViewscore.clicks = function(){
	var summary = Session.get("memorySummary");
	return summary.clicks;
}

Template.memoryViewscore.time = function(){
	var summary = Session.get("memorySummary");
	return summary.time;
}








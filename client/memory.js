Session.set("memorySummary", {clicks: 0, time: 0, items: 0} );

Template.memoryGame.rendered = function(){
	$('#my-memorygame').quizyMemoryGame({
		itemWidth: 80,
		itemHeight: 80, 
		itemsMargin:15,
		colCount:3,
		animType:'flip',
		flipAnim:'tb',
		animSpeed:250,
		resultIcons:false,
		gameSummary:false,
		textSummaryTitle:'Goed gedaan, je hebt het spel voltooid!',
		textSummaryClicks: '',
		textSummaryTime: '',
		onFinishCall : function(param){
			console.log(param);
			var score = 30 - ( (param.clicks-param.items) * 0.5 );
			Meteor.call('insertHighscore', Meteor.userId(), 'memory', 1, score);
			Session.set("memorySummary", param);
			setTimeout(function(){Meteor.Router.to('/viewscorememory')}, 7000);
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
		animSpeed:250,
		resultIcons:false,
		gameSummary:false,
		textSummaryTitle:'Goed gedaan, je hebt het spel voltooid!',
		textSummaryClicks: '',
		textSummaryTime: '',
		onFinishCall : function(param){
			console.log(param);
			var score = 30 - ( (param.clicks-param.items) * 0.5 );
			Meteor.call('insertHighscore', Meteor.userId(), 'memory', 0, score);
			 Session.set("memorySummary", param);
			setTimeout(function(){Meteor.Router.to('/introendmemory')}, 7000);
		}
	});
}

Template.memoryViewscore.gamesummary = function(){
	console.log( Session.get("memorySummary") );
	var summary = Session.get("memorySummary");
	var points = 30 - ( (summary.clicks-summary.items) * 0.5 );
	return ''+summary.time+' seconden en '+summary.clicks+' vakjes omgedraaid. Wat neer komt op een score van '+points+' punten.';
}









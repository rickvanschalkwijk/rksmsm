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
		textSummaryTitle:'Goed gedaan, je hebt het spel voltooid!',
		textSummaryClicks: '',
		textSummaryTime: '',
		onFinishCall : function(param){
			console.log(param);
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
		textSummaryTitle:'Goed gedaan, je hebt het spel voltooid!',
		textSummaryClicks: '',
		textSummaryTime: '',
		onFinishCall : function(param){
			console.log(param);
			 Session.set("memorySummary", param);
			setTimeout(function(){Meteor.Router.to('/introendmemory')}, 7000);
		}
	});
}










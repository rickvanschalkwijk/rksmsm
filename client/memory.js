Template.memoryGame.rendered = function(){
	$('#my-memorygame').quizyMemoryGame({
		itemWidth: 80,
		itemHeight: 80, 
		itemsMargin:20,
		colCount:3,
		animType:'flip',
		flipAnim:'tb',
		animSpeed:250,
		resultIcons:true,
		textSummaryTitle:'Goed gedaan, je hebt het spel voltooid!',
		textSummaryClicks: '',
		textSummaryTime: '',
		onFinishCall : function(param){
			setTimeout(function(){Meteor.Router.to('/singleplayer')}, 7000);
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
		resultIcons:true,
		textSummaryTitle:'Goed gedaan, je hebt het spel voltooid!',
		textSummaryClicks: '',
		textSummaryTime: '',
		onFinishCall : function(param){
			setTimeout(function(){Meteor.Router.to('/gamememory')}, 7000);
		}
	});
}
Template.memoryGame.rendered = function(){
	$('#my-memorygame').quizyMemoryGame({
		itemWidth: 100,
		itemHeight: 100, 
		itemsMargin:20,
		colCount:3,
		animType:'flip',
		flipAnim:'tb',
		animSpeed:250,
		resultIcons:true,
		textSummaryTitle:'Goed gedaan, je hebt het spel voltooit!',
		textSummaryClicks: '',
		textSummaryTime: '',
		onFinishCall : function(param){
									
									setTimeout(function(){Meteor.Router.to('/singleplayer')}, 7000);
								}
	});
}
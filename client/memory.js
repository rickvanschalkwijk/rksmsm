Template.memoryGame.rendered = function(){
	console.log("WAT");
	$('#my-memorygame').quizyMemoryGame({
		itemWidth: 100, 
		itemHeight: 100, 
		itemsMargin:40, 
		colCount:3, 
		animType:'flip' , 
		flipAnim:'tb', 
		animSpeed:250, 
		resultIcons:true
	});
}
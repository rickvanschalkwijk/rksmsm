Template.memory.memoryGame = function(){
	console.log("WAT");
	$('#my-memorygame').quizyMemoryGame({
		itemWidth: 156, 
		itemHeight: 156, 
		itemsMargin:40, 
		colCount:3, 
		animType:'flip' , 
		flipAnim:'tb', 
		animSpeed:250, 
		resultIcons:true
	});
}
Template.wordsearch.rendered = function(){
	var words = "melkmeisje, rijks, museum, kunst, vermeer";
			
			//attach the game to a div
			$("#theGrid").wordsearchwidget({"wordlist" : words,"gridsize" : 10});
};
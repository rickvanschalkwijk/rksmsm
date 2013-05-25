Template.wordsearch.rendered = function(){
	var words = "melkmeisje, nachtwacht, fietstunnel, kunst, amsterdam, vermeer, rembrandt";
			
			//attach the game to a div
			$("#theGrid").wordsearchwidget({"wordlist" : words,"gridsize" : 10});
};
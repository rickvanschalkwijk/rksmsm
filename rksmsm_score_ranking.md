#RKSMSM

##Scores
Define here how the scores are to be calculated.
###Memory
	var points = 30
	var items = aantal kaartjes
	var clicks = het aantal keer geklikt
	var time = het aantal seconden dat je over het spel hebt gedaan
	
	function countScore(items, clicks){
		if(clicks > items){
			points -= 0.5;
		}
		return points;
	}
	
	var result = 'De score is '+countScore(items,clicks);
###Puzzel

###Trivia

##Ranking

##Score Collection
This could be done in two ways:

- First, we could add the score to the Meteor.user().
- Second, we could make a new Collection and add the userid to it.

Now it's done the second way.

The Collection is serverside and the functions are called with methods.
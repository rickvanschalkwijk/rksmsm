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

##Sharing

###Facebook

####Original

	"http://www.facebook.com/dialog/feed?app_id=YOU_APP_ID&link=A_LINK_HERE&picture=PATH_TO_A_PICTURE&name=SOME_NAME&caption=SOME_CAPTION&description=SOME_DESCRIPTION&message=MESSAGE_TO_POST_ON_WALL&redirect_uri=REDIRECT_URL_AFTER_POST"


####RKSMSM app id

  	appId: "466417016772314",
	secret: "74fdf07fb35b298cdb7a538e99344c0c"

####Original working with our id

	https://www.facebook.com/dialog/feed?
  	app_id=466417016772314&
	link=https://developers.facebook.com/docs/reference/dialogs/&
  	picture=http://rksmsm.meteor.com/img/main-logo.png&
  	name=Facebook%20Dialogs&
  	caption=Reference%20Documentation&
  	description=Using%20Dialogs%20to%20interact%20with%20users.&
  	redirect_uri=https://rksmsm.meteor.com/

####Customized version

  	https://www.facebook.com/dialog/feed?
  	app_id=466417016772314&
  	link=https://developers.facebook.com/docs/reference/dialogs/&
  	picture=http://rksmsm.meteor.com/img/main-logo.png&
  	name=Highscore%20Memory&
  	caption=RKSMSM%20the%20game&
  	description=Score%20behaald%20van%2020%20punten.&
  	redirect_uri=https://rksmsm.meteor.com/
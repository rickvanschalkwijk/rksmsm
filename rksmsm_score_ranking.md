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

only by link

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
  	
version with javascript sdk
#### script
	window.fbAsyncInit = function() {
    // init the FB JS SDK

    /* localhost */
    // FB.init({
    //   appId      : '295545233913371',                        // App ID from the app dashboard
    //   channelUrl : 'http://localhost:3003/', // Channel file for x-domain comms
    //   status     : true,                                 // Check Facebook Login status
    //   xfbml      : true                                  // Look for social plugins on the page
    // });
    
    /* online */
    FB.init({
      appId      : '466417016772314',                        // App ID from the app dashboard
      channelUrl : 'http://rksmsm.meteor.com/', // Channel file for x-domain comms
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

    // Additional initialization code such as adding Event Listeners goes here
  	};

  	// Load the SDK asynchronously
  	(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   	}(document, 'script', 'facebook-jssdk'));
   	
#### html js
	// Facebook share

	Template.viewscorememory.facebooklogin = function(){
  	  if(Meteor.user() != null){
    	if(Meteor.user().profile.picture){ 
      		return true; 
    	}else{ return false; }
  	  }else{ return false; }
	}


	Template.viewscorememory.events({
  	'click #publishwall': publish_to_wall
	});

	function publish_to_wall(e,t){
  	  e.preventDefault();
  	  var data = Session.get('userHighscoreLevelList');
  	  var highscore = _.find(data, function(obj){ 
    	if(obj.isUser){
      	return obj;
    	}
  	  });
  
  	  FB.ui({
    	method: 'feed',
    	name: 'Hoera! Ik heb '+highscore.game+' gehaald met RKSMSM!',
    	caption: 'Ik heb zojuist '+highscore.score+' punten gehaald met '+highscore.game+'!',
    	description: (
      	'Klik hier om mijn voortgang bij te houden.'
    	),
    	link: 'http://rksmsm.meteor.com/',
    	picture: 'http://rksmsm.meteor.com/img/main-logo.png'
  	  }, function(response) {
    	if (response && response.post_id) {
      	// alert('Post was published.');
    	} else {
      	// alert('Post was not published.');
    	}
  	  });
	}
 
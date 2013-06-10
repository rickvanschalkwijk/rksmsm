function storeLocal (){
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
  } catch(e) {
      return false;
  }
}

Template.viewscoretrivialevel1.texthigh = function(index){
  if(index == 1){
    return 'Holy Bananas! Je bent eerste!';
  }else if(index >= 1 && index <= 5){
    return 'KLABAM! Goed zo je staat '+index+'de!';
  }
  return 'Dit kan beter!';
}

Template.viewscoretrivialevel2.texthigh = function(index){
  if(index == 1){
    return 'YEAAAHHH! Je bent eerste!';
  }else if(index >= 1 && index <= 5){
    return 'NICE! Je staat in de top 5!';
  }
  return 'Volgende keer beter!';
}


Template.triviaGame.rendered = function(){
var score = 0;
var questionNbr = 1;

$.fn.countdown = function (callback, duration, message) {
    message = message || "";
    var container = $(this[0]).html(duration + message);
    var countdown = setInterval(function () {
        if (--duration) {
            container.html(duration + message);
        } else {
            clearInterval(countdown);
            callback.call(container);   
        }
    }, 1000);
};

var quizJSON; 

if(Session.get('TriviaLevelOne')){
    quizJSON = {
    "questions": [
        { // Question 1
            "q": "Waar is Rembrandt geboren??",
            "a": [
                {"option": "Leiden",            "correct": true},
                {"option": "Amsterdam",         "correct": false},
                {"option": "Monnickendam",      "correct": false}
            ],
            "correct": "<p><span>Dat is correct!</span> Rembrandt is geboren in Leiden!</p>",
            "incorrect": "<p><span>Uhh nee.</span> Rembrant is geboren in Leiden</p>" // no comma here
        },
        { // Question 2
            "q": "Wanneer is het Rijksmuseum geopend?",
            "a": [
                {"option": "1700",    "correct": false},
                {"option": "1750",     "correct": false},
                {"option": "1800",      "correct": true}
            ],
            "correct": "<p><span>Holy bananas!</span> Had niet verwacht dat je die goed zou hebben!</p>",
            "incorrect": "<p><span>Jammer.</span> Sorry. Het Rijksmuseum is in 1800 geopend.</p>" // no comma here
        },
        { // Question 3
            "q": "Wie heeft het melkmeisje geschilderd?",
            "a": [
                {"option": "Vermeer",        "correct": true},
                {"option": "Rembrandt",      "correct": false},
                {"option": "Mozart",         "correct": false}
            ],
            "correct": "<p><span>Nice!</span> Vermeer is de auteur van het melkmeisje.</p>",
            "incorrect": "<p><span>Nee.</span> Cultuur barbaar! Vermeer is de schilder van het melkmeisje.</p>" // no comma here
        },
        { // Question4
            "q": "Hoeveel zalen heeft het Rijksmuseum?",
            "a": [
                {"option": "Minder dan 100",     "correct": false},
                {"option": "Tussen 100 en 200",  "correct": false},
                {"option": "Meer dan 200",       "correct": true}
            ],
            "correct": "<p><span>Goed zo!</span> Het Rijksmuseum heeft ruim 200 zalen.</p>",
            "incorrect": "<p><span>Fout.</span> Het Rijksmuseum heeft ruim 200 zalen!.</p>" // no comma here
        },
         { // Question 5
            "q": "Waar heeft het Rijksmuseum een kleine dependance?",
            "a": [
                {"option": "Amsterdam Centraal",       "correct": false},
                {"option": "Luchthaven Schiphol",      "correct": true},
                {"option": "Euromast Rotterdam",       "correct": false}
            ],
            "correct": "<p><span>Nice!</span> Schiphol is het juiste antwoord.</p>",
            "incorrect": "<p><span>Nee.</span> Schiphol is het juiste antwoord.</p>" // no comma here
        }
    ]};      
}else if(Session.get('TriviaLevelTwo')){
    quizJSON = {
    "questions": [
         { // Question 6
            "q": "Een huishouden van '...'?",
            "a": [
                {"option": "Goud",        "correct": false},
                {"option": "Totale chaos","correct": false},
                {"option": "Jan Steen",   "correct": true}
            ],
            "correct": "<p><span>Yeaaahh!</span> In de 17e eeuw nadat Jan zijn vrouw overleed werd zijn huishouden een chaos.</p>",
            "incorrect": "<p><span>Fout.</span> Het goede antwoord is: 'Jan Steen'.</p>" // no comma here
        },
         { // Question 7
            "q": "Wat is de bezigheid van Wim Pijbes?",
            "a": [
                {"option": "Kunstschilder van landschappen",     "correct": false},
                {"option": "Directeur van het Rijksmuseum",      "correct": true},
                {"option": "Architect van o.a. het Rijksmuseum", "correct": false}
            ],
            "correct": "<p><span>Goed zo!</span> Wim Pijbes is de Directeur van het museum sinds Juni 2008.</p>",
            "incorrect": "<p><span>Nee fout!</span> Helaas, het was de directeur.</p>" // no comma here
        },
         { // Question 8
            "q": "Wat is de oorspronkelijke locatie van het Rijksmuseum",
            "a": [
                {"option": "Den-Haag",        "correct": true},
                {"option": "Amsterdam",      "correct": false},
                {"option": "Rotterdam",         "correct": false}
            ],
            "correct": "<p><span>Goed geantwoord!</span></p>",
            "incorrect": "<p><span>Fout.</span> Het goede antwoord moest zijn: Den-Haag.</p>" // no comma here
        },
         { // Question 9
            "q": "Welke kleur is het meisje van Jan Cornelisz Verspronck",
            "a": [
                {"option": "Oranje",        "correct": false},
                {"option": "Rood",          "correct": false},
                {"option": "Blauw",         "correct": true}
            ],
            "correct": "<p><span>Nice!</span> Je bent op de goede weg!</p>",
            "incorrect": "<p><span>Fout.</span> Het meisje van jan Cornelisz Verspronck is blauw.</p>" // no comma here
        },
         { // Question 10
            "q": "Welke kleur is de hoofddoek van het melkmeisje?",
            "a": [
                {"option": "Paars",        "correct": false},
                {"option": "Geel",          "correct": false},
                {"option": "Wit",         "correct": true}
            ],
            "correct": "<p><span>Nice!</span> Haar hoofddoek is inderdaad wit.</p>",
            "incorrect": "<p><span>Nee.</span> Cultuur barbaar! Werp zo eens een goede blik op het schilderij als je binnen bent.</p>" // no comma here
        },
         { // Question 11
            "q": "Waar staat de molen van Jakob?",
            "a": [
                {"option": "Wijk bij Duurstede",        "correct": true},
                {"option": "Ransdorp",      "correct": false},
                {"option": "Haarlem",         "correct": false}
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> Het goede antwoord moet zijn: 'Wijk bij Duurstede'.</p>" // no comma here
        },
         /*{ // Question 12
            "q": "Hoe staat het Straatje ook wel bekend?",
            "a": [
                {"option": "Gezicht op huizen in Delft",        "correct": true},
                {"option": "Vooraanzicht van diverse handelaarswoningen",      "correct": false},
                {"option": "De Jeugdherinnering",         "correct": false}
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fout.</span></p>" // no comma here
        },
         { // Question 13
            "q": "Hoe breed is de nachtwacht?",
            "a": [
                {"option": "437 cm",        "correct": true},
                {"option": "1080 cm",      "correct": false},
                {"option": "357 cm",         "correct": false}
            ],
            "correct": "<p><span>Nice!</span> Aardig breed he!?.</p>",
            "incorrect": "<p><span>Fout.</span> De nachtwacht is 437 cm breed.</p>" // no comma here
        },
         { // Question 14
            "q": "Hoe hoog is de nachtwacht?",
            "a": [
                {"option": "720 cm",        "correct": false},
                {"option": "363 cm",      "correct": true},
                {"option": "412 cm",         "correct": false}
            ],
            "correct": "<p><span>YEAAAHH!</span> Volgens mijn ben jij een culturele genie.</p>",
            "incorrect": "<p><span>Nee.</span> De nachtwacht is 363 cm hoog, misschien nog wat meer cultuur snuiven.</p>" // no comma here
        },
         { // Question 15
            "q": "Rond welk jaar werdt Frans Hals geboren?",
            "a": [
                {"option": "1580",        "correct": true},
                {"option": "1600",      "correct": false},
                {"option": "1550",         "correct": false}
            ],
            "correct": "<p><span>Goed zo!</span> Frans Hals werd in 1582/1583 geboren te Antwerpen.</p>",
            "incorrect": "<p><span>Fout.</span> Frans Hals werd 1582/1583 geboren in Antwerpen.</p>" // no comma here
        },
         { // Question 16
            "q": "Hoeveel liften heeft het Rijksmuseum?",
            "a": [
                {"option": "24",        "correct": true},
                {"option": "16",      "correct": false},
                {"option": "8",         "correct": false}
            ],
            "correct": "<p><span>Goed zo!</span></p>",
            "incorrect": "<p><span>Fout.</span> Het Rijksmuseum heeft 24 liften.</p>" // no comma here
        }*/
    ]
};      
}else{
    Meteor.Router.to('/');
}


var questions = quizJSON.questions;

	function setupQuiz(){
        $('#points').prepend('<div class="point">' + score + '</div>');
    	var quiz = $('<ol class="questions"></ol>'),
    	questionBlock = $('<div></div>');
        count = 1;

    	for(i in questions){
    		if(questions.hasOwnProperty(i)){
    			
    			var question = questions[i];
    			var questionHTML = $('<li class="question" id="question' + (count - 1) + '"></li>');
    			questionHTML.append('<h3 id="questionTxt">' + question.q + '</h3>');
    		
    			var inputName = 'question' + (count - 1);

    			var answerHTML = $('<div class="answer"></div>');
    			var answers = question.a;

    			for(i in answers){
    				if(answers.hasOwnProperty(i)){
    					var answer = answers[i];
    					var optionId = inputName + '_' + i.toString();
    			
    					var input = '<input id="' + optionId + '" name="' + inputName +'" class="button questionBtn" value="' + answer.option + '" type="submit" />';  			
                	
                		var answerContent = $('<li></li>')
                        	    .append(input);
                          
                		answerHTML.append(answerContent);	
    				}
    			}
               // var hiddenSubmit = '<input id="hiddensubmit" class="button questionBtn"  type="submit" style="visibility:hidden" />';
    			//answerHTML.append(hiddenSubmit);
                questionHTML.append(answerHTML);

    			var responceHTML = $('<ul class="responses"></ul>');
    			responceHTML.append('<li class="correct">' + question.correct + '</li>');
    			responceHTML.append('<li class="incorrect">' + question.incorrect + '</li>');

    			questionHTML.append(responceHTML);
    			quiz.append(questionHTML);

    			count++;
    		}
    	}
        questionBlock.append('<div class="questionNumber"> Vraag <span>' + questionNbr + '</span> van de ' + count + '</div>');
        $('#headWrap').prepend(questionBlock);
    	$('#triviaWrapper').append(quiz);
	};

    function checkAnswers(){
    	$(":submit").live('click', function(e){
            $(":submit").attr("disabled", true);
    		var questionLI = $($('#' + e.currentTarget.id).parents('li.question')[0]);
            var questionTxt = $($('#' + e.currentTarget.id).parents('#questionTxt'));
            var closedQuestion = $($('#' + e.currentTarget.id).closest('h3'));

    		var answerInputs = $(this).val();
            var answers = questions[parseInt(questionLI.attr('id').replace(/(question)/, ''))].a;
    		
    		var trueAnswers = [];
    		for(i in answers){
				if(answers.hasOwnProperty(i)){
					var answer = answers[i];
					if(answer.correct){
						trueAnswers.push(answer.option);
                          $('input[type="submit"][value="'+ answer.option +'"]').css('background-color', '#4ECDC4!important');
					}
				}
    		}
    		var selectedAnswers = [];
    		selectedAnswers.push(answerInputs);
    		var correctResponce = compareAnswers(trueAnswers, selectedAnswers);
    		if(correctResponce){
                $('#' + e.currentTarget.id).css('background-color', '#4ecdc4');
                score += 10;
                $('.point').empty();
                $('.point').prepend(score).fadeIn(300);
    			questionLI.addClass('correctResponce');
    		}
    		questionLI.find('.responses').show();
    		if(correctResponce){
    		    //$(closedQuestion).empty();	
                $(":header").fadeOut(500, function(){
                    questionLI.find('.correct').fadeIn(500);    
                }); 
    		}else{
                $('#' + e.currentTarget.id).css('background-color', '#FC3A51');
    			$(":header").fadeOut(500, function(){
                    questionLI.find('.incorrect').fadeIn(500);
                });
    		}
    		nextQuestion(questionLI.first('li').get(0).id);  
    	});
    };

    function compareAnswers(trueAnswers, selectedAnswers){
    	if(trueAnswers.length != selectedAnswers.length){
    		return false;
    	}
    	for(var i = 0, l = trueAnswers.length; i < 1; i++){
    		if(trueAnswers[i] !== selectedAnswers[i]){
    			return false;
    		}
    	}
    	return true;
    }

    function nextQuestion(currentQuestion){
        questionNbr++;
        $('.questionNumber span').empty().append(questionNbr);
    	var nextQuestion = $('#' + currentQuestion).next('.question');

    	if(nextQuestion.length){
    		$('#' + currentQuestion).delay(5000 ).fadeOut(300, function(){
    			nextQuestion.fadeIn(2000);
                $(":submit").attr("disabled", false);
                $(":header").fadeIn(500);
               // $(".countdown").countdown(redirect, 10, "s remaining");  
    		})
    	}else{
            completeQuiz();
        }
    }

    function completeQuiz(){
        if(Session.get('TriviaLevelOne')){
            Meteor.call('insertHighscore', Meteor.userId(), 'trivia', 1, score, function (err, res){
                Meteor.call('refreshUserScore', Meteor.userId());
                if(storeLocal){
                    Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
                    localStorage.setItem(Meteor.userId(), res);
                });
                }
            });
            setTimeout(function(){Meteor.Router.to('/viewscoretrivia1')}, 1000);
        }else{
              Meteor.call('insertHighscore', Meteor.userId(), 'trivia', 2, score, function (err, res){
                Meteor.call('refreshUserScore', Meteor.userId());
                if(storeLocal){
                    Meteor.call('getTotalUserscore', Meteor.userId(), function (err, res){
                    localStorage.setItem(Meteor.userId(), res);
                });
                }
            });
            setTimeout(function(){Meteor.Router.to('/viewscoretrivia2')}, 1000);
        }
    }

    function startTrivia(){
    	var firstQuestion = $('.questions li').first();
    	if(firstQuestion.length){
    		firstQuestion.fadeIn(500);
    	}else{
            completeQuize();
        }
    }

    setupQuiz();
    startTrivia();
    checkAnswers();

// Use p.countdown as container, pass redirect, duration, and optional message
    //$(".countdown").countdown(redirect, 10, "s remaining");
    
    function redirect(){
        $('#hiddensubmit').trigger('click');
    }
}; 

Template.viewscoretrivialevel1.created = function(){
    Meteor.call('rankingLevelList', Meteor.userId(), 'trivia', 1, function (err, res){
        Session.set('userHighscoreLevelList', res);
    });
}

Template.viewscoretrivialevel1.testUser = function(bool){
  return bool;
}
Template.viewscoretrivialevel1.userlist = function(){
  // console.log('rankingLevelList');
  var data = Session.get('userHighscoreLevelList');
  if(!data){
    Meteor.call('rankingLevelList', Meteor.userId(), 'trivia', 1, function (err, res){
      Session.set('userHighscoreLevelList', res);
    });
  }
  // console.log(data);
  return data;
}

// Facebook share

Template.viewscoretrivialevel1.facebooklogin = function(){
  if(Meteor.user() != null){
    if(Meteor.user().profile.picture){ 
      return true; 
    }else{ return false; }
  }else{ return false; }
}


Template.viewscoretrivialevel1.events({
  'click #publishwall': publish_to_wall
});

// -------------------------------- LEVEL 2 TEMPLATE FUNCTIONS -------------------------------//

Template.viewscoretrivialevel2.created = function(){
    Meteor.call('rankingLevelList', Meteor.userId(), 'trivia', 2, function (err, res){
        Session.set('userHighscoreLevelList', res);
    });
}

Template.viewscoretrivialevel2.testUser = function(bool){
  return bool;
}
Template.viewscoretrivialevel2.userlist = function(){
  // console.log('rankingLevelList');
  var data = Session.get('userHighscoreLevelList');
  if(!data){
    Meteor.call('rankingLevelList', Meteor.userId(), 'trivia', 2, function (err, res){
      Session.set('userHighscoreLevelList', res);
    });
  }
  // console.log(data);
  return data;
}

// Facebook share

Template.viewscoretrivialevel2.facebooklogin = function(){
  if(Meteor.user() != null){
    if(Meteor.user().profile.picture){ 
      return true; 
    }else{ return false; }
  }else{ return false; }
}


Template.viewscoretrivialevel2.events({
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






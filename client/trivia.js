Template.triviaGame.rendered = function(){
var quizJSON = {
    "questions": [
        { // Question 1
            "q": "What number is the letter A in the English alphabet?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "1",      "correct": true},
                {"option": "23",     "correct": false}
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 times a year in Michigan.</p>" // no comma here
        },
        { // Question 3
            "q": "In which of these places can you purchase a car?",
            "a": [
                {"option": "The Zoo",        "correct": false},
                {"option": "Ebay",           "correct": true},
                {"option": "Grocery Store",  "correct": false},
                {"option": "Used Car Lot",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> You can indeed buy a car on Ebay or in a used car lot.</p>",
            "incorrect": "<p><span>No.</span> You can't buy a car at the zoo or in a grocery store, try Ebay or a used car lot instead.</p>" // no comma here
        }
    ]
};	
var questions = quizJSON.questions;
	function setupQuiz(){
    	var quiz = $('<ol class="questions"></ol>'),
    	count = 1;

    	for(i in questions){
    		
    		if(questions.hasOwnProperty(i)){
    			
    			var question = questions[i];
    			var questionHTML = $('<li class="question" id="question' + (count - 1) + '"></li>');
    			questionHTML.append('<h3>' + question.q + '</h3>');
    		
    			var inputName = 'question' + (count - 1);

    			var answerHTML = $('<div class="answer"></div>');
    			var answers = question.a;

    			for(i in answers){
    				if(answers.hasOwnProperty(i)){
    					var answer = answers[i];
    					var optionId = inputName + '_' + i.toString();
    			
    					var input = '<input id="' + optionId + '" name="' + inputName +'" class="button" value="' + answer.option + '" type="submit" />';  			
                	
                		var answerContent = $('<li></li>')
                        	    .append(input);
                          
                		answerHTML.append(answerContent);	
    				}
    			}
    			questionHTML.append(answerHTML);

    			var responceHTML = $('<ul class="responses"></ul>');
    			responceHTML.append('<li class="correct">' + question.correct + '</li>');
    			responceHTML.append('<li class="incorrect">' + question.incorrect + '</li>');

    			questionHTML.append(responceHTML);
    			quiz.append(questionHTML);

    			count++;
    		}
    	}
    
    	$('#triviaWrapper').append(quiz);
       
	};

    function checkAnswers(){
    	$(":submit").live('click', function(e){
    		var questionLI = $($('#' + e.currentTarget.id).parents('li.question')[0]);
    		var answerInputs = $(this).val();
    		var answers = questions[parseInt(questionLI.attr('id').replace(/(question)/, ''))].a;
    		//console.log(answers);
    		var trueAnswers = [];
    		for(i in answers){
				if(answers.hasOwnProperty(i)){
					var answer = answers[i];
					if(answer.correct){
						trueAnswers.push(answer.option);
					}
				}
    		}
    		console.log(trueAnswers);
    	});
    	
    	//answers = questions[parseInt(quiestionLI)]
    };

    function startTrivia(){
    	var firstQuestion = $('.questions li').first();
    	if(firstQuestion.length){
    		firstQuestion.fadeIn(500);
    	}
    }

    setupQuiz();
    startTrivia();
    checkAnswers();
};
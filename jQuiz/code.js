quiz = {
	allQuestions : [
	{
	    question: "Which planet is closest to the sun?",
	    options: ["Mercury", "Venus", "Saturn", "Mars"],
	    correctAnswer: 0
	},
	{
		question:"Where is the Leaning Tower of Pisa?",
		options: ["Pisa - France", "Paris - France", "Pisa - Italy", "Rome - Italy"],
		correctAnswer: 2
	},
	{
		question:"Where is Broadway?",
		options: ["Denmark", "England", "Spain", "The USA"],
		correctAnswer: 3
	},
	{
		question: "Bark is the sound a dog makes.",
		options: ["True", "False"],
		correctAnswer: 0
	},
	{
		question: "What's the groundnut better known as?",
		options: ["The Coconut", "The Peanut", "The Almond", "The Hazelnut"],
		correctAnswer: 1
	}
	],

	init :  function(){

		var main = document.getElementById('main');
		main.className = ('container');
		var row1 = document.createElement('div');
		row1.className = 'row';
		var qTitle = document.createElement('h2');
		qTitle.id = 'quizTitle';
		var row2 = document.createElement('div');
		row2.className = 'row';
		var questionBox = document.createElement('div');
		questionBox.id = 'qBox';
		var row3 = document.createElement('div');
		row3.className = 'row';
		var answerBox = document.createElement('div');
		answerBox.id = 'aBox';

		main.appendChild(row1);
		row1.appendChild(qTitle);
		main.appendChild(document.createElement('hr'));
		main.appendChild(row2);
		row2.appendChild(questionBox);
		questionBox.appendChild(document.createElement('span'));
		main.appendChild(row3);
		row3.appendChild(answerBox);

		quiz.clickable = false;

		$('#aBox').on("click", function(e){
			if (quiz.clickable && e.target.value != undefined){
				quiz.clickable = false;
				if (e.target.value == 'restart'){
					return quiz.start();
				} else {
					quiz.checkAnswer(e.target.value);
				}				
			}	
		});
		return quiz.start();
	},

	start : function(){
		quiz.currentQ = 0;
		quiz.score = 0;
		return quiz.updateView();
	},

	updateView : function(){
		$('#quizTitle').html('Question ' + (1 + quiz.currentQ) + ' of ' + quiz.allQuestions.length);
		$('#qBox span').html(quiz.allQuestions[quiz.currentQ].question);
		$('#aBox').empty().show();
		return quiz.recurseFade(quiz.allQuestions[quiz.currentQ].options.length)
	},

	checkAnswer : function(x){
	//	$('.aOption').get(x).css ... ERROR
	//	$('.aOption')[x].css ... ERROR
	//	Fyrst að .get(x) chaining virkar ekki ..
		if(x == quiz.allQuestions[quiz.currentQ].correctAnswer){
			quiz.score += 1;
			document.getElementById('aBox').childNodes[x].
			setAttribute('style', 'background-color: lime');
		} else {	
			document.getElementById('aBox').childNodes[x].
			setAttribute('style', 'background-color: orange');
		}
		$('#aBox').fadeOut(500, function(){
			if (quiz.currentQ == quiz.allQuestions.length - 1){
				return quiz.endScreen();
			} else {
				quiz.currentQ += 1;
				return quiz.updateView();
			}
		});
	},

	recurseFade : function(l, i = 0){
		if (i < l){
			quiz.clickable = false;
			var qOption = document.createElement('div');		
			qOption.className = 'aOption';
			qOption.appendChild(document.createElement('span')); //Clickee
			qOption.childNodes[0].innerText = quiz.allQuestions[quiz.currentQ].options[i];		
			qOption.childNodes[0].value = i;
			$(qOption).hide();
			$('#aBox').append(qOption);
			$(qOption).fadeIn(300, function(){
				return quiz.recurseFade(l, i + 1);
			});
		} else {
			quiz.clickable = true;
		}
	},

	endScreen : function(){
		$('#qBox span').html('Your final score: ' + quiz.score);
		$('#aBox').empty().show();
		var retry = document.createElement('div');
		retry.className = 'retry';
		retry.appendChild(document.createElement('span'));
		retry.childNodes[0].innerText = 'Retry';
		retry.childNodes[0].value = 'restart';
		$('#aBox').append(retry);
		quiz.clickable = true;
	}
}
quiz.init();
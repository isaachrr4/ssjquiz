var Score = 0;
var timeLeft = 30;
var button =  document.getElementById("begin");
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

localStorage.setItem("question 1","answer")
localStorage.setItem("question 2","answer")
localStorage.setItem("question 3","answer")
localStorage.setItem("question 4","answer")
localStorage.setItem("question 5","answer")

var myQuestions = [
    {
      question: "Who was first z fighter to go super sayian?",
      answers: { 
        a: "goku",
        b: "vegeta",
        c: "Trunks",
        d: "Krillin"
      },
      correctAnswer: "a"
    },
    {
      question: "Which z fighter went ssj2 first?",
      answers: {
        a: "Yamcha",
        b: "Broly",
        c: "Gohan",
        d: "Piccolo"
      },
      correctAnswer: "c"
    },
    {
      question: "who was Goku's first real oppoenet?",
      answers: {
        a: "Majin Buu",
        b: "Vegeta",
        c: "Freiza",
        d: "Cell"
      },
      correctAnswer: "b"
    },
    {
    question: "At what age did gohan go super sayain?",
      answers: {
        a: "4",
        b: "10",
        c: "12",
        d: "25",
        e: "9"
      },
      correctAnswer: "e"
      },
      {
          question: "Where did Goku learn instant transmission?",
          answers: {
              a: "Planet Vegeta",
              b: "Yardrat",
              c: "Earth",
              d: "Namek"
          },
          correctAnswer: "b"
        
          }
      
  ];

function beginQuiz() {
    console.log("begin")
}
document.getElementById("begin").onClick= function(){
}
    var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
    alert("Lets GO!");
  });

  
  var elem = document.getElementById('timer');
  
  var timerId = setInterval(countdown, 1000);
  
  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      doSomething();
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }

  function displayQuiz(questions, quizContainer) {
    var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	
	quizContainer.innerHTML = output.join('');
  }
     
  showQuestions(questions, quizContainer);

  
  

// display quiz right away
displayQuiz(myQuestions, quizContainer, resultsContainer);
var Score = 0;
var timeLeft;
var button =  document.getElementById("begin");

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

 

  

// display quiz right away
buildQuiz();
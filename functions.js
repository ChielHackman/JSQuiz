var totalScore = 0;
var questionNumber = 0;
var allQuestions = [{
  question: "How do you declare a JavaScript variable?",
    choices: ["v personName;", "var personName;" , "variable personName;", "declare personName"],
    correctAnswer: "var personName"
  }, {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["*", "=", "X", "-"],
    correctAnswer: "="
  }, {
    question: "How to write an IF statement in JavaScript?",
    choices: ["if x == 7 then", "if x = 7 then", "if x = 7", "if(x == 7)"],
    correctAnswer: "if(x == 7)"
  }, {
    question: "How to write an IF statement for executing some code if x is NOT equal to 7?",
    choices: ["if x <> 7", "if (x <> 7)", "if x =! 7 then", "if (x != 7)"],
    correctAnswer: "if (x != 7)"
  }, {
    question: "What will the following code return: Boolean(15 > 7)",
    choices: ["true", "false"],
    correctAnswer: "true"
  }, {
    question: "How does a WHILE loop start?",
    choices: ["while (x <= 15; x++)", "while (x <= 15)", "while x = 1 to 15"],
    correctAnswer: "while (x <= 15)"
  }, {
    question: "How does a FOR loop start?",
    choices: ["for (x <= 7; x++)", "for (x = 0; x <= 7)", "for (x = 0; x <= 7; x++)", "for x = 7 to 15"],
    correctAnswer: "for (x = 0; x <= 7; x++)"
  }, {
    question: "How do you create a function in JavaScript?",
    choices: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
    correctAnswer: "function myFunction"
  }, {
    question: "How do you call a function named myFunction?",
    choices: ["call function myFunction()", "myFunction()", "call myFunction()"],
    correctAnswer: "myFunction()"
  }, {
    question: "How do you round the number 9.15, to the nearest integer?",
    choices: ["rnd(9.15)", "Math.rnd(9.15)", "round(9.15)", "Math.round(9.15)"],
    correctAnswer: "Math.round(9.15)"
}];

var mainContent = $('#mainContent');

function correctGuess (i) {
  totalScore ++;
  questionNumber ++;

  var updatePage = ['<div id="answerDiv">' +
      '<h1>Correct</h1>' +
      '<h2>Total Score: ' + totalScore + '</h2></div>'
    ],
    whereToPut = updatePage[0].length -6;

    if(totalScore < 4){
      var whatToPut = '<button id="nextButton">Next Question</button>';

      updatePage = [updatePage.slice(0, whereToPut),whatToPut, updatePage.slice(whereToPut)].join('');

      $('#mainContent').html(updatePage);

      $('#nextButton').on('click', function() {
        question(questionNumber);
      });
    } else {
        var whatToPut = '<h1>Yeah you have won the game!</h1<button id="restartButton">Play again</button>';

        updatePage = [updatePage.slice(0, whereToPut), whatToPut, updatePage.slice(whereToPut)].join('');

        $('#mainContent').html(updatePage);

        $('#restartButton').on('click', function() {
          questionNumber = 0;
          totalScore = 0;
          question(questionNumber);
        });
    }

    $('#answerDiv').fadeIn("slow");
};

function incorrectGuess(i) {
  totalScore = 0;
  questionNumber = 0;

  $('#questionDiv').fadeOut("slow");

  var updatePage = ['<div id="answerDiv"></div>' +
      '<h1>Not correct.</h1>' +
      '<button id="restartButton">Restart</button>'
    ];

    $('#mainContent').html(updatePage);
    $('#answerDiv').fadeIn("slow");

    $('#restartButton').on('click', function() {
      question(questionNumber);
    });
};

function question(i) {
    $('#questionDiv').fadeOut("slow");
    mainContent.html('<div id="questionDiv">' +
        '<h1>Question ' + (i + 1) + '</h1>' +
        '<h2>' + allQuestions[i].question + '</h2>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[0] + '" checked="yes">' + allQuestions[i].choices[0] + '</input><br />' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[1] + '">' + allQuestions[i].choices[1] + '</input><br />' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[2] + '">' + allQuestions[i].choices[2] + '</input><br />' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[3] + '">' + allQuestions[i].choices[3] + '</input><br />' +
        '<button id="submitButton">Submit</button>' +
        '</div>'
    );
    $('#questionDiv').fadeIn("slow");

    $('#submitButton').on('click', function() {
        if($('input:radio[name=questionChoices]:checked').val() === allQuestions[i].correctAnswer && i < 4) {
            correctGuess();
        } else {
            incorrectGuess();
        }
    });
};

question(questionNumber);

// start button, need to make an on click to enter the game
// the clicking of the start button will also start the time 
    //also activates/ need timer function
// display questions to the screen:
    // for each question
        // loop over .answers
        // create a redio input with the answer
        // add it to the DOM
// have user chose answers to the 6 questions. only one answer
    // determine correct answers
    // have counters for right and wrong
// submit button at the bottom
// this will stop the timer if user finishes before the time runsout

// if time runs out || user clicks submit
    // find all the radio-buttons for each question
    // check if the selected radio buttons match the `correct` for each question
    // if correct, increment rightAnswers variable
    // if incorrect, increment wrongAnswers variable
    // if no radios in question is selected, increment noAnswers

//show the stats page
// stats page will show amount they got right and wrong
// create html elements for rightAnswers, wrongAnswers, & noAns.wers
// append to the page (somewhere?)
// maybe also display a message depending on how they did...
    // like, if rightAnswers is < 3, shame them
    // but if > 5 tell them good job
// diaply button to return users to start screen, or restart quiz
$(document).ready(function() {
    $("#timer-start").on("click", startGame);
    $("#timer-done").on("click", doneGame);
    $("#reset-game").on("click", reset);
    $('#start-screen').show();
    $('#game').hide();
    $('#stats-screen').hide();
    
    var rightAnswers = 0; 
    var wrongAnswers = 0;
    var noAnswers = 0;

    var timeRemaining = 30;

    var intervalTime;
    var clockRunning = false;
    var quotes = [{
        q1: 'Sometimes the right path is not the easiest one.',
        answers: ['Finding Nemo','Pocahontas', 'The AristoCats', 'Peter Pan'],
        correct: 'Pocahontas'
    },
    {
        q2: "Ohana means family, and family means no one gets left behind or forgotten.",
        answers: ['Lilo &amp; Stitch', 'Mulan', 'Cinderella', 'Fox &amp; the Hound'],
        correct: 'Lilo &amp; Stitch'
    },
    {
        q3: "The flower that blooms in adversity is the most rare and beaufitul of them all.",
        answers: ['Lion King', 'Pocahontas', 'Mulan', 'Pinocchio'],
        correct: 'Mulan'
    },
    {
        q4: "Ladies do not start fights, but they can finish them.",
        answers: ['The AristoCats', 'Alice in Wonderland', 'Lion King', 'Peter Pan'],
        correct: 'The AristoCats'
    },
    {   
        q5: "Nothing's impossible.",
        answers: ['Dumbo', 'Lilo &amp; Stitch', 'Finding Nemo', 'Alice in Wonderland'],
        correct: 'Alice in Wonderland'
    },
    {   q6: "Second star to the right and straight on 'til morning",
        answers: ['Aladdin', 'Toy Story', 'Cinderella', 'Peter Pan'],
        correct: 'Peter Pan'
    }
    ];
    //reset function not needed?
    function startGame() {
        if(!clockRunning) {
            // starting clock at 30 seconds
            intervalTime = setInterval(function() {
                $('#start-screen').hide();
                $('#stats-screen').hide();
                $('#game').show();
                
                // countdown from 30 sec
                timeRemaining--;
                console.log(timeRemaining)
                // when time is 0 will go to stats page, gameover
                if(timeRemaining === 0) {
                    doneGame();
                    $('#game').hide();
                    $('#stats-screen').show();
                };
            }, 
            1000);
            clockRunning = true;

            //html will go here push  timer
            $(timeRemaining).html("#timer");
            creatingAnswers();

        }
    }

 function creatingAnswers () {
        for (var i = 0; i < quotes[0].answers.length; i++) {
          var radioBtn = ($('<label for=""> <input type="radio"> id="answer" '));
          $(radioBtn).attr("id", quotes[0].answers[i]);
          var span = $("<span>");
          $(span).attr("id", quotes[0].answers[i])
          $(span).text(quotes[0].answers[i]).appendTo(radioBtn);
          $(radioBtn).appendTo(".question0");

          radioBtn = ($('<label for=""><input type="radio"> id="answer" '));
          $(radioBtn).attr("id", quotes[1].answers[i]);
          var span1 = $("<span>");
          $(span1).attr("id", quotes[1].answers[i]);
          $(span1).text(quotes[1].answers[i]).appendTo(radioBtn);
          $(radioBtn).appendTo(".question1");

          radioBtn = ($('<label for=""><input type="radio"> id="answer" '));
          $(radioBtn).attr("id", quotes[2].answers[i]);
          var span2 = $("<span>");
          $(span2).attr("id", quotes[2].answers[i]);
          $(span2).text(quotes[2].answers[i]).appendTo(radioBtn);
          $(radioBtn).appendTo(".question2");

          radioBtn = ($('<label for=""><input type="radio"> id="answer" '));
          $(radioBtn).attr("id", quotes[3].answers[i]);
          var span3 = $("<span>");
          $(span3).attr("id", quotes[3].answers[i]);
          $(span3).text(quotes[3].answers[i]).appendTo(radioBtn);
          $(radioBtn).appendTo(".question3");

          radioBtn = ($('<label for=""><input type="radio"> id="answer" '));
          $(radioBtn).attr("id", quotes[4].answers[i]);
          var span4 = $("<span>");
          $(span4).attr("id", quotes[4].answers[i]);
          $(span4).text(quotes[4].answers[i]).appendTo(radioBtn);
          $(radioBtn).appendTo(".question4");

          radioBtn = ($('<label for=""><input type="radio"> id="answer" '));
          $(radioBtn).attr("id", quotes[5].answers[i]);
          var span5 = $("<span>");
          $(span5).attr("id", quotes[5].answers[i]);
          $(span5).text(quotes[5].answers[i]).appendTo(radioBtn);
          $(radioBtn).appendTo(".question5");
        }
 }





    function doneGame() {
        console.log('YA DONE');
        clearInterval(intervalTime);
        clockRunning = false;
        $('#game').hide();
        $('#stats-screen').show();
    }

    // need reset game function to link reset game button


function reset() {
    $("#start-screen").show();
    $("#stats-screen").hide();
}



});








// setTimeout(thirtySeconds, 1000 * 30); //this should be the timer at the start with a on click
// setTimeout(timeUp, 1000 * 10); //this should be the end times up go to stats page

// var doneButton;
// $("#timer-done").on("click", function () {
//     // Clear the button alert's timeout.
//     clearTimeout(doneButton);
// });
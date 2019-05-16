// start button, need to make an on click to enter the game
// the clicking of the start button will also start the time 
    //also activates/ need timer function
// have user chose answers to the 6 questions. only one answer
    // determine correct answers
    // have counters for right and wrong
// submit button at the bottom
    //this will stop the timer if user finishes before the time runsout
    //if time runs out the page with change to stats page.  
        //stats page will show amount they got right and wrong
            //if questions arent aswered then its wrong. 
                //correct, incorrect, and unanswered

var score = 0; 
var quotes = [{
    q1: 'Sometimes the right path is not the easiest one.',
    
},
{q2: "Ohana means family, and family means no one gets left behind or forgotten."},
    {q3: "The flower that blooms in adversity is the most rare and beaufitul of them all."},
    {q4: "Ladies do not start fights, but they can finish them."},
    {q5: "Nothing's impossible."},
    {q6: "Second star to the right and straight on 'til morning"}
]

var startButton;
$("#start").on("click", function () {
    //  Set the button alert's timeout to run three seconds after the function's called.
    startButton = setTimeout(function () {
        alert("Start Game");
    }, 1000);
});








setTimeout(thirtySeconds, 1000 * 30); //this should be the timer at the start with a on click
setTimeout(timeUp, 1000 * 10); //this should be the end times up go to stats page

var doneButton;
$("#done").on("click", function () {
    // Clear the button alert's timeout.
    clearTimeout(doneButton);
});
/*Create variables for questions as strings, choices as arrays and  and answers as the index in the array*/

var question1 = "What is the fear of clowns called?";
var choices1 = ["Coulrophobia", "Acrophobia", "Astrophobia", "Trypanophobia"];
var answer1 = choices1[0];

var question2 = "Of the four rocky planets in our solar system, which is the largest and most dense?";
var choices2 = ["Earth", "Mars", "Mercury", "Venus", ];
var answer2 = choices2[0];

var question3 = "What is the name of the world’s largest and most powerful particle accelerator?";
var choices3 = ["The Large Hadron Collider", "Cooler Synchrotron", "Accelerateur Groningen-ORsay", "Deutsches Elektronen Synchrotron"];
var answer3 = choices3[0];

var question4 = "The llama is a domesticated camelid that is native to which continent?"
var choices4 = ["South America", "Africa", "Antarctica", "North America"];
var answer4 = choices4[0]

var questionArray = [question1, question2, question3, question4];

var countQuestion = 0;

//Append a start button to the Questions card

var start = $("<button>");

//start.addClass("border");

start.attr("id", "Start-button");

start.text("Start");

$("#Start-div").append(start);

//Functions to implement on-click

$("#Start-button").on("click", function(event) {

//Append a random question

randomQuestion = questionArray[countQuestion]; // increment count

console.log(randomQuestion);

$("#Questions").append(randomQuestion);

// Prepare choices so that they can be appended dynamically

choices1 = $("<div>");
choices1.attr("id", "Choices1");
choices1.empty();
event.preventDefault();

choices1 = ["Coulrophobia", "Acrophobia", "Astrophobia", "Trypanophobia"];
for (var i=0; i<choices1.length; i++) {

    if (randomQuestion === question1) {
    

    $("#Choices").append('<label><input type="radio" name="added choices 1" value="' + choices1[i] + '" /> ' + choices1[i] + '</label>');
    //console.log($("#Choices").append('<label><input type="radio" name="added choices 1" value="' + choices1[i] + '" /> ' + choices1[i] + '</label>'));
    }

    answerSelection();
    fiveSeconds();
}

choices2 = $("<div>");
choices2.attr("id", "Choices2");
choices2.empty();
event.preventDefault();

choices2 = ["Earth", "Mars", "Mercury", "Venus"];
for (var j=0; j<choices2.length; j++) {

    if (randomQuestion === question2) {
    

    $("#Choices").append('<label><input type="radio" name="added choices 2" value=" ' + choices2[j] + ' " />' + choices2[j] + '</label>');
    //console.log($("#Choices").append('<label><input type="radio" name="added choices 2" value=" ' + choices2[j] + ' " />' + choices2[j] + '</label>'));
    }

    answerSelection();
    fiveSeconds();
}

choices3 = $("<div>");
choices3.attr("id", "Choices3");
choices3.empty();
event.preventDefault();

choices3 = ["The Large Hadron Collider", "Cooler Synchrotron", "Accelerateur Groningen-ORsay", "Deutsches Elektronen Synchrotron"];
for (var k=0; k<choices3.length; k++) {

    if (randomQuestion === question3) {
        

    $("#Choices").append('<label><input type="radio" name="added choices 3" value="' + choices3[k] + '" /> ' + choices3[k] + '</label>');
    //console.log($("#Choices").append('<label><input type="radio" name="added choices 3" value="' + choices3[k] + '" /> ' + choices3[k] + '</label>'));
    }

    answerSelection();
    fiveSeconds();
}

choices4 = $("<div>");
choices4.attr("id", "Choices4");
choices4.empty();
event.preventDefault();

choices4 = ["South America", "Africa", "Antarctica", "North America"];
for (var l=0; l<choices4.length; l++) {

    if (randomQuestion === question4) {

    $("#Choices").append('<label><input type="radio" name="added choices 4" value="' + choices4[l] + '" /> ' + choices4[l] + '</label>');
    //console.log($("#Choices").append('<label><input type="radio" name="added choices 3" value="' + choices4[l] + '" /> ' + choices4[l] + '</label>'));
    }

    answerSelection();
    fiveSeconds();
}

//Timer can be included in this function when the start button is clicked
setTimeout(fiveSeconds, 1000 * 5);

function fiveSeconds() {
    $("#Timer").append("<h2>About 5 Seconds Left!</h2>");
    console.log("5 seconds left");
}
});

/*// declare independent looping question generation function to call after each scenario of a selected answer
questionArray = [question1, question2, question3, question4];
function questionGeneration() {
    for (var h=0; h<questionArray.length; h++);
        if (questionArray[h] != randomQuestion);
        $("#Questions").append(questionArray[h]);
}*/
function answerSelection() {

var guess = false
var correct = 0
var incorrect = 0
// Add an onclick event per radio button so that when selceted, it moves to the next question Accordingly. Have one function to check all of them
choices1 = ["Coulrophobia", "Acrophobia", "Astrophobia", "Trypanophobia"];
    if (randomQuestion === question1) {

        for (var i=0; i<choices1.length; i++) {

            if (choices1[0] === ($("#Choices1").onclick)) {
            guess = true;
            correct ++;
            $("#Choices").append("<h2> That is the correct answer!</h2>");
            countQuestion++;
            }

            else if (guess = false) {
                incorrect ++;
                $("#Choices").append("<h2> That is the incorrect answer! The correct answer is" + choices1[0] + "</h2>");
                countQuestion++;
            }

            else  {
                incorrect ++;
                $("#Timer").append("<h2>Time's Up!</h2>");
                $("#Choices").append("<h2>The correct answer is" + choices1[0] + "</h2>");
                countQuestion++;
            }
        }
    }

choices2 = ["Earth", "Mars", "Mercury", "Venus"];
    if (randomQuestion === question2) {

        for (var j=0; j<choices2.length; j++) {

            if (choices2[0] === ($("#Choices2").onclick)) {
            guess = true;
            correct ++;
            $("#Choices").append("<h2> That is the correct answer!</h2>");
            countQuestion++;
            }

            else if (guess = false) {
                incorrect ++;
                $("#Choices").append("<h2> That is the incorrect answer! The correct answer is" + choices2[0] + "</h2>");
                countQuestion++;
            }

            else  {
                incorrect ++;
                $("#Timer").append("<h2>Time's Up!</h2>");
                $("#Choices").append("<h2>The correct answer is" + choices2[0] + "</h2>");
                countQuestion++;
            }
        }
    }

    choices3 = ["The Large Hadron Collider", "Cooler Synchrotron", "Accelerateur Groningen-ORsay", "Deutsches Elektronen Synchrotron"];
    if (randomQuestion === question3) {

        for (var k=0; k<choices3.length; k++) {

            if (choices3[0] === ($("#Choices3").onclick)) {
            guess = true;
            correct ++;
            $("#Choices").append("<h2> That is the correct answer!</h2>");
            countQuestion++;
            }

            else if (guess = false) {
                incorrect ++;
                $("#Choices").append("<h2> That is the incorrect answer! The correct answer is" + choices3[0] + "</h2>");
                countQuestion++;
            }

            else  {
                incorrect ++;
                $("#Timer").append("<h2>Time's Up!</h2>");
                $("#Choices").append("<h2>The correct answer is" + choices3[0] + "</h2>");
                countQuestion++;
            }
        }
    }
    
    choices4 = ["South America", "Africa", "Antarctica", "North America"];
    if (randomQuestion === question4) {

        for (var l=0; l<choices3.length; l++) {

            if (choices4[0] === ($("#Choices3").onclick)) {
            guess = true;
            correct ++;
            $("#Choices").append("<h2> That is the correct answer!</h2>");
            countQuestion++;
            }

            else if (guess = false) {
                incorrect ++;
                $("#Choices").append("<h2> That is the incorrect answer! The correct answer is" + choices4[0] + "</h2>");
                countQuestion++;
            }

            else  {
                incorrect ++;
                $("#Timer").append("<h2>Time's Up!</h2>");
                $("#Choices").append("<h2>The correct answer is" + choices4[0] + "</h2>");
                countQuestion++;
            }
        }
    }
}

//Now we run the functions sequentially


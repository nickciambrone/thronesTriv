$("#start").on("click", function () {
    $("#start").remove();
    $("#ins").remove();
    $("#gotTrivia").remove();
    game.loadQuestion();
})
$(document).on("click", ".answer-button", function (e) {
    game.clicked(e);

})
$(document).on("click", "#reset", function () {
    game.reset();
});
$(document).on("click", "#next", function () {
    if (game.currentQuestion == questions.length - 1) {
        game.results();
    }
    else { game.nextQuestion(); }
});
var questions = [
    {
        question: "What did Arya Stark say to Walder Frey's daughter after killing their entire house?",
        answers: ['The Starks send their regards',
            'Tell them Winter came for house Frey',
            'Your family was on my list',
            'What is dead may never die'],
        correctAnswer: 'Tell them Winter came for house Frey',
        video: "<iframe width='560' height='315' class='img-fluid' src='https://www.youtube.com/embed/0miGSjYG0G4' frameborder='0' allow='autoplay; encrypted-media'allowfullscreen></iframe>"
    },
    {
        question: "What bold action does Jamie take right before the very end of season 8?",
        answers: ["Helps Cersei trick Denarys and Jon", "Rides North to join Denarys and Jon", "Admits his love for Brienne of Tarth", "Brings Marcella home"],
        correctAnswer: "Rides North to join Denarys and Jon",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/jOMa0LeWArE?start=232" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "Who was the first person on Arya Stark's list?",
        answers: ["Joffrey Baratheon", "Jamie Lannister", "Meryn Trant", "Cersei Lannister"],
        correctAnswer: "Meryn Trant",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/Q4O9IWLoABU?start=54" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "During the war of the 5 kings, which 'king' was killed by his own brother?",
        answers: ["Stannis Baratheon", "Joffrey Baratheon", "Balon Greyjoy", "Tywin Lannister"],
        correctAnswer: "Balon Greyjoy",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/KCMM0ir8-EA?start=128" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "In which city does the Targaryen bloodline originate?",
        answers: ["Dragonstone", "Pentos", "Valyria", "Essos"],
        correctAnswer: "Valyria",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/afzEd-fCWq0?start=165" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    },
    {
        question: "Who are the Starks ancestors?",
        answers: ["The Children", "The First Men", "The Andals", "The Ironborne"],
        correctAnswer: "The First Men",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/Tuf0-ZHsOs8?start=85" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "What are the names of Denary's 3 dragons?",
        answers: ['Drogon, Vyseris, Volantis',
            'Drogon, Visenya, Roaegon',
            'Raehgar, Draegon, Viserieon',
            'Drogon, Rhaegal, Viserion'],
        correctAnswer: 'Drogon, Rhaegal, Viserion',
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/VvtVK3GxoO4?start=124" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "Who put the poison in Jon Arryn's drink?",
        answers: ["Lysa Arryn", "The Mountain", "Cersei Lannister", "Joffrey Baratheon"],
        correctAnswer: "Lysa Arryn",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/qafMsdPLDhM?start=319" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "Who killed Ned Stark's brother and father?",
        answers: ["Tywin Lannister", "Raeghar Targaryen", "Euron Greyjoy", "Aerys Targaryen"],
        correctAnswer: "Aerys Targaryen",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/jRQkt2wqaCE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "Who served as Ser Barriston's squire at one point?",
        answers: ["Jamie Lannister", "Podrick", "Gendry Baratheon", "Robert Baratheon"],
        correctAnswer: ["Jamie Lannister"],
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/1ke9iUJykiw?start=178" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "Where did Tyrion first meet Bronn",
        answers: ["The Eyrie", "Harrenhall", "A small tavern", "A fight with wildwings"],
        correctAnswer: "A small tavern",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/0cyEM57UJks" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "What is the name of Stannis Baratheon's daughter?",
        answers: ["Princess Mereen", "Princess Beatrice", "Princess Diana", "Princess Shireen"],
        correctAnswer: "Princess Shireen",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/cKp8_hC6gvI?start=43" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "What does 'Khaleesi' translate to in Dothraki?",
        answers: ["Queen", "Princess", "Wife of Khal", "Mother"],
        correctAnswer: "Wife of Khal",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/oBFBeGt6Njk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "Which of the following is not a face of the 7?",
        answers: ["Mother", "Maiden", "Widow", "Crone"],
        correctAnswer: "Widow",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/yJZm-9nITWQ?start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question: "What did The Mountain killing The Viper cause?",
        answers: ["Prince Oberyn's brother to become the Lord of Dorne", "Tyrion to go to prison", "Tyrion to be found guilty of regicide", "The Mountain to go to prison"],
        correctAnswer: "Tyrion to be found guilty of regicide",
        video: '<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/VM9wWtHozCM?start=90" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question:"What is the name of Bran's wolf?",
        answers:["Summer", "Nymeria","Shaggydog","Greywind"],
        correctAnswer:"Summer",
        video:'<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/4nWeC2tmrHw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question:"Who saved Tyrion's life in a trial by combat?",
        answers:["Oberyn","Jamie","The Mountain","Bronn"],
        correctAnswer:"Bronn",
        video:'<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/NN30YMzja6Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question:"Who put the poisonous sapphire from Sansa's necklace into Joffrey's drink?",
        answers:["Little Finger","Tyrion","Sansa","Olenna"],
        correctAnswer:"Olenna",
        video:'<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/bWclAgsyDfU?start=26" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    },
    {
        question:"Which dragon gets killed by the Night King?",
        answers:["Drogon","Visenya","Viserion","Raeghal"],
        correctAnswer:"Viserion",
        video:'<iframe width="560" height="315" class="img-fluid" src="https://www.youtube.com/embed/MJ6ayvGPP0g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    }
];
console.log(questions)
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 20,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function () {
        game.counter--;
        $("#counter").html("Time left: "+game.counter+" seconds");
        if (game.counter <= 0) {
            console.log("time up");
            game.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").html("<h2 id='counter'> Time left: 20 seconds</h2>")
        $("#subwrapper").append("<div id='quest'><h2>" + questions[game.currentQuestion].
            question + "</h2></div>");
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#subwrapper").append("<br><button type='button' class ='answer-button btn btn-outline-light' id='button-" + i + "' data-name='" + questions[game.currentQuestion].answers[i] + "'>" + questions[game.currentQuestion].answers[i] + "</button><br>");   
        }
        $("#subwrapper").append("<br><br>")
    },
    nextQuestion: function () {
        game.counter = 20;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    timeUp: function () {
        game.unanswered++
        clearInterval(timer);
        $("#subwrapper").html("<h2>Out of Time</h2><br>");
        $("#subwrapper").append("<h3>Watch this video to find out...</h3><br><br>");
        $("#subwrapper").append(questions[game.currentQuestion].video+"<br>")
        if (game.currentQuestion == questions.length - 1) {
            $("#subwrapper").append("<br><button id='next' type='button' class='btn btn-outline-light'>Click to view results</button><br>")
        }
        else { $("#subwrapper").append("<br><button id='next' type='button' class='btn btn-outline-light'>Next Question</button><br>") }
        // if (game.currentQuestion == questions.length - 1) {
        //     $(document).on("click", "#next", function () {
        //         game.nextQuestion();
        //     });
        // }
        // if(game.currentQuestion==questions.length-1){
        //     setTimeout(game.results,1*1000);
        // }else{
        //     setTimeout(game.nextQuestion,1*1000);
        // }
    },
    results: function () {
        console.log("game over")
        clearInterval(timer);
        $("#subwrapper").html("<h3>Quiz Over:")
        $("#subwrapper").append("<h3>Correct: " + game.correct + "</h3>");
        $("#subwrapper").append("<h3>Incorrect: " + game.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + game.unanswered) + "</h3>";
        $("#subwrapper").append("<button id='reset' type='button' class='btn btn-outline-light'> Restart </button>")
    },
    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        }
        else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function () {
        console.log("you got it")
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html("<h2>You got it right!</h2><br>");
        $("#subwrapper").append("<h2>Now watch this video...<br><br>")
        $("#subwrapper").append(questions[game.currentQuestion].video+"<br>")
        if (game.currentQuestion == questions.length - 1) {
            $("#subwrapper").append("<br><button id='next' type ='button' class='btn btn-outline-light'>Click to view results</button><br><br>")
        }
        else { $("#subwrapper").append("<br><button id='next' type ='button' class='btn btn-outline-light'>Next Question</button><br><br>") };
        // if (game.currentQuestion == questions.length - 1) {
        //     game.results();
        // }
        // if(game.currentQuestion==questions.length-1){
        //     setTimeout(game.results,1*1000);
        // }else{
        //     setTimeout(game.nextQuestion,1*1000);
        // }
    },
    answeredIncorrectly: function () {
        console.log("wrong")
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html("<h2>You got it wrong!</h2><br>");
        $("#subwrapper").append("<h2>Now watch this video to find out...<br><br>");
        $("#subwrapper").append(questions[game.currentQuestion].video+"<br>");
        if (game.currentQuestion == questions.length - 1) {
            $("#subwrapper").append("<br><button id='next' type ='button' class='btn btn-outline-light'>Click to view results</button><br><br>")
        }
        else { $("#subwrapper").append("<br><button id='next' type ='button' class='btn btn-outline-light'>Next Question</button><br><br>") };
        // if (game.currentQuestion == questions.length - 1) {
        //     game.results()
        // }
        // // else{
        //     setTimeout(game.nextQuestion,1*1000);
        // }
    },
    reset: function () {
        game.currentQuestion = 0;
        game.counter = 15;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
        console.log("reset")
    }
}
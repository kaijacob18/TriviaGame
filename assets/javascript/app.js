// Make sure jQuery working for start button
$("#start").on("click", function () {
    $("#start").remove();
    game.loadQuestion();
})
$(document).on("click", ".answer-button", function (e) {
    game.clicked(e);
})
$(document).on("click","#reset", function (){
    game.reset();
})

var questionAnswers = [{
        question: "Who is the youngest player to ever win MVP in NBA?",
        answers: ["1. Lebron James", "2trivAns. Michael Jordan", "3. Derrick Rose", "4. Magic Johnson"],
        rightAnswer: "Derrick Rose",
        visual: "https://media0.giphy.com/media/tguj2vJUMoaZi/200w.webp?cid=790b76115cec58217957317545c1d388&rid=200w.webp"
    },

    {
        question: "Who won NFC North 2018?",
        answers: ["1. Minnesota Vikings", "2. Chicago Bears", "3. Green Bay Packers", "4. Detroit Lions"],
        rightAnswer: "Chicago Bears",
        visual: "https://media1.giphy.com/media/9GIDXFLqrRtFJTmjwt/200w.webp?cid=790b76115cec5c3d62664d2e32d66a6b&rid=200w.webp"
    },

    {
        question: "Who is the Worlds higest paid athlete according to Forbes?",
        answers: ["1. Floyd Mayweather", "2. Stephen Curry", "3. Lionel Messi", "4. Cristiano Ronaldo"],
        rightAnswer: "Floyd Mayweather",
        visual: "https://media1.giphy.com/media/l0Iy8NFVavpZinMYM/200w.webp?cid=790b76115cec5f19473538494160e336&rid=200w.webp"
    },

    {
        question: "Most 3 pointers in NBA history?",
        answers: ["1. Reggie Miller", "2. Kyle Korver", "3. Jason Terry", "4. Ray Allen"],
        rightAnswer: "Ray Allen",
        visual: "https://media0.giphy.com/media/M7Sha47qelqVi/200w.webp?cid=790b76115cec6116583232542ec5ba5d&rid=200w.webp"
    },

    {
        question: "Which tennis player who the most grand slams?",
        answers: ["1. Novak Djokovic", "2. Pete Sampras", "3. Roger Federer", "4. Rafael Nadal"],
        rightAnswer: "Roger Federer",
        visual: "https://media0.giphy.com/media/26xBB4mGNwfWN3Kwg/200w.webp?cid=790b76115cec61e43533486a63f1fa04&rid=200w.webp"
    },

    {
        question: "What player throw the most passing TD's?",
        answers: ["1. Brett Farve", "2. Peyton Manning", "3. Tom Brady", "4. Drew Brees"],
        rightAnswer: "Peyton Manning",
        visual: "https://media2.giphy.com/media/dNNwTiyolf8Y0/200w.webp?cid=790b76115cec62db3750336749391324&rid=200w.webp"
    },

    {
        question: "Most paid female athlete in 2018?",
        answers: ["1. Serena Williams", "2. Danica Patrick", "3. Maria Sharapova", "4. Caroline Wozniacki"],
        rightAnswer: "Serena Williams",
        visual: "https://media2.giphy.com/media/xSNTxihDjQiAg/200w.webp?cid=790b76115cec68f0362f2f4751dc455f&rid=200w.webp"
    },

    {
        question: "What is the richest NBA franchise?",
        answers: ["1. Chicago Bulls", "2. Los Angeles Lakers", "3. New York Knicks", "4. Golden State Warriors"],
        rightAnswer: "New York Knicks",
        visual: "https://media0.giphy.com/media/l0K4mq3yRICCW4czm/200.webp?cid=790b76115cec6d8f502f437a6b756dff&rid=200.webp"
    },

]
// Setting variable for game/results
var game = {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentQuestion: 0,
        counter: 30,
        //   Setting countdown
        countdown: function () {
            game.counter--;
            $("#counter").html(game.counter);
            if (game.counter <= 0) {
                game.timeOut();
            }
        },
        loadQuestion: function () {
            timer = setInterval(game.countdown(), 1000);
            $(".subwrapper").html("<h2 id=counter>30</h2>");
            $(".subwrapper").append("<h2>" + questionAnswers[game.currentQuestion].question + "</h2>");
            for (var i = 0; i < questionAnswers[game.currentQuestion].answers.length; i++) {
                var button = $("<button>");
                button.addClass("answer-button");
                button.attr("id", "button-" + i);
                button.attr("id","data-name" + questionAnswers[game.currentQuestion].answers[i] + );
            }
        },
        nextQuestion: function () {
            game.counter = 30;
            $("#counter").html(game.counter);
            game.currentQuestion++;
            game.loadQuestion();
        },
        timeOut: function () {
            clearInterval(timer);
            game.unanswered++;
            $(".subwrapper").html("<h2>TIMES UP </h2>");
            $(".subwrapper").append("<h3>The Right Answer Was:" + questionAnswers[game.currentQuestion].rightAnswer + "</h3>");
            if (game.currentQuestion == questionAnswers.length - 1) {
                setTimeout(game.results, 3 * 1000);
            } else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        results: function () {
            clearInterval(timer);
            $(".subwrapper").html("Questions Completed!");
            $(".subwrapper").append("<h3>Correct: " + game.correct +"</h3>");
            $(".subwrapper").append("<h3>Incorrect: " + game.incorrect +"</h3>");
            $(".subwrapper").append("<h3>Unanwered: " + game.unanswered + "</h3>");
            $(".subwrapper").append("<button id= reset>RESET</button>");
                },
                clicked: function () {
                    clearInterval(timer);
                    if ($(e.target).data("name") == questionAnswers[game.currentQuestion].rightAnswer) {
                        game.answerCorrect();

                    } else {
                        game.answerIncorrect();
                    }

                },
                answerCorrect: function () {
                    clearInterval(timer);
                    game.correct++;
                    $("#subwrapper").html("<h2> You are Correct!</h2>");
                    if (game.currentQuestion == questionAnswers.length - 1) {
                        setTimeout(game.results, 3 * 1000);
                    } else
                        setTimeout(game.nextQuestion, 3 * 1000);
                },
                answerIncorrect: function () {
                    clearInterval(timer);
                    game.incorrect++;
                    $("#subwrapper").html("<h2> You are Wrong!</h2>");
                    if (game.currentQuestion == questionAnswers.length - 1) {
                        setTimeout(game.results, 3 * 1000);
                    } else
                        setTimeout(game.nextQuestion, 3 * 1000);

                },
                reset: function () {
                    game.correct = 0;
                    game.incorrect = 0;
                    game.unanswered = 0;
                    game.counter = 0;
                    game.currentQuestion = 0;
                    game.loadQuestion ();
                },



        }
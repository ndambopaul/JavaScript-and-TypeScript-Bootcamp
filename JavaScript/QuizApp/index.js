const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Stephen King", "George Orwell"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the largest planet in the Solar System?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        correctAnswer: "Jupiter"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = "";
    

    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.style.background = "red";
        button.style.marginRight = "10px";
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = "Incorrect!";
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("question").textContent = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").textContent = `Your score: ${score} out of ${quizData.length}`;
}
  
displayQuestion();

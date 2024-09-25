// Questions array
let questions = [
    {"question": "1: What is the capital of Argentina?", "option": ["Buenos Aires", "Bogota", "Lima", "Santiago"], "answer": 0},
    {"question": "2: What is the capital of Australia?", "option": ["Sydney", "Melbourne", "Brisbane", "Canberra"], "answer": 3},
    {"question": "3: What is the capital of Brazil?", "option": ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Belo Hor"], "answer": 2},
    {"question": "4: What is the capital of Canada?", "option": ["Toronto", "Montreal", "Vancouver", "Ottawa"], "answer": 3},
    {"question": "5: What is the capital of China?", "option": ["Beijing", "Shanghai", "Guangzhou", "Hong Kong"], "answer": 0},
    {"question": "6: What is the capital of France?", "option": ["Paris", "Lyon", "Marseille", "Bordeaux"], "answer": 0},
    {"question": "7: What is the capital of Germany?", "option": ["Berlin", "Munich", "Hamburg", "Cologne"], "answer": 0},
    {"question": "8: What is the capital of India?", "option": ["Mumbai", "Delhi", "Bangalore", "Chennai"], "answer": 1},
    {"question": "9: What is the capital of Italy?", "option": ["Rome", "Milan", "Naples", "Turin"], "answer": 0},
    {"question": "10: What is the capital of Japan?", "option": ["Tokyo", "Osaka", "Nagoya", "Shibuya"], "answer": 0}
];

// Variables to track the current question and score
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Function to load the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Set the question text
    document.getElementById('qsn').textContent = currentQuestion.question;

    // Set the options text
    document.getElementById('a').textContent = currentQuestion.option[0];
    document.getElementById('b').textContent = currentQuestion.option[1];
    document.getElementById('c').textContent = currentQuestion.option[2];
    document.getElementById('d').textContent = currentQuestion.option[3];

    // Reset answer selection
    selectedAnswer = null;
    document.querySelectorAll('.button').forEach(button => {
        button.style.backgroundColor = '';  // Reset background
    });
}

// Function to handle selecting an answer
function selectAnswer(optionIndex) {
    selectedAnswer = optionIndex;

    // Highlight selected answer (optional)
    document.querySelectorAll('.button').forEach((button, index) => {
        button.style.backgroundColor = index === optionIndex ? 'lightgreen' : '';
    });
}

// Function to move to the next question
function nextQuestion() {
    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    // Check if the selected answer is correct
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }

    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Load the next question
    } else {
        showResults(); // Show final results
    }
}

// Function to show results
function showResults() {
    document.getElementById('box').style.display = 'none';  // Hide the quiz options
    document.getElementById('next').style.display = 'none'; // Hide the next button
    document.getElementById('qsn').style.display = 'none'; // Hide the question

    const finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = `Your score: ${score} / ${questions.length}`;

    document.getElementById('result').style.display = 'block';  // Show the score
}

// Start the quiz by loading the first question
loadQuestion();
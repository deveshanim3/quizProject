
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
]

let currentQuestionIndex = 0
let score = 0
let selectedAnswer = null

// Load Function
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('qsn').textContent = currentQuestion.question
    document.getElementById('a').textContent = currentQuestion.option[0]
    document.getElementById('b').textContent = currentQuestion.option[1]
    document.getElementById('c').textContent = currentQuestion.option[2]
    document.getElementById('d').textContent = currentQuestion.option[3]
    selectedAnswer = null;
    document.querySelectorAll('.button').forEach(button => {
        button.style.backgroundColor = ''
    })
}

// selection function
function selectAnswer(optionIndex) {
    selectedAnswer = optionIndex;
    document.querySelectorAll('.button').forEach((button, index) => {
        button.style.backgroundColor = index === optionIndex ? 'lightgreen' : '';
    })
}

// move to next qsn fxn
function nextQuestion() {
    if (selectedAnswer === null) {
        alert("Please select an answer!")
        return
    }
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++
    }
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        loadQuestion()
    } else {
        showResults()
    }
}

// Function to show results
function showResults() {
    document.getElementById('box').style.display = 'none'
    document.getElementById('next').style.display = 'none'
    document.getElementById('qsn').style.display = 'none'

    const finalScoreEl = document.getElementById('final-score')
    finalScoreEl.textContent = `Your score: ${score} / ${questions.length}`
    document.getElementById('result').style.display = 'block'
    document.getElementById('restartButton').style.display = 'block'
}
//reset quiz
function resetQuiz() {
    
    score = 0
    currentQuestionIndex = 0
    document.getElementById('result').style.display = 'none'
    document.getElementById('next').style.display = 'block'
    document.getElementById('qsn').style.display = 'block'
    document.querySelectorAll('.button').forEach(button => {
        button.style.backgroundColor = ''
    })
    loadQuestion()
}

//Main program starts
loadQuestion()
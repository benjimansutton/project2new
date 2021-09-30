
/** this varible set the start-btn as the startButton */
const startButton = document.getElementById('start-btn')

/** this variable lets us select the question container  */
const questionContainerElement = document.getElementById('question-container')

/** this variable gets the question element for us to put the question inside the inner text of that element */
const questionElement = document.getElementById('question')

/** this variable gets the answer button element for us to put the answer inside the inner text of each button */
const answerButtonElement = document.getElementById('answer-buttons')

/** this variable makes it show the questions shuffle and not always show up in the correct order  */
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
    


/**
 * This function will start the game, when the start button is pressed.
 */
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}


/**
 * CHECK THISThis will set the next question when the next button is selected, this will also change the text
 * inside the answer buttons innertext element to show the relevant quesitons answers and disaply if they 
 * are correct or not.
 */
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}




/**
 * This function will run to get the innerText of the 
 * question element and replace it with the question from the array of questions
 */
function showQuestion(question) {
    questionElement.innerText = questions.question
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}


/**
 * This will let the user select the correct answer
 */
function selectAnswer() {

}


/**
 * questions for the quiz with the correct answer as true
 */
const questions = [
    {
        question: 'What is the capital of Chile?',
        answers: [
            { text: 'Santiago', correct: true },
            { text: 'London', correct: false },
            { text: 'Mexico', correct: false },
            { text: 'Columbia', correct: false }
        ]
    },
    {
        question: 'What is the highest mountain in Britain?',
        answers: [
            {text: 'Snowdon', correct: false},
            {text: 'Llangollen', correct: false},
            {text: 'Evererst', correct: false},
            {text: 'Ben Nevis', correct: true}
        ]
    },
    {
        question: 'What is the smallest country in the world?',
        answers: [
            {text: 'Florida', correct: false},
            {text: 'Vatican City', correct: true},
            {text: 'Manchester', correct: false},
            {text: 'Queensland', correct: false}
        ]
    },
    {
        question: 'What is the hottest continent on Earth?',
        answers: [
            {text: 'America', correct: false},
            {text: 'Europe', correct: false},
            {text: 'Asia', correct: false},
            {text: 'Africa', correct: true}
        ]
    },
]
const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Which is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Tiger", correct: false },
      { text: "Leopard", correct: false },
    ],
  },
  {
    question: "How many continents are there?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "What do bees produce?",
    answers: [
      { text: "Milk", correct: false },
      { text: "Honey", correct: true },
      { text: "Water", correct: false },
      { text: "Wax", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the air?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is H2O commonly known as?",
    answers: [
      { text: "Salt", correct: false },
      { text: "Hydrogen Peroxide", correct: false },
      { text: "Water", correct: true },
      { text: "Oxygen", correct: false },
    ],
  },
  {
    question: "Which instrument is used to measure temperature?",
    answers: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Hygrometer", correct: false },
      { text: "Speedometer", correct: false },
    ],
  },
  {
    question: "Which month has 28 days in a leap year?",
    answers: [
      { text: "February", correct: true },
      { text: "March", correct: false },
      { text: "April", correct: false },
      { text: "June", correct: false },
    ],
  },
];

const qEl = document.getElementById("q");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");

let ci = 0;
let score = 0;

function startQuiz() {
  ci = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let curr = questions[ci];
  qEl.innerText = `${ci + 1}. ${curr.question}`;

  curr.answers.forEach((ans) => {
    const btn = document.createElement("p");
    btn.innerText = ans.text;
    btn.classList.add("option");
    if (ans.correct) btn.dataset.correct = "true";
    btn.addEventListener("click", selectAnswer);
    optionsEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (optionsEl.firstChild) {
    optionsEl.removeChild(optionsEl.firstChild);
  }
}

function selectAnswer(e) {
  const selected = e.target;
  const correct = selected.dataset.correct === "true";

  if (correct) {
    selected.classList.add("optcorrect");
    score++;
  } else {
    selected.classList.add("optwrong");
  }

  Array.from(optionsEl.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("optcorrect");
    }
    btn.style.pointerEvents = "none";
  });

  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  qEl.innerText = `You scored ${score} out of ${questions.length}! 🎉`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
}

function handleNext() {
  ci++;
  if (ci < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (ci < questions.length) {
    handleNext();
  } else {
    startQuiz();
  }
});

startQuiz();

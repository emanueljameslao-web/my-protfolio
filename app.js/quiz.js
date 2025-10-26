const questions = [
  {
    question: "What does JVM stand for?",
    choices: ["Java Virtual Machine", "Java Variable Method", "Just Virtual Machine", "Joint Variable Model"],
    answer: "Java Virtual Machine"
  },
  {
    question: "Which keyword is used to create an object in Java?",
    choices: ["new", "create", "object", "make"],
    answer: "new"
  },
  {
    question: "What is the default value of an int variable in Java?",
    choices: ["null", "0", "undefined", "1"],
    answer: "0"
  },
  {
    question: "Which company developed Java?",
    choices: ["Microsoft", "Oracle", "Sun Microsystems", "Google"],
    answer: "Sun Microsystems"
  },
  {
    question: "Which method is the entry point in every Java program?",
    choices: ["main()", "start()", "init()", "run()"],
    answer: "main()"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.classList.add("choice-btn");
    btn.addEventListener("click", () => selectAnswer(choice));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(choice) {
  const correct = questions[currentQuestion].answer;
  if (choice === correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = score;
}

restartBtn.addEventListener("click", () => {
  score = 0;
  currentQuestion = 0;
  resultEl.style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion();
});

showQuestion();

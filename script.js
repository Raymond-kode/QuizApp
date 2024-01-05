const questions =[

    {

        question: "Which team won the 2022/2023 UEFA Champions League?",

        answers: [

          { text: "Manchester United", correct: false},

          { text: "Manchester City", correct: true},

          { text: "Roma", correct: false},

          { text: "Napoli", correct: false},

        ]

    },

    {

      question: "who is the current African footballer of the year?",

        answers: [

          { text: "Mane", correct: false},

          { text: "Salah", correct: false}, 

          { text: "Osimhen", correct: true},

          { text: "Kudus", correct: false},

        ]

    },

    {

      question: "Vitalik Buterin is the founder of which chain?",

      answers: [

        { text: "Solana", correct: false},

        { text: "Atom", correct: false},

        { text: "Aptos", correct: false},

        { text: "Ethereum", correct: true },

      ]

    },

    {

      question: "which of the following is not part of Cosmos SDK?",

        answers: [

          { text: "Celestia", correct: false},

          { text: "Aptos", correct: true},

          { text: "Osmo", correct: false},

          { text: "Injective", correct: false},

        ]

    },

    {

        question: "What is your Name?",

          answers: [

            { text: "Musa", correct: false},

            { text: "Raymond", correct: true},

            { text: "Idris", correct: false},

            { text: "John", correct: false},

          ]

      }

  ];

  

  const questionElement = document.getElementById("question");

  const answerButtons = document.getElementById("answer-buttons");

  const nextButton = document.getElementById("next-btn");

  

  let currentQuestionIndex = 0;

  let score = 0;

  

  function startQuiz(){

    currentQuestionIndex = 0;

    score = 0;

    nextButton.innerHTML = "Next";

    showQuestion();

  }

  

  function showQuestion(){

    resetState();

    let currentQuestion= questions[currentQuestionIndex];

    let questionNo = currentQuestionIndex  + 1;

    questionElement.innerHTML = questionNo + "." + currentQuestion. 

    question;

  

    currentQuestion.answers.forEach(answer => {

      const button = document.createElement("button");

      button.innerHTML = answer.text;

      button.classList.add("btn");

      answerButtons.appendChild(button);

      if(answer.correct){

        button.dataset.correct = answer.correct;

      }

      button.addEventListener("click", selectAnswer);

    });

  } 

  

   function resetState(){

     nextButton.style.display = "none";

     while (answerButtons.firstChild){

        answerButtons.removeChild(answerButtons.firstChild)

     }

   }

  

  function selectAnswer(e){

    const selectedBtn =e.target; 

    const isCorrect = selectedBtn.dataset.correct ==="true";

    if(isCorrect){

      selectedBtn.classList.add("correct");

      score++;

    }else{

      selectedBtn.classList.add("incorrect");  

    }

    Array.from(answerButtons.children).forEach(button => {

      if(button.dataset.correct === "true"){

        button.classList.add("correct");

      }

      button.disabled = true;

    });

    nextButton.style.display = "block";

  }

  

  function showScore(){

    resetState();

    questionElement.innerHTML =`You Scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play again";

    nextButton.style.display = "block"; 

  }

  function handleNextButton(){

      currentQuestionIndex++;

      if(currentQuestionIndex < questions. length){

        showQuestion();

      }else{

        showScore();

      }

  }

  nextButton.addEventListener("click", () =>{

      if(currentQuestionIndex < questions.length){

        handleNextButton();

      }else{

            startQuiz();

      }

  });

  

  startQuiz();
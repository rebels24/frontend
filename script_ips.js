const quizData = [
  {
    question: "Keadaan udara pada suatu tempat dan waktu tertentu disebut..?",
    options: ["Iklim", "Cuaca", "Suhu", "Musim"],
    answer: 1
  },
  {
    question: "Alat yang digunakan untuk mengukur curah hujan adalah..?",
    options: [
      "Termometer",
      "Anemometer",
      "Higrometer",
      "Penakar hujan"
    ],
    answer: 3
  },
  {
    question: "Perubahan cuaca yang ekstrem dapat menyebabkan..?",
    options: ["Kesejukan", "Kesuburan tanah", "Banjir dan longsor", "Hujan ringan setiap hari"],
    answer: 2
  }
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  quizData.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.classList.add("question-block");

    const qText = document.createElement("p");
    qText.textContent = `${index + 1}. ${q.question}`;
    qDiv.appendChild(qText);

    q.options.forEach((opt, optIndex) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${optIndex}">
        ${opt}
      `;
      qDiv.appendChild(label);
      qDiv.appendChild(document.createElement("br"));
    });

    container.appendChild(qDiv);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    const answer = document.querySelector(`input[name="question${index}"]:checked`);
    if (answer && parseInt(answer.value) === q.answer) {
      score++;
    }
  });

  const result = document.getElementById("score");
  result.textContent = `Skor Anda: ${score} dari ${quizData.length}`;
}

window.onload = loadQuiz;

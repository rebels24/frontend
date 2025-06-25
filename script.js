const quizData = [
  {
    question: "Bagian komputer yang berfungsi untuk memproses data adalah..?",
    options: ["Monitor", "CPU", "Keyboard", "Mouse"],
    answer: 1
  },
  {
    question: "Yang termasuk perangkat lunak adalah..",
    options: [
      "Monitor",
      "Keyboard",
      "Microsoft Word",
      "Printer"
    ],
    answer: 2
  },
  {
    question: "RAM pada komputer berfungsi untuk..?",
    options: ["Menyimpan data secara permanen", "Menampilkan gambar", "Memproses data", "Menyimpan data sementara saat komputer bekerja"],
    answer: 3
  },
  {
    question: "Sistem operasi komputer yang umum digunakan adalah..?",
    options: ["Instagram", "TikTok", "Windows", "WhatsApp"],
    answer: 2
  },
  {
    question: "Orang yang menggunakan dan mengoperasikan komputer disebut..?",
    options: ["Software", "Hardware", "Brainware", "Keyboard"],
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

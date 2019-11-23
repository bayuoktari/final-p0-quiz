var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var list = document.getElementById("optionlist");
var btn = document.getElementById("button");
var scoreCard = document.getElementById("scoreCard");
var quizBox = document.getElementById("questionBox");
var index = 0;
var score = 0;
var question = [
  {
    q: "Siapa nama presiden indonesia saat ini ?",
    options: ["Susilo Bambang Yudhoyono", "Jokowi", "Soekarno", "Megawati"],
    answer: 2
  },

  {
    q: "Ibukota Negara Indonesia Berada di ?",
    options: ["Medan", "Surabaya", "Jakarta", "Papua"],
    answer: 3
  },

  {
    q: "Pegunungan tertinggi di dunia adalah ?",
    options: ["Everest", "Puncak Jaya", "Sinabung", "Bromo"],
    answer: 1
  },
  {
    q: "Danau terluas di Indonesia adalah ?",
    options: ["Danau Jepara", "Danau Toba", "Danau Singkarak", "Sungai Amazon"],
    answer: 2
  },
  {
    q: "Salah satu keajaiban dunia yang ada di Indonesia adalah ?",
    options: ["Monas", "Candi Prambanan", "Candi Mednut", "Candi Borobudur"],
    answer: 4
  }
];
function dataload() {
  if (index <= question.length - 1) {
    quizBox.innerHTML = question[index].q;
    option1.innerHTML = question[index].options[0];
    option2.innerHTML = question[index].options[1];
    option3.innerHTML = question[index].options[2];
    option4.innerHTML = question[index].options[3];
    scoreCard.innerHTML = score;
  } else {
    quizBox.innerHTML = "Quiz Sudah Selesai, Terimakasih";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    btn.style.display = "none";
  }
}
function nextquestion() {
  index++;
  dataload();
}
function noclick() {
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.pointerEvents = "none";
  }
}
function clickok() {
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.pointerEvents = "auto";
    list.children[i].className = "";
  }
}
function check(element) {
  var id = element.id.split("");
  //   console.log(id);
  if (id[id.length - 1] == question[index].answer) {
    score++;
    element.className = "correct";
    element.innerHTML = "Correct";
    scoreCard.innerHTML = score;
  } else {
    element.className = "wrong";
    element.innerHTML = "Wrong";
  }
}
function answerClick(element) {
  check(element);
  noclick();
}
function nextClick() {
  if (
    list.children[0].getAttribute("style") === null ||
    list.children[0].style.pointerEvents === "auto"
  ) {
    alert("JAWAB DULU BOSQUE");
  } else {
    nextquestion();
    clickok();
  }
}

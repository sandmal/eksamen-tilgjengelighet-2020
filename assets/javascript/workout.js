const arms = document.querySelectorAll("[data-class='arms']");
const jump = document.querySelectorAll("[data-class='jump']");

const modal = document.getElementById("selectWorkoutModal");
const btn = document.querySelector("#workout>button");
const close = document.getElementsByClassName("close")[0];
const closeBtn = document.getElementsByClassName("closeBtn")[0];

const form = document.querySelector("form");
const inputChecked = document.querySelector("input").id;

btn.onclick = function () {
  modal.style.display = "block";
};

close.onclick = function () {
  modal.style.display = "none";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputChecked == "arms") {
    console.log("tes");
  }
});
let running = false;

var stop;
let excercises = 3;
const startingElements = excercises;
let time = startingElements * 10;
const countdownEl = document.getElementById("countdown");

function workout() {
  // Hele workout
  //Kjør en excercise
  //vent til en excercise er over
  //lag en alert som sier pause i x sekunder
  //Repeat

  if (running == false) {
    running = true;
    stop = setInterval(excercise, 1000);
    document.getElementById("startResume").innerHTML = "Pause";
  } else {
    running = false;
    clearInterval(stop);
    document.getElementById("startResume").innerHTML = "Resume";
  }
}

//kjører når en excercise blir kalt
function excercise() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  if ((running = true)) {
    time--;
  }
  time = time < 0 ? 0 : time;
}

function takeBreak() {
  alert("Take a break");
}

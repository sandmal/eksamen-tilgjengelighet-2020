const arms = document.querySelectorAll("[data-class='arms']");
const jump = document.querySelectorAll("[data-class='jump']");

const modal = document.getElementById("selectWorkoutModal");
const btn = document.querySelector("#workout>button");
const close = document.getElementsByClassName("close")[0];
const closeBtn = document.getElementsByClassName("closeBtn")[0];

const form = document.querySelector("form");
//const inputChecked = document.querySelector("input").id;

btn.onclick = function () {
  modal.style.display = "block";
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
};

close.onclick = function () {
  modal.style.display = "none";
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
};

window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});

// DON'T DELETE THIS, IT BREAKS EVERYTHING
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

function someFunc() {
  checkBox();
  showBar();
  hideButtonWork();
}

function renderCurrentExercise(exercise) {
  document.getElementById("active-workout").innerHTML = `
    <p>${exercise.category} ||  ${exercise.type}</p>
      <figure data-class="${exercise.category}" data-name="${exercise.name}">
        <img src="${exercise.img}" alt="${exercise.name} Exercise" />
        <figcaption>30 SEC.<span class="line-break">${exercise.name}</span></figcaption>
      </figure>
      <audio controls autoplay>
        <source src="assets/sounds/${exercise.name}.mp3">
        </audio>
      <p>${exercise.description}</p>
    `;
}

function renderRestAnimation() {
  document.getElementById("active-workout").innerHTML = `
      <h3>REST</h3>
      <p>Take a rest</p>
      <audio controls autoplay>
        <source src="assets/sounds/rest.mp3">
      </audio>
      `;
}

function renderWorkoutEnd() {
  document.getElementById("active-workout").innerHTML = `
      <h3>Workout is done</h3>
      <p>Workout complete</p>
      <audio controls autoplay>
        <source src="assets/sounds/completejaps.mp3">
      </audio>
      `;
}

function startTimer(seconds, container, oncomplete) {
  var startTime,
    timer,
    obj,
    ms = seconds * 1000,
    display = document.getElementById(container);
  obj = {};
  obj.resume = function () {
    startTime = new Date().getTime();
    timer = setInterval(obj.step, 250); // adjust this number to affect granularity
    // lower numbers are more accurate, but more CPU-expensive
  };
  obj.pause = function () {
    ms = obj.step();
    clearInterval(timer);
  };

  obj.rest = function () {
    ms = seconds * 1000;
  };

  obj.step = function () {
    var now = Math.max(0, ms - (new Date().getTime() - startTime)),
      m = Math.floor(now / 60000),
      s = Math.floor(now / 1000) % 60;
    s = (s < 10 ? "0" : "") + s;
    display.innerHTML = m + ":" + s;
    if (now == 0) {
      clearInterval(timer);
      obj.resume = function () {};
      if (oncomplete) oncomplete();
    }
    return now;
  };
  obj.resume();
  return obj;
}

let running = false;
let rest = false;

var stop;
const exerciseTime = 5;
const restTime = 5;

const countdownEl = document.getElementById("countdown");
let exerciseTimer;
let exercisePaused = false;

let fieldSetOne = document.querySelectorAll(
  "fieldset:nth-child(1) input[type=checkbox]"
);

let fieldSetTwo = document.querySelectorAll(
  "fieldset:nth-child(2) input[type=checkbox]"
);

var filter;
var resultOne = [];
var resultTwo = [];
var result = [];

function checkBox() {
  for (let i = 0; i < fieldSetOne.length; i++) {
    if (fieldSetOne[i].checked == true) {
      resultOne.push(fieldSetOne[i].value.toLowerCase());
      var uniqueOne = [...new Set(resultOne)];
    }
  }

  if (resultOne && resultOne.length) {
    // console.log("no elements in result");
    var one = uniqueOne.toString();
    result.push(one);
    var fieldOne = true;
  }

  for (let i = 0; i < fieldSetTwo.length; i++) {
    if (fieldSetTwo[i].checked == true) {
      resultTwo.push(fieldSetTwo[i].value.toLowerCase());
      var uniqueTwo = [...new Set(resultTwo)];
    }
  }

  if (resultTwo && resultTwo.length) {
    var two = uniqueTwo.toString();
    result.push(two);
    var fieldTwo = true;
  }

  if (fieldOne == true && fieldTwo == true) {
    filter = result;
    // console.log(filter);
    workout();
  } else {
    let div = document.getElementById("active-workout");
    div.insertAdjacentHTML(
      "afterbegin",
      `<p role="alert" class="alert">You didn't choose a single exercise or a body part, click reset to try again!</p>`
    );
  }
}
// console.log(filter);
function workout() {
  // Hele workout
  //Kjør en excercise
  //vent til en excercise er over
  //lag en alert som sier pause i x sekunder
  //Repeat

  let exercises = exerciseDetails;
  exercises = exercises.filter((exercise) => {
    const isCorrectName = filter[1]
      .split(",")
      .find((name) => name === exercise.name.toLowerCase());

    const isCorrectCategory = filter[0]
      .split(",")
      .find((body) => exercise.category.includes(body));

    return isCorrectCategory && isCorrectName;
  });
  // console.log(exercises);

  let currentIndex = exercises.length - 1;
  var excerciseProgress = 0;
  function progressBar() {
    var element = document.getElementById("myBar");
    if (excerciseProgress >= 1000) {
    } else {
      element.style.width = excerciseProgress + "%";
      // element.innerHTML = excerciseProgress * 1 + "%";
    }
  }

  if (running == false) {
    document.getElementById("startResume").innerHTML = "Pause";
    running = true;

    (function workoutLoop() {
      renderCurrentExercise(exercises[currentIndex]);
      exerciseTimer = new startTimer(exerciseTime, "timer", () => {
        renderWorkoutEnd();
        exerciseTimer.rest();
        exerciseTimer.resume = function () {};
        excerciseProgress = 100 - (currentIndex / exercises.length) * 100;
        progressBar();
        if (currentIndex > 0) {
          renderRestAnimation();
          exerciseTimer = new startTimer(restTime, "timer", () => {
            if (currentIndex > 0) {
              currentIndex -= 1;
              renderCurrentExercise(exercises[currentIndex]);
            }
            if (currentIndex >= 0) {
              excerciseProgress = 100 - (currentIndex / exercises.length) * 100;
              workoutLoop();
              progressBar();
            }
          });
        }
      });
    })();
  } else {
    if (exercisePaused) {
      exerciseTimer.resume();
      exercisePaused = false;
      document.getElementById("startResume").innerHTML = "Pause";
    } else {
      exerciseTimer.pause();
      exercisePaused = true;
      document.getElementById("startResume").innerHTML = "Resume";
    }
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

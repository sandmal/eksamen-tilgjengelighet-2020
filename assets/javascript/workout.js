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

  var armsChecked = document.getElementById('arms-checkbox').checked;
  var legsChecked = document.getElementById('legs-checkbox').checked;
  var chestChecked = document.getElementById('chest-checkbox').checked;
  var backChecked = document.getElementById('back-checkbox').checked;

  if (inputChecked == "arms") {
    console.log("tes");
  }
});

const exerciseDetails = [
  {
    category: "arms",
    name: "Push-ups",
    img: "assets/images/push-up.png",
  },
  {
    category: "arms",
    name: "Push-up-rotate",
    img: "assets/images/push-up-rotate.png",
  },
  {
    category: "arms",
    name: "Side-plank",
    img: "assets/images/side-plank.png",
  },
  {
    category: "arms",
    name: "Plank",
    img: "assets/images/plank.png",
  },
  {
    category: "arms",
    name: "Triceps-dip",
    img: "assets/images/triceps-dip.png",
  },
  {
    category: "legs",
    name: "Squat",
    img: "assets/images/squat.png",
  },
  {
    category: "legs",
    name: "Step-up",
    img: "assets/images/step-up.png",
  },
  {
    category: "legs",
    name: "Running",
    img: "assets/images/running.png",
  },
  {
    category: "legs",
    name: "Lunge",
    img: "assets/images/lunge.png",
  }
];

function renderCurrentExercise(exercise) {
  document.getElementById("active-workout").innerHTML = `
  <p>${exercise.category}</p>
    <figure data-class="${exercise.category}" data-name="${exercise.name}">
      <img src="${exercise.img}" alt="${exercise.name} Exercise" />
      <figcaption>30 SEC.<span class="line-break">${exercise.name}</span></figcaption>
    </figure>
  `
}

var Timer = function(callback, delay) {
  var timerId, start, remaining = delay;

  this.pause = function() {
      window.clearTimeout(timerId);
      remaining -= Date.now() - start;
  };

  this.resume = function() {
      start = Date.now();
      window.clearTimeout(timerId);
      timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
};

let running = false;

var stop;
const exerciseTime = 1000;
const restTime = 500;
const countdownEl = document.getElementById("countdown");
let exerciseTimer;
let exercisePaused = false;

function workout() {
  // Hele workout
  //Kjør en excercise
  //vent til en excercise er over
  //lag en alert som sier pause i x sekunder
  //Repeat

  let exercises = exerciseDetails;

  // Filtrering
  exercises = exercises.filter(exercise => {
    return ["legs", "arms"].includes(exercise.category);
  });

  let currentIndex = exercises.length - 1;
  //let excerciseProgress = 0;

  if (running == false) {
    document.getElementById("startResume").innerHTML = "Pause";
    running = true;

    (function workoutLoop() {
      renderCurrentExercise(exercises[currentIndex])
      exerciseTimer = new Timer(() => {
        // rest trigger
        setTimeout(()=>{
          // GJør rest animasjon 
          // Setinterval på en progress bar
        }, exerciseTime)
        if (currentIndex > 0) {
          currentIndex -= 1;
          renderCurrentExercise(exercises[currentIndex])
        }
        if (currentIndex >= 0) {
          //excerciseProgress++;
          workoutLoop();
        }
      }, exerciseTime + restTime);
    })();

  } else {
    if (exercisePaused) {
      exerciseTimer.resume()
      exercisePaused = false;
      document.getElementById("startResume").innerHTML = "Pause";
    } else {
      exerciseTimer.pause()
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

function takeBreak() {
  alert("Take a break");
}

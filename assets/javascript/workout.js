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

  var armsChecked = document.getElementById("arms-checkbox").checked;
  var legsChecked = document.getElementById("legs-checkbox").checked;
  var chestChecked = document.getElementById("chest-checkbox").checked;
  var backChecked = document.getElementById("back-checkbox").checked;

  if (inputChecked == "arms") {
    console.log("tes");
  }
});

const exerciseDetails = [
  {
    category: "arms",
    name: "Push-ups",
    img: "assets/images/push-up.png",
    description: "assets/descriptions/Push-up.txt",
  },
  {
    category: "arms",
    name: "Push-up-rotate",
    img: "assets/images/push-up-rotate.png",
    description: "assets/descriptions/Push-up-rotation.txt",
  },
  {
    category: "arms",
    name: "Side-plank",
    img: "assets/images/side-plank.png",
    description: "assets/descriptions/Side-plank.txt",
  },
  {
    category: "arms",
    name: "Plank",
    img: "assets/images/plank.png",
    description: "assets/descriptions/Plank.txt",
  },
  {
    category: "arms",
    name: "Triceps-dip",
    img: "assets/images/triceps-dip.png",
    description: "assets/descriptions/Triceps-dips.txt",
  },
  {
    category: "arms",
    name: "Crunch",
    img: "assets/images/crunch.png",
    description: "assets/descriptions/Crunch.txt",
  },

  {
    category: "legs",
    name: "Squat",
    img: "assets/images/squat.png",
    description: "assets/descriptions/Squat-Jump.txt",
  },
  {
    category: "legs",
    name: "Step-up",
    img: "assets/images/step-up.png",
    description: "assets/descriptions/Step-up.txt",
  },
  {
    category: "legs",
    name: "Running",
    img: "assets/images/running.png",
    description: "assets/descriptions/Running.txt",
  },
  {
    category: "legs",
    name: "Lunge",
    img: "assets/images/lunge.png",
    description: "assets/descriptions/Lunge.txt",
  },
  {
    category: "legs",
    name: "Jumping Jacks",
    img: "assets/images/jumping-jack.png",
    description: "assets/descriptions/Squat-Jump.txt",
  },
  {
    category: "legs",
    name: "Wall-sit",
    img: "assets/images/wall-sit.png",
    description: `<ul>


    <li>Step 1 Start with your back against a wall with your feet shoulder width and about 2 feet from the wall.</li>

    <li>Step 2 Engage your abdominal muscles and slowly slide your back down the wall until your thighs are parallel to the ground. </li>

    <li>Step 3 Adjust your feet so your knees are directly above your ankles (rather than over your toes).</li>

    <li>Step 4 Keep your back flat against the wall.</li>

    <li>Step 5 Hold the position for 20 to 60 seconds.</li>

    <li>Step 6 Slide slowly back up the wall to a standing position.</li>

    <li>Step 7 Rest 30 seconds and repeat the exercise three times. Increase your hold time by five seconds as you increase your strength.</li>
    </ul>`,
  },
];

function renderCurrentExercise(exercise) {
  document.getElementById("active-workout").innerHTML = `
  <p>${exercise.category}</p>
    <figure data-class="${exercise.category}" data-name="${exercise.name}">
      <img src="${exercise.img}" alt="${exercise.name} Exercise" />
      <figcaption>30 SEC.<span class="line-break">${exercise.name}</span></figcaption>
    </figure>
    <p>${exercise.description}</p>
  `;
}
function renderRestAnimation() {
  document.getElementById("active-workout").innerHTML = `
    <h3>REST</h3>
    <p>Take a rest</p>
    `;
}

// var Timer = function (callback, delay) {
//   var timerId,
//     start,
//     remaining = delay;

//   this.pause = function () {
//     window.clearTimeout(timerId);
//     remaining -= Date.now() - start;
//   };

//   this.resume = function () {
//     start = Date.now();
//     window.clearTimeout(timerId);
//     timerId = window.setTimeout(callback, remaining);
//   };

//   this.resume();
// };

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

var stop;
// const exerciseTime = 5000;
// const restTime = 2000;
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
  exercises = exercises.filter((exercise) => {
    return ["legs", "arms"].includes(exercise.category);
    // return ["Wall-sit"].includes(exercise.name);
  });

  let currentIndex = exercises.length - 1;
  //let excerciseProgress = 0;

  if (running == false) {
    document.getElementById("startResume").innerHTML = "Pause";
    running = true;

    (function workoutLoop() {
      renderCurrentExercise(exercises[currentIndex]);
      exerciseTimer = new startTimer(5 * 60, "timer", function () {
        alert("Done!");
      })(() => {
        // rest trigger
        setTimeout(() => {
          // GJør rest animasjon
          if (currentIndex > 0) {
            renderRestAnimation();
          }
          // Setinterval på en progress bar
        }, exerciseTime);

        if (currentIndex > 0) {
          currentIndex -= 1;
          renderCurrentExercise(exercises[currentIndex]);
        }
        if (currentIndex >= 0) {
          //excerciseProgress++;
          workoutLoop();
        }
      }, exerciseTime + restTime);
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

function takeBreak() {
  alert("Take a break");
}

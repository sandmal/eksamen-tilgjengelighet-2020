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

form.addEventListener("submit", function (event) {
  event.preventDefault();
  /* 
  var armsChecked = document.getElementById("arms-checkbox").checked;
  var legsChecked = document.getElementById("legs-checkbox").checked;
  var chestChecked = document.getElementById("chest-checkbox").checked;
  var backChecked = document.getElementById("back-checkbox").checked;

  if (inputChecked == "arms") {
    console.log("tes");
  } */
});

function armsClick() {
  document.getElementById("arms-checkbox").checked = !document.getElementById(
    "arms-checkbox"
  ).checked;
  document.getElementById("arms").classList.toggle("workoutButtonToggled");
}

function legsClick() {
  document.getElementById("legs-checkbox").checked = !document.getElementById(
    "legs-checkbox"
  ).checked;
  document.getElementById("legs").classList.toggle("workoutButtonToggled");
}

function chestClick() {
  document.getElementById("chest-checkbox").checked = !document.getElementById(
    "chest-checkbox"
  ).checked;
  document.getElementById("chest").classList.toggle("workoutButtonToggled");
}

function backClick() {
  document.getElementById("back-checkbox").checked = !document.getElementById(
    "back-checkbox"
  ).checked;
  document.getElementById("back").classList.toggle("workoutButtonToggled");
}

function runningClick() {
  document.getElementById("running").checked = !document.getElementById(
    "running"
  ).checked;
  document
    .getElementById("runningBtn")
    .classList.toggle("workoutButtonToggled");
}

function jumpingClick() {
  document.getElementById("jumping").checked = !document.getElementById(
    "jumping"
  ).checked;
  document
    .getElementById("jumpingBtn")
    .classList.toggle("workoutButtonToggled");
}

function chairClick() {
  document.getElementById("chair").checked = !document.getElementById("chair")
    .checked;
  document.getElementById("chairBtn").classList.toggle("workoutButtonToggled");
}

function spaceClick() {
  document.getElementById("space").checked = !document.getElementById("space")
    .checked;
  document.getElementById("spaceBtn").classList.toggle("workoutButtonToggled");
}

const exerciseDetails = [
  {
    category: "arms",
    name: "Push-ups",
    img: "assets/images/push-up.png",
    description: `
   <ul role="alert">
      <li><span class="bold">Step 1</span> Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you.</li>
      <li><span class="bold">Step 2</span> Slowly bend forward to place your palms flat on the mat, positioning your hands shoulder-width apart with your fingers facing forward or turned slightly inward. 
      Slowly shift your weight forward until your shoulders are positioned directly over your hands. 
      Reposition your hands as needed to allow full extension of your body without any bend at the hips or knees. 
      Stiffen your torso by contracting your core/abdominal muscles ("bracing"), your glute and quadriceps muscles and align your head with your spine. 
      Place your feet together with your ankles dorsiflexed (toes pointed towards your shins).</li>
      <li><span class="bold">Step 3</span> Downward Phase: Slowly lower your body towards the floor while maintaining a rigid torso and head aligned with your spine. 
      Do not allow your low back to sag or your hips to hike upwards during this downward phase. 
      Continue to lower yourself until your chest or chin touch the mat/floor. 
      Allow your elbows to flare outwards during the lowering phase.</li>
      <li><span class="bold">Step 4</span> Upward Phase: Press upwards through your arms while maintaining a rigid torso and head aligned with your spine. 
      For extra strength think about pushing the floor away from you. 
      Do not allow your low back to sag or your hips to hike upwards. 
      Continue pressing until the arms are fully extended at the elbows.</li>
      <li><span class="bold">Step 5</span> An alternative position is to turn your hands to face forwards and keep your your elbows close to your sides during the downward phase. 
      This shifts the emphasis from the chest muscles onto the triceps and may reduce stresses in the shoulder joint.
      Pushing through the heel and outside surface of your palm provides greater force in your press and stability to your shoulders.</li>
    </ul>
    `,
  },
  {
    category: "arms",
    name: "Push-up-rotate",
    img: "assets/images/push-up-rotate.png",
    description: `
    <ul role="alert">
      <li><span class="bold">Step 1</span> Start in a plank position, with your shoulders over your wrists and legs out behind you with your feet hip distance apart. 
      Pull your navel in and keep your back straight.</li>
      <li><span class="bold">Step 2</span> As you lower and exhale, bend your elbows outward to the sides. 
      Hold at the bottom for one breath.</li>
      <li><span class="bold">Step 3</span> Raise back up to top push-up position. 
      As you reach the top, keep moving in a fluid motion to side plank position: release your right arm and raise it to the ceiling, keeping your body in a long diagonal line. 
      Hold for one breath, then move back into plank position.</li>
      <li><span class="bold">Step 4</span> Repeat the push-up, twisting the opposite direction bringing your left arm toward the ceiling. 
      Return to plank position to complete one rep.</li>
    </ul>
    `,
  },
  {
    category: "arms",
    name: "Side-plank",
    img: "assets/images/side-plank.png",
    description: `
    <ul role="alert">
      <li><span class="bold">Step 1</span> Starting Position: Lie on your right side on an exercise mat with extended legs, placing your left leg directly over your right leg and and stacking your feet one on top of the other. 
      Place your right elbow directly under your shoulder, align your head with your spine and keep your hips and right knee in contact with the exercise mat.</li>
      <li><span class="bold">Step 2</span> Upward Phase: Exhale, gently contract your abdominal / core muscles to stiffen your spine and lift your hips and knees off the mat, keeping contact with the side of your right foot and keep head aligned with your spine. 
      Keep your right elbow positioned directly under your shoulder.</li>
      <li><span class="bold">Step 3</span> Lowering Phase: Inhale and gently return yourself to your starting position. Alternate sides and repeat.</li>
      <li><span class="bold">Step 4</span> Exercise Variation: You can increase the intensity of this exercise by (1) increasing the length of time you are in the raised position, (2) raising the upper leg off the lower leg or (3) raising the lower leg off the floor and maintaining contact with your elbow and the foot of the upper leg only.
      When raising the upper leg off the lower leg, there is no need to raise it to a level beyond parallel with the floor.</li>
    </ul>
    `,
  },
  {
    category: "arms",
    name: "Plank",
    img: "assets/images/plank.png",
    description: `
    <ul role="alert">
      <li><span class="bold">Step 1</span> Starting Position: Lay down with your elbows touching the floor.</li>
      <li><span class="bold">Step 2</span> When the timer starts, tense your body so that only your elbows and toes are touching the ground.</li>
      <li><span class="bold">Step 3</span> Remain like this until the timer stops.</li>
    </ul>
    `,
  },
  {
    category: "arms",
    name: "Triceps-dip",
    img: "assets/images/triceps-dip.png",
    description: `
   <ul role="alert">
      <li><span class="bold">Step 1</span> Sit on the edge of the chair and grip the edge next to your hips. 
      Your fingers should be pointed at your feet. 
      Your legs are extended and your feet should be about hip-width apart with the heels touching the ground. 
      Look straight ahead with your chin up.</li>
      <li><span class="bold">Step 2</span> Press into your palms to lift your body and slide forward just far enough that your behind clears the edge of the chair.</li>
      <li><span class="bold">Step 3</span> Lower yourself until your elbows are bent between 45 and 90 degrees.</li>
      <li><span class="bold">Step 4</span> Slowly push yourself back up to the start position and repeat. 
      Control the movement throughout the range of motion.</li>
      <li><span class="bold">Step 5</span> Begin with 3 sets of 10 repetitions and increase your sets and reps over several weeks as you build muscle and strength in your triceps.</li>
    </ul>
    `,
  },
  {
    category: "arms",
    name: "Crunch",
    img: "assets/images/crunch.png",
    description: `
    <ul role="alert">
      <li><span class="bold">Step 1</span> Starting Position: Lie in a supine (on your back) position on a mat with your knees bent, feet flat on the floor and heels 12 - 18" from your tailbone.</li>
      <li><span class="bold">Step 2</span> Place your hands behind your head, squeezing your scapulae (shoulder blades) together and pulling your elbows back without arching your low back. 
      This elbow position should be maintained throughout the exercise. 
      Align your head with your spine, but allow it to move into slight flexion (moving the chin towards the chest) during the upward phase of the exercise.</li>
      <li><span class="bold">Step 3</span> Upward Phase: Exhale, contract your abdominal and core muscles and flex your chin slightly towards your chest while slowly curling your torso towards your thighs. 
      The movement should focus on pulling your rib cage towards your pelvis (the neck stays relaxed while the chin is tucked towards the neck). 
      Your feet, tailbone and lower back should remain in contact with the mat at all times. Continue curling up until your upper back is lifted off the mat. Hold this position briefly.</li>
      <li><span class="bold">Step 4</span> Downward Phase: Gently inhale and slowly uncurl (lower) your torso back towards the mat in a controlled fashion keeping your feet, tailbone and low back in contact with the mat.
      Proper form is important for this exercise to prevent excessive stress on your low back. 
      Individuals usually perform this movement too rapidly and recruit the hip flexors to assist with the upward phase. 
      This technique tilts the pelvis anteriorly, increasing the stress on the low back and should be avoided. 
      The abdominals connect the rib cage to the pelvis so the movement should focus on bringing these two body parts closer together while keeping the neck and shoulders relaxed.</li>
    </ul>
    `,
  },

  {
    category: "legs",
    name: "Squat",
    img: "assets/images/squat.png",
    description: `
     <ul role="alert">
      <li><span class="bold">Step 1</span> Starting Position: Stand with your feet feet hip-width apart, arms by your sides, depressing and retracting your scapulae (pull shoulders down and back) without arching your low back, and "brace" (engage your abdominal / core muscles) to stiffen your spine. 
      Downward Phase: Begin your downward phase by first shifting your hips backwards then slowly moving downwards to create a hinge-like movement at your knees. 
      Continue to lower yourself until your feel your heels about to lift off the floor. 
      Try to maintain a flat back by bending forward at the hips, keep your head facing forward and position to your arms where comfortable or where they offer the greatest degree of balance support.</li>
      <li><span class="bold">Step 2</span> Jumping Movement: With ONLY a very brief pause at the bottom of your downward phase, explode upwards through your lower extremity, achieving triple extension (pushing and extending your ankles, knees and hips simultaneously). 
      As you jump into the air, keep your feet level with each other and parallel with the floor.</li>
      <li><span class="bold">Step 3</span> Landing: The most important components of the landing phase are correct foot position and avoiding excessive forward movement in your lower extremity which places additional stresses upon your knees. 
      Attempt to land softly and quietly on the mid-foot, rolling backwards quickly towards the heels. 
      Always push your hips backwards and drop them downwards to absorb the impacting forces associated with jumping. 
      Avoid locking out your knees or quads on your landing as this may lead to potential knee injuries.</li>
      <li><span class="bold">Step 4</span> Exercise Variation: Perform repeated jumps with no rest in between each repetition.
      It is suggested, you first learn how to squat and land before attempting to jump. 
      Once you have mastered the hip-hinge mechanism, begin with small jumps, but emphasize your landing mechanics. 
      Only progress to more explosive jumps once you have mastered your landing mechanics.</li>
    </ul>
    `,
  },
  {
    category: "legs",
    name: "Step-up",
    img: "assets/images/step-up.png",
    description: `
    <ul role="alert">
      <li><span class="bold">Step 1</span> Starting Position: Stand with your feet parallel about hip width apart while holding dumbbells in your hands with palms facing inwards. 
      Depress and retract your scapulae (pull shoulders down and back).
      Attempt to avoid shrugging your shoulder upwards.</li>
      <li><span class="bold">Step 2</span> pward Phase: Slowly step to place your right foot on a platform, placing your foot firmly on the deck while keeping your torso upright and aligning your knee over your second toe. 
      Push off with the trailing (left) leg to raise your body onto the platform placing that foot alongside your leading (right) foot. 
      During this transition, your torso and your right tibia (shinbone) will move slightly forward past vertical, but try to avoid excessive forward movement.</li>
      <li><span class="bold">Step 3</span> Downward Phase: Slowly load the weight of your body into your leading (right) foot, step backwards to place the trailing (left) foot on the floor in its starting position. 
      Allow your body to lean slightly forward during the step-down movement. Load your weight into your trailing (left) foot and step off the platform with your leading (right) foot, returning to your starting position. 
      Repeat for the opposite side.</li>
      <li><span class="bold">Step 4</span> An exercise progression is to step-up onto one leg only and remain standing on a single-leg before stepping back down.
      Single-leg stepping is a functional movement we perform daily. 
      Always monitor your foot, ankle and knee position. 
      Avoid movement of your foot and ankle (collapsing in or out), and always attempt to keep your knee aligned over your second toe.</li>
    </ul>
    `,
  },
  {
    category: "hump",
    name: "Running",
    img: "assets/images/running.png",
    description: `
    <ul role="alert">
      <li><span class="bold">Step 1:</span> Stand straight with your feet shoulder width apart and face forward, opening up your chest.</li>
      <li><span class="bold">Step 2:</span> Start pulling your knees up, and slowly land on the balls of your feet.</li>
      <li><span class="bold">Step 3:</span> Repeat until set is complete.</li>
    </ul>
    `,
  },
  {
    category: "hump",
    name: "Lunge",
    img: "assets/images/lunge.png",
    description: `
    <ul role="alert">
      <li><span class="bold">Step 1</span> Starting Position: Stand with your feet together. Depress and retract your scapulae (pull your shoulders down and back) without arching your low back, and "brace" (engage your abdominal/core muscles) to stiffen your spine.</li>
      <li><span class="bold">Step 2</span> In preparation to step forward, slowly lift one foot off the floor, stabilizing your body on the stance (supporting) leg. 
      Avoid any sideways tilting or swaying in your upper body and try not to move the stance (supporting) foot. 
      Hold this position momentarily before stepping forward. 
      The raised (swing) leg should initiate contact with a heel strike first, slowly transferring your body weight into the leading (forward) foot placed firmly on the floor. 
      As you load into this leg, avoid any sideways tilting or swaying in your upper body and try not to move the stance (supporting) foot.</li>
      <li><span class="bold">Step 3</span> As you lunge forward, focus more on dropping your hips towards the floor rather than driving your hips forward. 
      This will help control the amount of forward movement of your shinbone (forward tibial translation) over your foot. 
      Continue lowering your body to a comfortable position or until your front thigh becomes parallel with the floor and your tibia (shinbone) is in a slight forward lean.
      While lunging, simultaneously, bend forward at your hips, maintaining a flat back.</li>
      <li><span class="bold">Step 4</span> Firmly push off with your front leg, activating both your quads and glutes (thighs and butt muscles) to return to your upright, starting position.
      We suggest you first learn how to perform single leg-stands on the ground before performing this forward lunge. 
      Once you master the forward lunge, you can progress to doing a lunge using arm drivers and mult-directional glute activation lunges.</li>
    </ul>
    `,
  },
  {
    category: "hump",
    name: "Jumping Jacks",
    img: "assets/images/jumping-jack.png",
    description: `
    <ul role="alert">
      <li><span class="bold">Step 1:</span> Start with your arms hanging naturally by your side, and your feet close.</li>
      <li><span class="bold">Step 2:</span> When jumping, you should land with your arms raised and feets wide apart.</li>
      <li><span class="bold">Step 3:</span> Alternate between having your arms raised, feet apart, and arms down, feet close.</li>
    </ul>
    `,
  },
  {
    category: "hump",
    name: "Wall-sit",
    img: "assets/images/wall-sit.png",
    description: ` 
    <ul role="alert">
      <li><span class="bold">Step 1:</span> Start with your back against a wall with your feet shoulder width and about 2 feet from the wall.</li>
      <li><span class="bold">Step 2:</span> Engage your abdominal muscles and slowly slide your back down the wall until your thighs are parallel to the ground. </li>
      <li><span class="bold">Step 3:</span> Adjust your feet so your knees are directly above your ankles (rather than over your toes).</li>
      <li><span class="bold">Step 4:</span> Keep your back flat against the wall.</li>
      <li><span class="bold">Step 5:</span> Hold the position for 20 to 60 seconds.</li>
      <li><span class="bold">Step 6:</span> Slide slowly back up the wall to a standing position.</li>
      <li><span class="bold">Step 7:</span> Rest 30 seconds and repeat the exercise three times. Increase your hold time by five seconds as you increase your strength.</li>
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

function renderWorkoutEnd() {
  document.getElementById("active-workout").innerHTML = `
      <h3>Workout is done</h3>
      <p>Workout complete</p>
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
const restTime = 3;

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
    return ["arms"].includes(exercise.category);
    // return ["Wall-sit"].includes(exercise.name);
  });

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

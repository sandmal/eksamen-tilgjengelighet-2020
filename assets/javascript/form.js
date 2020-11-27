function reset() {
  location.reload();
}

function showBar() {
  document.getElementById("progressBar").style.display = "block";
}

function hideButtonWork() {
  document.querySelector("#workout>button").style.display = "none";
}

// Functions for body parts
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

function shoulderClick() {
  document.getElementById(
    "shoulders-checkbox"
  ).checked = !document.getElementById("shoulders-checkbox").checked;
  document.getElementById("shoulders").classList.toggle("workoutButtonToggled");
}

function absClick() {
  document.getElementById("abs-checkbox").checked = !document.getElementById(
    "abs-checkbox"
  ).checked;
  document.getElementById("abs").classList.toggle("workoutButtonToggled");
}

function buttClick() {
  document.getElementById("butt-checkbox").checked = !document.getElementById(
    "butt-checkbox"
  ).checked;
  document.getElementById("butt").classList.toggle("workoutButtonToggled");
}

function thighsClick() {
  document.getElementById("thighs-checkbox").checked = !document.getElementById(
    "thighs-checkbox"
  ).checked;
  document.getElementById("thighs").classList.toggle("workoutButtonToggled");
}

function quadsClick() {
  document.getElementById("quads-checkbox").checked = !document.getElementById(
    "quads-checkbox"
  ).checked;
  document.getElementById("quads").classList.toggle("workoutButtonToggled");
}

function glutesClick() {
  document.getElementById("glutes-checkbox").checked = !document.getElementById(
    "glutes-checkbox"
  ).checked;
  document.getElementById("glutes").classList.toggle("workoutButtonToggled");
}

function calvesClick() {
  document.getElementById("calves-checkbox").checked = !document.getElementById(
    "calves-checkbox"
  ).checked;
  document.getElementById("calves").classList.toggle("workoutButtonToggled");
}

function tricepsClick() {
  document.getElementById(
    "triceps-checkbox"
  ).checked = !document.getElementById("triceps-checkbox").checked;
  document.getElementById("triceps").classList.toggle("workoutButtonToggled");
}

// End functions for body parts

function pushupClick() {
  document.getElementById("pushup").checked = !document.getElementById("pushup")
    .checked;
  document.getElementById("pushupBtn").classList.toggle("workoutButtonToggled");
}

function pushupRClick() {
  document.getElementById("pushupR").checked = !document.getElementById(
    "pushupR"
  ).checked;
  document
    .getElementById("pushupRBtn")
    .classList.toggle("workoutButtonToggled");
}

function sidePlankClick() {
  document.getElementById("sidePlank").checked = !document.getElementById(
    "sidePlank"
  ).checked;
  document
    .getElementById("sidePlankBtn")
    .classList.toggle("workoutButtonToggled");
}

function plankClick() {
  document.getElementById("plank").checked = !document.getElementById("plank")
    .checked;
  document.getElementById("plankBtn").classList.toggle("workoutButtonToggled");
}

function crunchClick() {
  document.getElementById("crunch").checked = !document.getElementById("crunch")
    .checked;
  document.getElementById("crunchBtn").classList.toggle("workoutButtonToggled");
}

function squatClick() {
  document.getElementById("squat").checked = !document.getElementById("squat")
    .checked;
  document.getElementById("squatBtn").classList.toggle("workoutButtonToggled");
}

function stepClick() {
  document.getElementById("step-up").checked = !document.getElementById(
    "step-up"
  ).checked;
  document.getElementById("stepBtn").classList.toggle("workoutButtonToggled");
}

function runningClick() {
  document.getElementById("running").checked = !document.getElementById(
    "running"
  ).checked;
  document
    .getElementById("runningBtn")
    .classList.toggle("workoutButtonToggled");
}

function lungeClick() {
  document.getElementById("lunge").checked = !document.getElementById("lunge")
    .checked;
  document.getElementById("lungeBtn").classList.toggle("workoutButtonToggled");
}

function jacksClick() {
  document.getElementById("jacks").checked = !document.getElementById("jacks")
    .checked;
  document.getElementById("jacksBtn").classList.toggle("workoutButtonToggled");
}

function sitClick() {
  document.getElementById("sit").checked = !document.getElementById("sit")
    .checked;
  document.getElementById("sitBtn").classList.toggle("workoutButtonToggled");
}

function tricepsDipClick() {
  document.getElementById("tricepsdip").checked = !document.getElementById(
    "tricepsdip"
  ).checked;
  document
    .getElementById("tricepsdipBtn")
    .classList.toggle("workoutButtonToggled");
}


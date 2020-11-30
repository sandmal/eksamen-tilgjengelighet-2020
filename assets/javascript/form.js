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
    document.querySelector("#arms>span").classList.toggle("hide");
}

function legsClick() {
    document.getElementById("legs-checkbox").checked = !document.getElementById(
        "legs-checkbox"
    ).checked;
    document.getElementById("legs").classList.toggle("workoutButtonToggled");
    document.querySelector("#legs>span").classList.toggle("hide");
}

function chestClick() {
    document.getElementById("chest-checkbox").checked = !document.getElementById(
        "chest-checkbox"
    ).checked;
    document.getElementById("chest").classList.toggle("workoutButtonToggled");
    document.querySelector("#chest>span").classList.toggle("hide");
}

function shoulderClick() {
    document.getElementById(
        "shoulders-checkbox"
    ).checked = !document.getElementById("shoulders-checkbox").checked;
    document.getElementById("shoulders").classList.toggle("workoutButtonToggled");
    document.querySelector("#shoulders>span").classList.toggle("hide");
}

function absClick() {
    document.getElementById("abs-checkbox").checked = !document.getElementById(
        "abs-checkbox"
    ).checked;
    document.getElementById("abs").classList.toggle("workoutButtonToggled");
    document.querySelector("#abs>span").classList.toggle("hide");
}

function buttClick() {
    document.getElementById("butt-checkbox").checked = !document.getElementById(
        "butt-checkbox"
    ).checked;
    document.getElementById("butt").classList.toggle("workoutButtonToggled");
    document.querySelector("#butt>span").classList.toggle("hide");
}

function thighsClick() {
    document.getElementById("thighs-checkbox").checked = !document.getElementById(
        "thighs-checkbox"
    ).checked;
    document.getElementById("thighs").classList.toggle("workoutButtonToggled");
    document.querySelector("#thighs>span").classList.toggle("hide");
}

function quadsClick() {
    document.getElementById("quads-checkbox").checked = !document.getElementById(
        "quads-checkbox"
    ).checked;
    document.getElementById("quads").classList.toggle("workoutButtonToggled");
    document.querySelector("#quads>span").classList.toggle("hide");
}

function glutesClick() {
    document.getElementById("glutes-checkbox").checked = !document.getElementById(
        "glutes-checkbox"
    ).checked;
    document.getElementById("glutes").classList.toggle("workoutButtonToggled");
    document.querySelector("#glutes>span").classList.toggle("hide");
}

function calvesClick() {
    document.getElementById("calves-checkbox").checked = !document.getElementById(
        "calves-checkbox"
    ).checked;
    document.getElementById("calves").classList.toggle("workoutButtonToggled");
    document.querySelector("#calves>span").classList.toggle("hide");
}

function tricepsClick() {
    document.getElementById(
        "triceps-checkbox"
    ).checked = !document.getElementById("triceps-checkbox").checked;
    document.getElementById("triceps").classList.toggle("workoutButtonToggled");
    document.querySelector("#triceps>span").classList.toggle("hide");
}

// End functions for body parts

function pushupClick() {
    document.getElementById("pushup").checked = !document.getElementById("pushup")
        .checked;
    document.getElementById("pushupBtn").classList.toggle("workoutButtonToggled");
    document.querySelector("#pushupBtn>span").classList.toggle("hide");
}

function pushupRClick() {
    document.getElementById("pushupR").checked = !document.getElementById(
        "pushupR"
    ).checked;
    document
        .getElementById("pushupRBtn")
        .classList.toggle("workoutButtonToggled");
    document.querySelector("#pushupRBtn>span").classList.toggle("hide");
}

function sidePlankClick() {
    document.getElementById("sidePlank").checked = !document.getElementById(
        "sidePlank"
    ).checked;
    document
        .getElementById("sidePlankBtn")
        .classList.toggle("workoutButtonToggled");
    document.querySelector("#sidePlankBtn>span").classList.toggle("hide");
}

function plankClick() {
    document.getElementById("plank").checked = !document.getElementById("plank")
        .checked;
    document.getElementById("plankBtn").classList.toggle("workoutButtonToggled");
    document.querySelector("#plankBtn>span").classList.toggle("hide");
}

function crunchClick() {
    document.getElementById("crunch").checked = !document.getElementById("crunch")
        .checked;
    document.getElementById("crunchBtn").classList.toggle("workoutButtonToggled");
    document.querySelector("#crunchBtn>span").classList.toggle("hide");
}

function squatClick() {
    document.getElementById("squat").checked = !document.getElementById("squat")
        .checked;
    document.getElementById("squatBtn").classList.toggle("workoutButtonToggled");
    document.querySelector("#squatBtn>span").classList.toggle("hide");
}

function stepClick() {
    document.getElementById("step-up").checked = !document.getElementById(
        "step-up"
    ).checked;
    document.getElementById("stepBtn").classList.toggle("workoutButtonToggled");
    document.querySelector("#stepBtn>span").classList.toggle("hide");
}

function runningClick() {
    document.getElementById("running").checked = !document.getElementById(
        "running"
    ).checked;
    document
        .getElementById("runningBtn")
        .classList.toggle("workoutButtonToggled");
    document.querySelector("#runningBtn>span").classList.toggle("hide");
}

function lungeClick() {
    document.getElementById("lunge").checked = !document.getElementById("lunge")
        .checked;
    document.getElementById("lungeBtn").classList.toggle("workoutButtonToggled");
    document.querySelector("#lungeBtn>span").classList.toggle("hide");
}

function jacksClick() {
    document.getElementById("jacks").checked = !document.getElementById("jacks")
        .checked;
    document.getElementById("jacksBtn").classList.toggle("workoutButtonToggled");
    document.querySelector("#jacksBtn>span").classList.toggle("hide");
}

function sitClick() {
    document.getElementById("sit").checked = !document.getElementById("sit")
        .checked;
    document.getElementById("sitBtn").classList.toggle("workoutButtonToggled");
    document.querySelector("#sitBtn>span").classList.toggle("hide");
}

function tricepsDipClick() {
    document.getElementById("tricepsdip").checked = !document.getElementById("tricepsdip")
        .checked;
    document.getElementById("tricepsdipBtn").classList.toggle("workoutButtonToggled");
    document.querySelector("#tricepsdipBtn>span").classList.toggle("hide");
}
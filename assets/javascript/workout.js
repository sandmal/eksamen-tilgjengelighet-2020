// const formDiv = document.querySelector(".selectWorkout");
// const button = document.querySelector("#btn");
// const arms = document.querySelectorAll("[data-class='arms']");
// const jump = document.querySelectorAll("[data-class='jump']");

// let select = document.querySelector("#muscleGroup");

// console.log(select.value);
// console.log(jump);

// button.addEventListener("click", function () {
//   if (select.value == "arms") {
//     arms.forEach((item) => {
//       item.classList.toggle("active");
//     });
//   } else if (select.value == "jump") {
//     jump.forEach((item) => {
//       item.classList.toggle("active");
//     });
//   }
// });

const modal = document.getElementById("selectWorkoutModal");
const btn = document.querySelector("#workout>button");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

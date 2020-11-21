// const formDiv = document.querySelector(".selectWorkout");
// const button = document.querySelector("#btn");
const arms = document.querySelectorAll("[data-class='arms']");
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
const close = document.getElementsByClassName("close")[0];
const closeBtn = document.getElementsByClassName("closeBtn")[0];

const form = document.querySelector("form");
// const optionValue = document.querySelector("input");
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
  // console.log(optionValue.value);
  arms.forEach((item) => {
    console.log(item);
  });
  event.preventDefault();
});

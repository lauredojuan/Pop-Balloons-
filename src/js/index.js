import "../assets/img/4geeks.ico";
import "../style/index.scss";

let color = ["red", "pink", "blue", "green", "yellow", "tomato", "purple"];
let parent = document.querySelector(".container");
let counter = 0;

function randomColor() {
  return color[Math.floor(Math.random() * color.length)];
}

function pop(event) {
  let elementId = event.target.id;
  //   console.log(elementId);
  let balloon = document.getElementById(elementId);
  // balloon.style.background = "white";
  balloon.classList.add("away");
  counter -= 1;
  if (counter == 0) {
    location.reload();
  }
}

window.onload = function() {
  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    row.classList.add("classRow");
    parent.appendChild(row);

    for (let j = 0; j < 5; j++) {
      counter += 1;
      let cell = document.createElement("div");
      cell.classList.add("classCell");
      cell.setAttribute("id", j.toString() + i.toString());
      cell.style.background = randomColor();
      //   cell.classList.add(ramdomColor());
      cell.addEventListener("click", pop);
      row.appendChild(cell);
    }
  }
};

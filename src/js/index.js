import "../assets/img/4geeks.ico";
import "../style/index.scss";

let color = ["red", "pink", "blue", "green", "yellow", "tomato", "purple"];
let parent = document.querySelector(".container");

function ramdomColor(){
    return color.[Math.floor(Math.random() * color.length)];
}

let popFunction = event => {
  console.log(event.target.id);
};

window.onload = function() {
  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    row.classList.add("classRow");

    parent.appendChild(row);
    for (let j = 0; j < 5; j++) {
      let cell = document.createElement("div");
      cell.classList.add("classCell");
      cell.setAttribute("id", j + i);
      cell.style.background = ramdomColor();
      //   cell.classList.add(ramdomColor());
      cell.addEventListener("click", popFunction);
      row.appendChild(cell);
    }
  }
};

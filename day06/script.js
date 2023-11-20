const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function next() {
  if (index <= 0) {
    index = index - 1;
    document.querySelector(".container").style.transform = `translate(${
      index * 100
    }vw)`;
    prevBtn.removeAttribute("disabled");
  }
  if (index == -2) {
    nextBtn.setAttribute("disabled", "true");
  }
}

function prev() {
  if (index < 0) {
    index = index + 1;
    document.querySelector(".container").style.transform = `translate(${
      index * 100
    }vw)`;
  }
  nextBtn.removeAttribute("disabled");
  if (index == 0) {
    prevBtn.setAttribute("disabled", "true");
  }
}

function init() {
  prevBtn.setAttribute("disabled", "true");
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
}

init();

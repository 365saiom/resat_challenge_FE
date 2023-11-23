const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function next() {
  if (index < 3) {
    index = index + 1;
    document.querySelector(".container").style.transform = `translate(${
      index * -22.1
    }vw)`;
    console.log(index);
  } else {
    index = index - 3;
    document.querySelector(".container").style.transform = `translate(${
      index * 22.1
    }vw)`;
    console.log(index);
  }
}

function prev() {
  if (index > 0) {
    index = index - 1;
    document.querySelector(".container").style.transform = `translate(${
      index * -22.1
    }vw)`;
  } else {
    index = index + 3;
    document.querySelector(".container").style.transform = `translate(${
      index * -22.1
    }vw)`;
  }
}

// 자동 슬라이드 구현
setInterval(next, 3000);

function init() {
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
}

init();

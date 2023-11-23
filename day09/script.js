console.log("hello!");

const header = document.querySelector("header");
const menuBtn = document.querySelector(".fa-bars");
const modalMenu = document.querySelector(".modal-menu");
const close = document.querySelector(".fa-xmark");

close.remove();

menuBtn.addEventListener("click", () => {
  //   console.log("menuBtn");
  modalMenu.style.right = "0";
  menuBtn.remove();
  header.append(close);
});

close.addEventListener("click", () => {
  modalMenu.style.right = "-180px";
  console.log("close");
  close.remove();
  header.append(menuBtn);
});

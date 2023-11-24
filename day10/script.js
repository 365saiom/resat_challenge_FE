console.log("here!!");

const loginForm = document.getElementById("login_form");
const userIdInput = document.getElementById("userId");
const userPwInput = document.getElementById("userPw");

userIdInput.addEventListener("keypress", (e) => {
  if (e.target.value.length < 3) {
    document.getElementById("email_error").style.display = "block";
  } else if (e.target.value.length >= 3) {
    document.getElementById("email_error").style.display = "none";
  }
});

userPwInput.addEventListener("keypress", (e) => {
  if (e.target.value.length < 3) {
    document.getElementById("pass_error").style.display = "block";
  } else if (e.target.value.length >= 3) {
    document.getElementById("pass_error").style.display = "none";
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});

function login() {
  const userId = userIdInput.value;
  const userPw = userPwInput.value;
  if (userId == "admin" && userPw == "admin") {
    showToast("로그인이 되었습니다.");
  } else {
    showToast("ID 혹은 PW가 잘못되었습니다.");
  }
}

function showToast(text) {
  const toast = document.querySelector(".toast");
  const toastText = toast.querySelector("p");
  console.log(toast.innerHTML);
  toastText.innerHTML = text;
  toast.style.top = "300px";
}

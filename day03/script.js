const input = document.getElementById("input");
const form = document.querySelector("form");
const todoList = document.getElementById("todoList");

// inputBox.addEventListener("input")

// addTodo.addEventListener("click", (e) => {
//   console.log(e);
// });

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos() {
  // object형태를 string으로 바꿔서 데이터 값 추가해준다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const newId = toDos.length + 1;
  button.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(button);
  li.id = newId;
  todoList.appendChild(li);
  const newToDo = {
    text: text,
    id: newId,
  };
  toDos.push(newToDo);
  saveToDos();
  //   console.log(toDos);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintTodo(currentValue);
  input.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
  }
}

function init() {
  loadToDos();
  form.addEventListener("submit", handleSubmit);
}

init();

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

window.onload = () => {
  loadTasks();
};

function addTask() {
  const taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("checked");
    saveTasks();
  });

  const span = document.createElement("span");
  span.textContent = "❌";
  span.addEventListener("click", function (e) {
    e.stopPropagation(); 
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  listContainer.appendChild(li);
  inputBox.value = "";
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadTasks() {
  listContainer.innerHTML = localStorage.getItem("tasks") || "";

  document.querySelectorAll("ul li").forEach((li) => {
    li.addEventListener("click", function () {
      li.classList.toggle("checked");
      saveTasks();
    });

    li.querySelector("span")?.addEventListener("click", function (e) {
      e.stopPropagation();
      li.remove();
      saveTasks();
    });
  });
}

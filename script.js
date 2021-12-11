var todoInput = document.getElementById("inputTodo");
var btn = document.querySelector(".btn-submit");
var tabel = document.querySelector(".todo-list");
var btnHapus = `<div class="suksesImg"></div>
                <div>
                  <button class="hapus" onclick="hapus()">Delete</button>
                  <input type="checkbox" onclick="success(this)" id="successCheck">      
                </div>`;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const li = document.createElement("li");
  var alert = document.querySelector(".alert");

  if (todoInput.value === "") {
    alert.classList.add("active");
  } else {
    alert.classList.remove("active");
    li.classList.add("todo");
    li.innerHTML = `${handleChange()}`;
    tabel.appendChild(li);
    li.innerHTML += btnHapus;
    todoInput.value = "";
    check((cheklist.checked = false));
  }
});

todoInput.addEventListener("click", () => {
  var alert = document.querySelector(".alert");
  alert.classList.remove("active");
});

function handleChange() {
  var inputValue = document.getElementById("inputTodo");
  return inputValue.value;
}

function hapus() {
  var hapus = document.querySelector(".hapus");
  hapus.parentElement.parentElement.remove();
}

function check(cheklist) {
  var btnSubmit = document.querySelector(".btn-submit");
  var icon = document.querySelector(".fa-times");
  var alert = document.querySelector(".alert");

  if (cheklist.checked) {
    todoInput.style.width = "40vw";
    todoInput.style.paddingLeft = "10px";
    icon.style.opacity = 1;
    btnSubmit.style.left = "45vw";
    btnSubmit.style.transform = "rotate(360deg)";
  } else {
    todoInput.style.width = 0;
    icon.style.opacity = 0;
    todoInput.style.paddingLeft = "0px";
    btnSubmit.style.left = 0;
    btnSubmit.style.transform = "rotate(-360deg)";
    alert.classList.remove("active");
  }
}

var liSelect = document.querySelectorAll(".todo");

function success(e) {
  if (e.checked) {
    e.parentElement.parentElement.style.backgroundColor = "skyblue";
  } else {
    e.parentElement.parentElement.style.backgroundColor = "coral";
  }
}

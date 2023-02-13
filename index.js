function saveList() {
  document.getElementById("error").innerHTML = "";
  let name = document.getElementById("name").value;

  if (name == "") {
    let error = document.getElementById("error");
    error.innerHTML = "This is blank";
  } else {
    let list = document.getElementById("list");
    let button = document.createElement("button");
    let updateList = document.createElement("li");

    updateList.textContent = name;
    button.textContent = "Delete";

    list.appendChild(updateList);
    list.appendChild(button);

    button.addEventListener("click", deleteFun);
    function deleteFun() {
      updateList.remove();
      button.remove();
    }

    document.getElementById("name").value = "";
  }
}

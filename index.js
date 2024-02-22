const handleFormSubmit = (event) => {
  event.preventDefault();

  const inputElement = document.getElementById("task-input");
  const inputValue = inputElement.value.trim();

  if (!inputValue) {
    alert("入力してください。");
    return;
  }

  const todosElement = document.getElementById("todos");
  const todoListItem = createTodoListItem(inputValue);
  todosElement.appendChild(todoListItem);

  inputElement.value = "";
};

const createTodoListItem = (todoContent) => {
  const todoListItem = document.createElement("li");

  const todoDone = document.createElement("input");
  todoDone.type = "checkbox";
  todoDone.onchange = () => {
    todoListItem.classList.toggle("checked");
  };

  const todoLabel = document.createElement("label");
  todoLabel.innerText = todoContent;

  const removeTodoButton = document.createElement("button");
  removeTodoButton.innerText = "削除";
  removeTodoButton.onclick = () => {
    todoListItem.remove();
  };

  todoListItem.append(todoDone, todoLabel, removeTodoButton);
  return todoListItem;
};

document.getElementById("myForm").addEventListener("submit", handleFormSubmit);

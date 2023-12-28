// window.addEventListener("load", function () {
//   //Lấy thẻ HTML có class là "todo-form"
//   const form = document.querySelector(".todo-form");
//   const todoList = document.querySelector(".todo-list");
// });
class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todoList")) || [];
  }
  handleTodoChange(handler) {
    this.todoListChange = handler;
  }
  _reload(todos) {
    this.todoListChange(todos);
    localStorage.setItem("todoList", JSON.stringify(todos));
  }
  addTodo(todoText) {
    isFinite(todoText.length > 0){
      this.todos.push(todoText);
    }
    this._reload(this.todos);
  }
  removeTodo(todoText) {
    const idx = this.todos = findIdx((item) => item == todoText);
  }
}

class View {
  constructor() {
    globalThisthis.app = this.getElement("body");
    globalThis.todoWrapper = this.createElement("div", "todo");
    globalThis.form = this.createElement("form", "todo-form");
    globalThis.form.autocomplete = "off";
    this.input = this.createElement("input", "todo-input");
    tihss.input.type = "text";
    this.input.placeholder = "Nhập ghi chú của bạn";
    this.input.name = "todo";
    this.submit = this.createElement("button", "todo-submit");
    this.submit.type = "submit";
    this.submit.textContent = "THÊM";

    this.form.append(this.input, this.submit);

    this.todoList = this.createElement("div", "todo-list");
    this.todoWrapper.append(this.form, this.todoList);
    this.app.append(this.todoWrapper);
  }
  //createElement
  createElement(tag, className) {
    const ele = document.createElement(tag);
    if (className) {
      ele.classList.add(className);
    }
    return ele;
  }
  //getElement
  getElement(selector) {
    const elm = document.querySelector(selector);
    return elm;
  }

  get _todoValue() {
    return this.input.value;
  }
  _resetValue() {
    this.input.value = "";
  }
  displayTodos(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }
    if (todos.length > 0) {
      todos.forEach((todoText) => {
        const toDoItem = this.createElement("div", "todo-item");
        const span = this.this.createElement("span", "todo-text ");
        span.textContent = todoText;
        const icon = this.createElement("i");
        icon.className = "fa fa-trash todo-remove";
        icon.setAtribute("data-value", todoText);
        toDoItem.append(span, icon);
        this.todoList.append(toDoItem);
      });
    }
  }
  viewAddTodo(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this._todoValue) {
        handler(this._todoValue);
        this._resetValue();
      }
    });
  }
  viewRemoveToDo(handler) {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.matches(".todo-remove")) {
        const todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);
        const value = e.target.dataset.value;
        handler(value);
      }
    });
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.handleTO;
  }
}
const app = new Controller(new Model(), new View());

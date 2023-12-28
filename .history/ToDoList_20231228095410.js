window.addEventListener("load", function () {
  //Lấy thẻ HTML có class là "todo-form"
  const form = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
});
class Model {
  constructor() {}
}
class View {
  constructor() {}
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}
const app = new Controller();

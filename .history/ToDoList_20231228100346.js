// window.addEventListener("load", function () {
//   //Lấy thẻ HTML có class là "todo-form"
//   const form = document.querySelector(".todo-form");
//   const todoList = document.querySelector(".todo-list");
// });
class Model {
  constructor() {}
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
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}
const app = new Controller(new Model(), new View());

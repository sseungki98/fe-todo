const { todos } = require("./todos");

class Validation {
  static checkIdExist(id) {
    const id_list = todos.filter(value => value.id == id);
    if (id_list.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  static checkStatus(status) {
    if (status == "todo") {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Validation;

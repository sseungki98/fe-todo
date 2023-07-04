const { todos } = require("./todos");
const { NO_ID_EXIST_ERROR, NOT_TODO_STATUS_ERROR, EXIST_NAME_ERROR } = require("./errors");

class Validation {
  static checkIdExist(id) {
    const id_list = todos.filter(value => value.id === id);
    if (id_list.length === 0) {
      return true;
    }

    console.log(NO_ID_EXIST_ERROR);
    return false;
  }

  static checkTodoStatus(status) {
    if (status === "todo") {
      return true;
    }
    console.log(NOT_TODO_STATUS_ERROR);
    return false;
  }

  static checkNameExist(name) {
    let isNameExistFlag = true;
    todos.some(value => {
      if (value.name === name) {
        console.log(EXIST_NAME_ERROR);
        isNameExistFlag = false;
        return true;
      }
    });
    if (isNameExistFlag) {
      return true;
    }

    return false;
  }
}

module.exports = Validation;

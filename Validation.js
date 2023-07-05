const { todos } = require("./todos");
const { NO_ID_EXIST_ERROR, NOT_TODO_STATUS_ERROR, EXIST_NAME_ERROR, NOT_JSON_ERROR, NOT_IN_STATUS_ERROR } = require("./errors");

class Validation {
  // id가 todo list에 존재하는지 판별
  static checkIdExist(id) {
    const id_list = todos.filter(value => value.id === id);
    if (id_list.length === 0) {
      return true;
    }

    console.log(NO_ID_EXIST_ERROR);
    return false;
  }

  // status가 todo인지 판별
  static checkTodoStatus(status) {
    if (status === "todo") {
      return true;
    }
    console.log(NOT_TODO_STATUS_ERROR);
    return false;
  }

  // name이 todo list에 존재하는지 판별
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

  // 입력된 Tags가 JSON 타입인지 확인
  static isJSON(tags) {
    try {
      JSON.parse(tags);
    } catch (e) {
      console.log(NOT_JSON_ERROR);
      return false;
    }
    return true;
  }

  static isValidStatus(status) {
    if (status === "todo" || status === "doing" || status === "done") {
      return true;
    }
    console.log(NOT_IN_STATUS_ERROR);
    return false;
  }
}

module.exports = Validation;

const { todos } = require("./todos");
const {
  NO_ID_EXIST_ERROR,
  NOT_TODO_STATUS_ERROR,
  EXIST_NAME_ERROR,
  NOT_JSON_ERROR,
  NOT_IN_STATUS_ERROR,
  NOT_INTEGER_ERROR,
  NOT_VALID_OPERATION,
} = require("./errors");

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

  // status가 todo, doing, done 중 하나인지 판단
  static isValidStatus(status) {
    if (status === "todo" || status === "doing" || status === "done") {
      return true;
    }
    console.log(NOT_IN_STATUS_ERROR);
    return false;
  }

  // id값이 정수인지 판단
  static isInteger(id) {
    if (Number.isInteger(id)) {
      return true;
    }

    console.log(NOT_INTEGER_ERROR);
    return false;
  }

  // 명령어 별 파라미터 개수 판단
  static checkInputLength(length, num) {
    if (length === num) {
      return true;
    }

    console.log(NOT_VALID_OPERATION);
    return false;
  }

  // 빈 파라미터 값에 대한 판단
  static checkParameterLength(input) {
    let equalZeroFlag = false;
    input.forEach(value => {
      if (value.length === 0) {
        equalZeroFlag = true;
      }
    });

    return !equalZeroFlag;
  }

  // 유효한 명령어인지 판단(input 길이 and 파라미터 값 > 0)
  static checkValidOperationLength(input) {
    const inputLength = input.length;
    switch (input[0]) {
      case "show":
        return this.checkInputLength(inputLength, 2) && this.checkParameterLength(input);
      case "add":
        return this.checkInputLength(inputLength, 3) && this.checkParameterLength(input);
      case "delete":
        return this.checkInputLength(inputLength, 2) && this.checkParameterLength(input);
      case "update":
        return this.checkInputLength(inputLength, 3) && this.checkParameterLength(input);
    }
  }
}

module.exports = Validation;

const NO_ID_EXIST_ERROR = "해당 ID가 존재하지 않습니다.";
const NOT_TODO_STATUS_ERROR = "해당 ID에 해당하는 Status가 'todo'가 아닙니다.";
const EXIST_NAME_ERROR = "TODO에 이미 존재하는 이름입니다.";
const NOT_IN_STATUS_ERROR = "todo, doing, done 중 하나를 입력해주세요.";
const NOT_JSON_ERROR = '입력된 Tags가 JSON 형식이 아닙니다. ["favorite","hobby"] 형식으로 입력해주세요.';
const NOT_INTEGER_ERROR = "ID값에는 정수가 입력되어야 합니다.";
const NOT_VALID_OPERATION = "유효한 명령어 형식이 아닙니다.";

module.exports = {
  NO_ID_EXIST_ERROR,
  NOT_TODO_STATUS_ERROR,
  EXIST_NAME_ERROR,
  NOT_IN_STATUS_ERROR,
  NOT_JSON_ERROR,
  NOT_INTEGER_ERROR,
  NOT_VALID_OPERATION,
};

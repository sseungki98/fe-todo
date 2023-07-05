const { todos } = require("./todos");
const Validation = require("./validation");
const { NOT_IN_STATUS_ERROR } = require("./errors");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 유효하지 않은 명령어 입력 시 출력
function showHelpMessage() {
  console.log("올바른 명령어를 입력해주세요.");
  console.log("-------------------------------------------------");
  console.log("show$all => 모든 상태별 개수 확인");
  console.log("show$[todo or doing or done] => 상태별 목록 확인");
  console.log("add$[name]$[[tags]] => todo 리스트에 추가");
  console.log("delete$[id] => todo에 존재하는 id 삭제");
  console.log("update$[id]$[status] => id에 해당하는 일의 상태 업데이트");
  console.log("exit => 끝내기");
  console.log("-------------------------------------------------");
}

let recursiveAsyncReadLine = function () {
  rl.question("명령어를 입력해주세요 > ", function (answer) {
    // Input 입력받기
    input = answer.split("$");
    if (input[0] == "exit") {
      return rl.close();
    } else {
      switch (
        input[0] // 케이스 구분
      ) {
        case "show":
          if (input[1] == "all") {
            showAll();
          } else {
            showStatus(input[1]);
          }
          break;
        case "add":
          addTodo(input[1], input[2]);
          break;
        case "delete":
          deleteTodo(parseInt(input[1]));
          break;
        case "update":
          updateTodo(parseInt(input[1]), input[2]);
          break;
        default:
          showHelpMessage();
          break;
      }
      recursiveAsyncReadLine();
    }
  });
};

recursiveAsyncReadLine();

// 개수 카운트 함수
function countStatus() {
  count = { todo: 0, doing: 0, done: 0 };
  todos.forEach(item => {
    switch (item.status) {
      case "todo":
        count["todo"]++;
        break;
      case "doing":
        count["doing"]++;
        break;
      case "done":
        count["done"]++;
        break;
      default:
        console.log(NOT_IN_STATUS_ERROR);
    }
  });

  return count;
}

// show$all(전체 상태별 개수 출력)
function showAll() {
  count = countStatus();
  console.log(`현재상태 : todo: ${count["todo"]}개, doing: ${count["doing"]}개, done: ${count["done"]}개`);
}

//show$['status'](상태별 리스트 내역 출력)
function showStatus(status) {
  const count = countStatus();
  const filtered_todos_array = todos.filter(value => value.status == status);
  let name_id_list = "";
  filtered_todos_array.forEach(value => {
    name_id_list += `'${value.name}, ${value.id.toString()}번'`;
  });

  console.log(`${status} 리스트 :  총${count[status]}건 : ` + `${name_id_list}`);
}

// 1에서 10000까지 랜덤 값 반환
function getRandomID() {
  return Math.floor(Math.random() * 10000) + 1;
}

//add$['name']$[['tags']](todo 리스트에 값 추가)
function addTodo(name, tags) {
  if (!Validation.checkNameExist(name)) {
    return;
  }
  let id = getRandomID();
  while (!Validation.checkIdExist(id)) {
    id = getRandomID();
  }
  if (!Validation.isJSON(tags)) {
    return;
  }
  todos.push({
    name: name,
    tags: tags,
    status: "todo",
    id: id,
  });
  console.log(`${name} 1개가 추가됐습니다. (id: ${id})`);
  showAll();
}

//todo item 삭제
function deleteItem(value, index) {
  console.log(`${value.name}가 목록에서 삭제되었습니다.`);
  todos.splice(index, index + 1);
  showAll();
}

//delete$['id']
function deleteTodo(id) {
  todos.forEach((value, index) => {
    if (value["id"] === id && Validation.checkTodoStatus(value.status)) {
      deleteItem(value, index);
    }
  });
}

// todo item의 status값 변경
function updateItem(value, status) {
  console.log(`${value.name}가 ${status}로 변경됐습니다.`);
  value.status = status;
  showAll();
}

//update$['id']$['status']
function updateTodo(id, status) {
  todos.forEach(value => {
    if (value["id"] == id && value["status"] != status) {
      updateItem(value, status);
    }
  });
}

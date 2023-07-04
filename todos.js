//todos.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [
  {
    name: "자바스크립트 공부하기",
    tags: ["programming", "javascript"],
    status: "todo",
    id: 12123123,
  },
  {
    name: " 그림 그리기",
    tags: ["picture", "favorite"],
    status: "doing",
    id: 312323,
  },
];

function show_all() {
  // show$all
  count = count_status();
  console.log(`현재상태 : todo: ${count["todo"]}개, doing: ${count["doing"]}개, done: ${count["done"]}개`);
}

function count_status() {
  // 개수 카운트 함수
  count = { todo: 0, doing: 0, done: 0 };
  todos.map(item => {
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
        console.log("wrong input");
    }
  });

  return count;
}

function show_status(status) {
  //show$['status']
  const count = count_status();
  const list = todos.filter(value => value.status == status);
  let name_id_list = "";
  list.map(value => {
    name_id_list += `'${value.name}, ${value.id.toString()}번'`;
  });

  console.log(`${status} 리스트 :  총${count[status]}건 : ` + `${name_id_list}`);
}

function add(name, tags) {
  const id = Math.floor(Math.random() * 10000);
  const new_todo = {
    name: name,
    tags: tags,
    status: "todo",
    id: id,
  };
  todos.push(new_todo);
  console.log(`${name} 1개가 추가됐습니다. (id: ${id})`);
  show_all();
}

function delete_todo(id) {
  todos.forEach((value, index) => {
    if (value["id"] == id) {
      console.log(`${value.name}가 목록에서 삭제되었습니다.`);
      todos.splice(index, index + 1);
      show_all();

      return false;
    }
  });
}

function update(id, status) {
  todos.forEach((value, index) => {
    if (value["id"] == id && value["status"] != status) {
      console.log(`${value.name}가 ${status}로 변경됐습니다.`);
      value.status = status;
      show_all();

      return false;
    }
  });
}

let input = [];

rl.on("line", line => {
  input = line.split("$");
  switch (input[0]) {
    case "show":
      if (input[1] == "all") {
        show_all();
      } else {
        show_status(input[1]);
      }
      break;
    case "add":
      let tags = input[2]
        .substring(1, input[2].length - 1)
        .replace(/"/g, "")
        .split(",");
      add(input[1], tags);
    case "delete":
      delete_todo(parseInt(input[1]));
    case "update":
      update(parseInt(input[1]), input[2]);
  }

  rl.close();
});

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
  console.log(`현재상태 : todo: ${count[0]}개, doing: ${count[1]}개, done: ${count[2]}개`);
}

function count_status() {
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
  const count = count_status();
  const list = todos.filter(value => value.status == status);
  let name_id_list = "";
  list.map(value => {
    name_id_list += `'${value.name}, ${value.id.toString()}번'`;
  });

  console.log(`${status}리스트 :  총${count[status]}건 : ` + `${name_id_list}`);
}

let input = [];

rl.on("line", line => {
  input = line.split("$");
  //   console.log(count_status());
  show_status("todo");
  rl.close();
});

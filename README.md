# fe-todo

## 📝 Console TODO List

- 페어 프로그래밍으로 진행한다.
- node.js를 활용하여 실행한다.

## 🛠 Pair Programming Rule

- 15분씩 돌아가며 코딩한다. (Navigator <-> Driver)
- Navigator는 Driver에게 프로그래밍의 방향을 설명하고, Driver는 이를 코딩한다.
- 본인이 맡은 부분이 끝날때까지 코딩한다.

## ⌨️ 입력 방식

▪︎ show$all ➔ 모든 상태별 개수 확인

```
입력 > show$all
출력 > 현재상태 : todo: 1개, doing: 1개, done: 0개
```

▪︎ show$[todo or doing or done] ➔ 상태별 목록 확인

```
입력 > show$todo
출력 > todo리스트 :  총2건 : ' 자바스크립트 공부하기, 1822번' , 'iOS공부하기, 9933번'
```

▪︎ add$[name]$[[tags]] ➔ todo 리스트에 추가

```
입력 > add$study-javascript$["favorite"]
출력 > study-javascript 1개가 추가됐습니다.(id : 7788)
      현재상태 :  todo: 4개, doing:2개, done:4개
```

▪︎ delete$[id] ➔ todo에 존재하는 id 삭제

```
입력 > delete$7788
출력 > study-javascript가 todo목록에서 삭제됐습니다.
      현재상태 :  todo: 3개, doing:2개, done:4개
```

▪︎ update$[id]$[status] ➔ id에 해당하는 일의 상태 업데이트

```
입력 > update$9933$doing
출력 > iOS공부하기가 doing으로 상태가 변경됐습니다.
      현재상태 :  todo: 2개, doing:3개, done:4개
```

▪︎ exit ➔ 끝내기

## 🗂 파일 구조 설계

### todos.js

- todo 객체 배열 모듈

### grade.js

- show, add, delete, update 관련 함수 구현
- 콘솔에서 input을 받고, input에 맞는 함수 호출

### errors.js

- 에러 메세지를 모아둔 모듈

### validation.js

- 예외 처리 관련 함수 구현
- checkIdExist( ), checkTodoStatus( ), checkNameExist( )

## 🔎 명령어 상세 설명

### 1. show

- `showAll( )` : todos의 각 상태 마다의 개수를 계산 후 출력
- `showStatus(status)` : 특정 status인 객체의 총 개수, 이름과 ID를 출력

### 2. add

- `getRandomID( )` : 1~10000 사이의 난수 생성 후 반환
- `addTodo(name, tags)` : name과 tags, 랜덤으로 생성된 ID를 기반으로, status가 'todo'인 객체를 todos에 추가

### 3. delete

- `deleteItem(value, index)` : todos의 특정 객체 삭제 후 콘솔 메세지 출력
- `deleteTodo(id)` : ID 검증 후, 있는 ID라면 그 객체를 삭제

### 4. update

- `updateItem(value, status)` : 객체의 status를 입력받은 status로 변경 후 콘솔 메세지 출력
- `updateTodo(id, status)` : ID 검증 후, 기존의 status와 바꾸고자 하는 status가 다른 경우에만 status 업데이트

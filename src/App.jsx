import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import React, { useState } from "react";

function User(props) {
  return <div className="square-style">{props.user.todo}</div>;
}

const App = () => {
  const [users, setUsers] = useState([{ id: 1, todo: "react를 배워봅시다." }]);
  const [todo, setTodo] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: users.length + 1,
      todo: todo,
    };
    setUsers([...users, newTodo]);
  };
  return (
    <div>
      <div className="inputbox">
        <input
          value={todo}
          placeholder="투두를 입력해주세요"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodoHandler}>추가하기</button>
      </div>
      <div className="inputbox">
        <h1>Todo List</h1>
      </div>
      <div className="app-style">
        {users.map((user) => {
          return <User user={user} key={user.id}></User>;
        })}
      </div>
    </div>
  );
};

export default App;

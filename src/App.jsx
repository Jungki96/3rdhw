import "./App.css"; // ๐ฅ ๋ฐ๋์ App.css ํ์ผ์ import ํด์ค์ผ ํฉ๋๋ค.
import React, { useState } from "react";

function User(props) {
  return <div className="square-style">{props.user.todo}</div>;
}

const App = () => {
  const [users, setUsers] = useState([{ id: 1, todo: "react๋ฅผ ๋ฐฐ์๋ด์๋ค." }]);
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
          placeholder="ํฌ๋๋ฅผ ์๋ ฅํด์ฃผ์ธ์"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodoHandler}>์ถ๊ฐํ๊ธฐ</button>
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

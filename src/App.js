import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import list from "./data";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [name, setName] = useState([]);
  const handleChange = (event) => {
    if (event.target.value === " ") {
    } else {
      setName(event.target.value);
    }
  };
  const [todoList, setTodoList] = useState(list);
  const submitEvent = (payload) => {
    setTodoList((todoList) => [
      ...todoList,
      { isComplete: true, name: payload }
    ]);
    setName("");
  };

  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader numTask={todoList.length} />
        <TodoList data={todoList} />
        <Form
          handleChange={(e) => handleChange(e)}
          submitEvent={() => submitEvent(name, todoList)}
        />
      </div>
      <Footer />
    </div>
  );
};

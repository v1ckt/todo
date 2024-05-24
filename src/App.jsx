import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDoForm from "./components/ToDoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [ToDos, setTodos] = useState([
    { id: 0, text: "Learn React", category: "Frontend", done: false },
    { id: 1, text: "Learn React Native", category: "Mobile", done: false },
    { id: 2, text: "Learn Node", category: "Backend", done: false },
  ]);

  const addToDo = (text, category) => {
    const newToDos = [
      ...ToDos,
      { id: Math.floor(Math.random() * 1000), text, category, done: false },
    ];
    setTodos(newToDos);
  };

  const removeToDo = (id) => {
    const newToDos = [...ToDos];
    const filteredToDos = newToDos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredToDos);
  };

  const toggleDone = (id) => {
    const newToDos = [...ToDos];
    newToDos.map((todo) => (todo.id === id ? (todo.done = !todo.done) : todo));
    setTodos(newToDos);
  };

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState({
    status: "All",
    category: "All",
  });

  return (
    <div className="app">
      <header>
        <h1 className="title">To Do List</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} />
      </header>
      <div className="todo-list">
        <ToDoForm addToDo={addToDo} />
        {ToDos.filter((todo) =>
          filter.status === "All"
            ? true
            : filter.status === "Done"
            ? todo.done
            : !todo.done
        )
          .filter((todo) =>
            filter.category === "All" ? true : todo.category === filter.category
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <ToDoItem
              key={todo.id}
              item={todo}
              removeToDo={removeToDo}
              toggleDone={toggleDone}
            />
          ))}
      </div>
    </div>
  );
}

export default App;

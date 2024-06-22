import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDoForm from "./components/ToDoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [ToDos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  if (localStorage.getItem("todos") === null || localStorage.length === undefined) {
    localStorage.setItem("todos", JSON.stringify([]));
  }

  const addToDo = (text, category) => {
    const newToDos = [
      ...ToDos,
      { id: Math.floor(Math.random() * 1000), text, category, done: false },
    ];
    setTodos(newToDos);
    localStorage.setItem("todos", JSON.stringify(newToDos));
  };

  const removeToDo = (id) => {
    const newToDos = [...ToDos];
    const filteredToDos = newToDos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredToDos);
    localStorage.setItem("todos", JSON.stringify(filteredToDos));
  };

  const toggleDone = (id) => {
    const newToDos = [...ToDos];
    newToDos.map((todo) => (todo.id === id ? (todo.done = !todo.done) : todo));
    setTodos(newToDos);
    localStorage.setItem("todos", JSON.stringify(newToDos));
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
      {localStorage.getItem("todos").length === 2 ? (
        <div className="no-todos">
          <h2>It seems that your list is empty.</h2>
          <p>You can start by clicking on "add task".</p>
        </div>
      ) : null}
      </div>
    </div>
  );
}

export default App;

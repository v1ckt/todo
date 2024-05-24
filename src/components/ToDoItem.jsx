// import React from "react";

const ToDoItem = ({ item, removeToDo, toggleDone }) => {
  return (
    <div className={`todo-item${item.done ? ' done' : ''}`}>
      <input type="checkbox" onClick={() => toggleDone(item.id)}></input>
      <div className="todo-content">
        <p className="todo-text">{item.text}</p>
        <p className="arrow">{">"}</p>
        <p className="todo-category">{item.category}</p>
      </div>
      <button onClick={() => removeToDo(item.id)}>Delete</button>
    </div>
  );
};

export default ToDoItem;

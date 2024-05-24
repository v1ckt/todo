import { useState } from "react";

const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addToDo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="add-item">
      <p className="title" onClick={() => setShowForm(!showForm)}>
        + Add New Task
      </p>
      {showForm && (
        <form action="" className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="bottom">
            <select
              name=""
              id=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Mobile">Mobile</option>
            </select>
            <button type="submit">Add Task</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ToDoForm;

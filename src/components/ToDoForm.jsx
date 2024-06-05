import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [showForm, setShowForm] = useState(false);

  const clearPlaceHolder = (e) => {
    e.placeholder = "";
    e.onblur = (e) => (e.target.placeholder = "Task Title");
  }

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
        {showForm ? "Close" : "+ Add Task"}
      </p>
      {showForm && (
        <form action="" className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={(e) => clearPlaceHolder(e.target)}
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

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
}

export default ToDoForm;

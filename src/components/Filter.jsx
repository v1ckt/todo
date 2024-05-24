import React, { useState } from "react";

const Filter = ({ filter, setFilter }) => {
  const [isExpanded, setExpanded] = useState(false);

  const resetonClose = () => {
    setFilter({ status: "All", category: "All" });
    setExpanded(false);
  }

  const handleFilterChange = (field, value) => {
    setFilter(prevFilter => ({ ...prevFilter, [field]: value }));
  };

  return (
    <div className="filter">
      <button
        className="filterbtn"
        onClick={() => {
          isExpanded ? resetonClose() : setExpanded(true);
        }}
      >
        {isExpanded ? "Close and reset" : "Show filters"}
      </button>
      {isExpanded && (
        <div className="filter-options">
          <div className="filter-op">
            <p>Status</p>
            <select
              name=""
              id=""
              value={filter.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="All">All</option>
              <option value="Done">Done</option>
              <option value="Undone">Undone</option>
            </select>
          </div>
          <div className="filter-op">
            <p>Category</p>
            <select
              name=""
              id=""
              value={filter.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="All">All</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
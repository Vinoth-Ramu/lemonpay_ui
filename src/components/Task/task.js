import React, { useState } from "react";
import "./task.scss";
import { FaEllipsisV, FaPlus } from "react-icons/fa";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, date: "2/02/2024 2:00 pm", task: "Design Navaratri poster", description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" },
    { id: 2, date: "2/02/2024 2:00 pm", task: "Design Navaratri poster", description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" },
    { id: 3, date: "2/02/2024 2:00 pm", task: "Design Navaratri poster", description: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" },
  ]);

  return (
    <div className="task-container">
      {/* Header */}
      <h2 className="title"> 
        <a href="#" className="task-link">Tasks Management</a>
      </h2>

      {/* Add Task Button */}
      <button className="add-task">
        <FaPlus /> Add Task
      </button>

      {/* Task Table */}
      <table className="task-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Date & Time</th>
            <th>Task</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.date}</td>
              <td>{task.task}</td>
              <td>{task.description}</td>
              <td className="action">
                <FaEllipsisV />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button>{"<"}</button>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button key={num} className="page-btn">
            {num}
          </button>
        ))}
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default TaskManagement;

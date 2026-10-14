
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function addTask(e) {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: task,
        completed: false
      }
    ]);

    setTask("");
  }

  // Complete or uncomplete a task
  function toggleTask(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  // Delete a task
  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <div style={{
      maxWidth: "500px",
      margin: "50px auto",
      padding: "20px",
      fontFamily: "Arial",
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: "10px"
    }}>
      <h1>React To-Do List</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: "10px", width: "60%" }}
        />

        <button type="submit" style={{ padding: "10px" }}>
          Add
        </button>
      </form>

      <h3>My Tasks: {tasks.length}</h3>

      {tasks.length === 0 && <p>No tasks added yet.</p>}

      {tasks.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            margin: "10px 0",
            background: "#f2f2f2",
            borderRadius: "5px"
          }}
        >
          <span
            onClick={() => toggleTask(item.id)}
            style={{
              cursor: "pointer",
              textDecoration: item.completed
                ? "line-through"
                : "none"
            }}
          >
            {item.completed ? "✅ " : "⬜ "}
            {item.name}
          </span>

          <button onClick={() => deleteTask(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
n
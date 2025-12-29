import { useState } from "react";

export default function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addTask = () => {
    if (!title || !dueDate) return;

    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        dueDate,
        status: "Pending",
      },
    ]);

    setTitle("");
    setDueDate("");
  };

  return (
    <div className="task-form">
      <input
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button onClick={addTask}>
        Add
      </button>
    </div>
  );
}

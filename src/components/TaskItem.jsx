export default function TaskItem({ task, setTasks }) {
  const toggleStatus = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id
          ? { ...t, status: t.status === "Pending" ? "Done" : "Pending" }
          : t
      )
    );
  };

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
    <div className="task-item">
      <div>
        <p>{task.title}</p>
        <small>{task.dueDate}</small>
        <div className={`status ${task.status.toLowerCase()}`}>
          {task.status}
        </div>
      </div>

      <div className="task-actions">
        <button onClick={toggleStatus}>✔</button>
        <button onClick={deleteTask}>🗑</button>
      </div>
    </div>
  );
}

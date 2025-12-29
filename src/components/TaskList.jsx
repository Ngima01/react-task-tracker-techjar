import TaskItem from "./TaskItem";

export default function TaskList({ tasks, setTasks }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks found</p>;
  }

  return (
    <>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </>
  );
}


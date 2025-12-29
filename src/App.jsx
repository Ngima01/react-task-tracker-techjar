import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "./services/taskService";
import TaskForm from "./components/Taskform";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const filteredTasks = tasks
    .filter(task =>
      filter === "All" ? true : task.status === filter
    )
    .filter(task =>
      task.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.title.localeCompare(b.title);
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  return (
    <div className="app">
      <h1>Task Tracker</h1>

      <TaskForm setTasks={setTasks} />

      <TaskFilters
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        search={search}
        setSearch={setSearch}
      />

      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

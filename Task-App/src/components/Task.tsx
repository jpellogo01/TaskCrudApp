import TaskInput from "./TaskInput";
import TaskList from "./Tasklist";
import { useEffect, useState } from "react";
import "../styles/task.css";

interface Tasks {
  id: number;
  title: string;
  completed: boolean;
}

const Task = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Tasks | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      } else {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=3",
        );
        const data = await res.json();
        setTasks(data);
        localStorage.setItem("tasks", JSON.stringify(data));
      }
    };

    loadTasks();
  }, []);

  return (
    <div>
      <h3>Task App</h3>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <TaskInput
              tasks={tasks}
              setTasks={setTasks}
              editingTask={editingTask}
              setEditingTask={setEditingTask}
              setShowModal={setShowModal}
            />
            <button className="button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <button className="button" onClick={() => setShowModal(true)}>
        ADD
      </button>

      <TaskList
        tasks={tasks}
        setEditingTask={setEditingTask}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Task;

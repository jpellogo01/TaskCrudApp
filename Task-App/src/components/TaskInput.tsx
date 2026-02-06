import { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskInputProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  editingTask: Task | null;
  setEditingTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskInput = ({
  tasks,
  setTasks,
  editingTask,
  setEditingTask,
  setShowModal,
}: TaskInputProps) => {
  const [title, setTitle] = useState(editingTask ? editingTask.title : "");

  const addTask = () => {
    console.log("button cliked");
    if (!title.trim()) {
      return;
    }

    if (editingTask) {
      const updatedTasks = tasks.map((t) =>
        t.id === editingTask.id ? { ...t, title } : t,
      );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setEditingTask(null);
      setShowModal(false);
    } else {
      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTitle("");
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>{editingTask ? "Update" : "Save"}</button>
    </div>
  );
};

export default TaskInput;

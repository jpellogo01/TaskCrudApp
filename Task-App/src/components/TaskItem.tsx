interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  setEditingTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleStatus: (id: number) => void;
}

const TaskItem = ({
  task,
  setEditingTask,
  setShowModal,
  toggleStatus,
}: TaskItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleStatus(task.id)}
      />{" "}
      <h4>Title: {task.title}</h4>
      <p>Status: {task.completed ? "Done" : "Pending"}</p>
      <button
        onClick={() => {
          setEditingTask(task);
          setShowModal(true);
        }}
      >
        edit
      </button>
    </div>
  );
};

export default TaskItem;

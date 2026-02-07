import "../styles/taskItem.css";
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
    <div className="taskItem">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleStatus(task.id)}
      />{" "}
      <h4>{task.title}</h4>
      <button
        onClick={() => {
          setEditingTask(task);
          setShowModal(true);
        }}
        className="edit-button"
      >
        edit
      </button>
    </div>
  );
};

export default TaskItem;

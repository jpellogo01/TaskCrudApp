interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  setEditingTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskItem = ({ task, setEditingTask, setShowModal }: TaskItemProps) => {
  return (
    <div>
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

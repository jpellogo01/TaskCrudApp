import TaskItem from "./TaskItem";
interface Tasks {
  id: number;
  title: string;
  completed: boolean;
}
interface TasklistProps {
  tasks: Tasks[];
  setEditingTask: React.Dispatch<React.SetStateAction<Tasks | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleStatus: (id: number) => void;
}
const TaskList = ({
  tasks,
  setEditingTask,
  setShowModal,
  toggleStatus,
}: TasklistProps) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setEditingTask={setEditingTask}
          setShowModal={setShowModal}
          toggleStatus={toggleStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;

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
}
const TaskList = ({ tasks, setEditingTask, setShowModal }: TasklistProps) => {
  return (
    <div>
      <h4>Task Lists:</h4>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setEditingTask={setEditingTask}
          setShowModal={setShowModal}
        />
      ))}
    </div>
  );
};

export default TaskList;

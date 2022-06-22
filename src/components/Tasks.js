import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
  // return tasks.map((task) => {
  //   <div key={task.id}>{task.text}</div>;
  // });
};

export default Tasks;

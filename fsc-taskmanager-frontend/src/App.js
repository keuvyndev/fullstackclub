import './App.css';
import { useState } from "react"
import TaskItem from './components/taskItem';

const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        description: "Estudar Programação",
        isComplete: false
      },
      {
        id: 2,
        description: "Ler",
        isComplete: false,
      },
    ]
  )

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );

}

export default App;
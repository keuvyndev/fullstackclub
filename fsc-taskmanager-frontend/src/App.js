import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"
import TaskItem from './components/taskItem';

const App = () => {

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

  // Método que captura as tasks no backend
  const fecthTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
      console.log(data);
    } catch (e) {
      console.log(e)
    }
  }

  // Consulta as tasks assim que o componente é montado
  useEffect(() => {
    fecthTasks()
  }, [])

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );

}

export default App;
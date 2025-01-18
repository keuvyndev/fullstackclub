import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    // Método que captura as tasks no backend
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTasks(data);
        } catch (e) {
            console.log(e);
        }
    };

    // Consulta as tasks assim que o componente é montado
    useEffect(() => {
        fetchTasks();
    }, []);

    console.log(tasks);

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem task={lastTask} fetchTasks={fetchTasks} />
                        ))}
                </div>
            </div>

            {/* Renderiza as tasks completadas */}
            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted)
                        .map((completedTask) => (
                            <TaskItem
                                task={completedTask}
                                fetchTasks={fetchTasks}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;

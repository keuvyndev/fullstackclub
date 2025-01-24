import axios from "axios";
import { useEffect, useState, useMemo, useCallback } from "react";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { toast } from "react-toastify";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    // Método que captura as tasks no backend
    // Requer useCallBack por causa do useEffect
    const fetchTasks = useCallback(async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}/tasks`
            );
            setTasks(data);
        } catch (_e) {
            toast.error("Houve um erro ao buscar as tarefas ...");
        }
    }, []);

    // Faz com que o código só seja executado se "tasks" mudar.
    // Isto economiza memória pois não é necessário lupar entre filter e map em todos os itens
    const lastTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);
    const completedTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === true);
    }, [tasks]);

    // Executa a consulta todas as vezes que o componente é renderizado
    // Quando um state muda, o componente é renderizado novamente, por isso
    // Cuidado ao usar useEffect com useState!
    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {lastTasks.map((lastTask) => (
                        <TaskItem
                            key={lastTask._id}
                            task={lastTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>

            {/* Renderiza as tasks completadas */}
            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {completedTasks.map((completedTask) => (
                        <TaskItem
                            key={completedTask._id}
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

import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`
            );

            // Atualiza as tarefas
            await fetchTasks();

            toast.success("A tarefa foi removida com sucesso!");
        } catch (_e) {
            toast.error("Algo deu errado ...");
        }
    };

    // Passa a informação do checkbox para o back-end
    const handleTaskCompletionChange = async (e) => {
        try {
            console.log(`Task completada! ${e}`);
            await axios.patch(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`,
                {
                    isCompleted: e.target.checked,
                }
            );

            // Atualiza as tarefas
            await fetchTasks();

            toast.success("A tarefa modificada com sucesso!");
        } catch (_e) {
            toast.error("Algo deu errado ...");
        }
    };

    return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label
                        className={
                            task.isCompleted
                                ? "checkbox-container-completed"
                                : "checkbox-container"
                        }
                    >
                        {task.description}

                        <input
                            type="checkbox"
                            defaultChecked={task.isCompleted}
                            onChange={(e) => handleTaskCompletionChange(e)}
                        />
                        <span
                            className={
                                task.isCompleted
                                    ? "checkmark completed"
                                    : "checkmark"
                            }
                        ></span>
                    </label>
                </div>

                <div className="delete">
                    <AiFillDelete
                        size={18}
                        color="#F97474"
                        onClick={handleTaskDeletion}
                    />
                </div>
            </div>
        </>
    );
};

export default TaskItem;

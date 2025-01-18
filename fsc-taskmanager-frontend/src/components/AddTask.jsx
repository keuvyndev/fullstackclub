import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
    const [task, setTasks] = useState("");

    const onChange = (e) => {
        setTasks(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return toast(
                    "A tarefa precisa de uma descrição para ser adicionada!"
                );
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });

            // Consulta novamente as tasks após atualização
            await fetchTasks();

            // Limpa o Input
            setTasks("");
        } catch (error) {
            toast.error("Algo deu errado ...");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar a tabela ..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#FFFFFF" />
            </CustomButton>
        </div>
    );
};

export default AddTask;

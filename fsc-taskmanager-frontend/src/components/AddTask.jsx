import CustomInput from "./CustomInput";

import { useState } from "react";
import "./AddTask.scss";

const AddTask = () => {
    const [task, setTasks] = useState("");

    const onChange = (e) => {
        setTasks(e.target.value);
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar a tabela ..."
                value={task}
                onChange={onChange}
            />
        </div>
    );
};

export default AddTask;

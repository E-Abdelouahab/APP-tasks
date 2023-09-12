import {FC, useState} from "react";
import * as TaskService from "../../services/task.service";
import User from "../../types/User";
import Task from "../../types/Task";
import Modal from "../Modal";
import TaskForm from "../Task/TaskForm";

interface Props {
    user: User;
}

const TaskCreateButton: FC<Props> = ({user}: Props) => {
    const [isOpenForm, setOpenForm] = useState(false);

    // Création d'une nouvelle tâche
    const sendNewTask = (formData: any) => {
        setOpenForm(false);
        const add = async (TaskAdd: Task) => {
            await TaskService.createTask(TaskAdd);
            window.location.reload();
        }
        add(formData);
    }

    // Affichage du bouton de création d'une tâche
    return (
        <span>
            <button onClick={() => setOpenForm(true)}>Ajouter une tâche</button>
            <Modal
                isOpen={isOpenForm}
                onClose={() => setOpenForm(false)}
                title="Enregistrer une tâche"
                content={<TaskForm onSubmit={sendNewTask} userId={user._id}/>}
            />
        </span>
    );
}

export default TaskCreateButton;
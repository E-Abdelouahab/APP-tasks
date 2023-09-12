import {FC, useState} from 'react';
import {IoPencilSharp} from "react-icons/io5";
import * as TaskService from "../../services/task.service";
import Task from "../../types/Task";
import Modal from "../Modal";
import TaskForm from "./TaskForm";

interface Props {
    task: Task;
}

const TaskUpdateButton: FC<Props> = ({task}: Props) => {
    const [isOpenForm, setOpenForm] = useState('');

    // Mise à jour d'une tâche
    const sendUpdateTask = (formData: any) => {
        setOpenForm('');
        const update = async (taskUpdate: Task) => {
            await TaskService.updateTask(taskUpdate);
            window.location.reload();
        }
        update(formData);
    }

    // Affichage du bouton de modification d'une tâche
    return (
        <span>
            <button className='iconButton' onClick={() => setOpenForm(task._id)} title="Modifier">
                <IoPencilSharp/>
            </button>
            <Modal
                isOpen={isOpenForm === task._id}
                onClose={() => setOpenForm('')}
                title="Modifier un utilisateur"
                content={<TaskForm onSubmit={sendUpdateTask} task={task} userId={task.userId}/>}
            />
        </span>
    );
}

export default TaskUpdateButton;
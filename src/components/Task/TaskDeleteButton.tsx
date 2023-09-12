import {FC} from 'react';
import {IoTrashBinSharp} from "react-icons/io5";
import {confirmAlert} from "react-confirm-alert";
import * as TaskService from "../../services/task.service";
import Task from "../../types/Task";

interface Props {
    task: Task;
}

const TaskDeleteButton: FC<Props> = ({task}: Props) => {

    // Alerte de confirmation de suppression d'une tâche
    const alertDeleteTask = (task: Task) => {
        confirmAlert({
            title: 'Confirmation de suppression',
            message: `Êtes vous sûr de vouloir supprimer la tâche : ${task.name} ?`,
            buttons: [
                {
                    label: 'Oui',
                    onClick: () => {
                        TaskService.deleteTask(task);
                        window.location.reload();
                    }
                },
                {
                    label: 'Non',
                    onClick: () => null
                }
            ]
        });
    }

    // Affichage du bouton de suppression d'une tâche
    return (
        <button className='iconButton' onClick={() => alertDeleteTask(task)} title="Supprimer">
            <IoTrashBinSharp/>
        </button>
    );
}

export default TaskDeleteButton;
import {FC} from 'react';
import {IoTrashBinSharp} from 'react-icons/io5';
import {confirmAlert} from 'react-confirm-alert';
import * as UserService from '../../services/user.service';
import * as TaskService from '../../services/task.service';
import User from "../../types/User";

interface Props {
    user: User;
}

const UserDeleteButton: FC<Props> = ({user}: Props) => {

    // Alerte de confirmation de suppression d'un utilisateur
    const alertDeleteUser = (user: User) => {
        confirmAlert({
            title: 'Confirmation de suppression',
            message: `Êtes-vous sûr de vouloir supprimer l'utilisateur : ${user.name} (${user.email}) et toutes ces tâches?`,
            buttons: [
                {
                    label: 'Oui',
                    onClick: () => {
                        TaskService.deleteTasksByUserId(user._id);
                        UserService.deleteUser(user);
                        window.location.reload();
                    }
                },
                {
                    label: 'Non'
                }
            ]
        });
    }

    // Affichage du bouton de suppression d'un utilisateur
    return (
        <button className='iconButton' onClick={() => alertDeleteUser(user)} title="Supprimer">
            <IoTrashBinSharp/>
        </button>
    )
}

export default UserDeleteButton;
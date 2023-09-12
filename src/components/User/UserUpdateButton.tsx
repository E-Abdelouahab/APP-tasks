import {FC, useState} from 'react';
import {IoPencilSharp} from 'react-icons/io5';
import * as UserService from '../../services/user.service';
import User from "../../types/User";
import Modal from '../Modal';
import UserForm from './UserForm';

interface Props {
    user: User;
}

const UserUpdateButton: FC<Props> = ({user}: Props) => {
    const [isOpenForm, setOpenForm] = useState('');

    // Mise à jour d'un utilisateur
    const sendUpdateUser = (formData: any) => {
        setOpenForm('');
        const update = async (userUpdate: User) => {
            await UserService.updateUser(userUpdate);
            window.location.reload();
        }
        update(formData);
    }

    // Affichage du bouton de modification d'un utilisateur
    return (
        <span>
            <button className='iconButton' onClick={() => setOpenForm(user._id)} title="Modifier">
                <IoPencilSharp/>
            </button>
            <Modal
                isOpen={isOpenForm === user._id}
                onClose={() => setOpenForm('')}
                title="Modifier un utilisateur"
                content={<UserForm onSubmit={sendUpdateUser} user={user}/>}
            />
        </span>
    );
}

export default UserUpdateButton;
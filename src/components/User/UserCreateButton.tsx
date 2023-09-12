import {FC, useState} from 'react';
import * as UserService from '../../services/user.service';
import User from "../../types/User";
import Modal from '../Modal';
import UserForm from './UserForm';

const UserCreateButton: FC = () => {
    const [isOpenForm, setOpenForm] = useState(false);

    // Création d'un nouvel utilisateur
    const sendNewUser = (userData: any) => {
        setOpenForm(false);
        const addUser = async (user: User) => {
            await UserService.createUser(user);
            window.location.reload();
        }
        addUser(userData);
    }

    // Affichage du bouton de création d'un utilisateur
    return (
        <div>
            <button onClick={() => setOpenForm(true)}>Ajouter un utilisateur</button>
            <Modal
                isOpen={isOpenForm}
                onClose={() => setOpenForm(false)}
                title="Enregistrer un utilisateur"
                content={<UserForm onSubmit={sendNewUser}/>}
            />
        </div>
    );
}

export default UserCreateButton;
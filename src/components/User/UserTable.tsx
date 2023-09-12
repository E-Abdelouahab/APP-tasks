import {FC} from 'react';
import {Link} from "react-router-dom";
import {IoNewspaperSharp} from 'react-icons/io5';
import User from "../../types/User";
import UserDeleteButton from "./UserDeleteButton";
import UserUpdateButton from "./UserUpdateButton";

interface Props {
    users: User[];
}

const UserTable: FC<Props> = ({users}: Props) => {
    // Affichage s'il n'y a aucun utilisateur
    if (users?.length === 0) {
        return (<h1>Aucun utilisateur</h1>);
    }

    // Affichage du tableau d'utilisateurs
    return (
        <table className='center'>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Mail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Affichage des lignes utilisateur */}
                {users?.map((user, key) => {
                    return (
                        <tr key={key}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={'/users/' + user._id + '/tasks'}>
                                    <button className='iconButton' title="Lister les taĉhes">
                                        <IoNewspaperSharp/>
                                    </button>
                                </Link>
                                <UserUpdateButton user={user}/>
                                <UserDeleteButton user={user}/>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default UserTable;
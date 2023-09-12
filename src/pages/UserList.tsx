import {FC, useEffect, useState} from "react";
import User from "../types/User";
import * as UserService from "../services/user.service";
import UserCreateButton from "../components/User/UserCreateButton";
import UserTable from "../components/User/UserTable";

const UserList: FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    // Récupération des utilisateurs
    useEffect(() => {
        async function getData() {
            const users: User[] = await UserService.getUsers();
            setUsers(users);
        }

        getData();
    });

    // Retour de L'affichage
    return (
        <div>
            <h2>Liste des utilisateurs</h2>
            <UserCreateButton/>
            <UserTable users={users}/>
        </div>
    )
};

export default UserList;
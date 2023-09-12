import {FC, useEffect, useState} from "react";
import * as TaskService from "../services/task.service";
import * as UserService from "../services/user.service";
import Task from "../types/Task";
import User from "../types/User";
import TaskTable from "../components/Task/TaskTable";


const TaskList: FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    // Récupération des tâches et des utilisateurs
    useEffect(() => {
        async function getData() {
            const tasks: Task[] = await TaskService.getTasks();
            setTasks(tasks);
            const users: User[] = await UserService.getUsers();
            setUsers(users);
        }
        getData();
    });

    // Affichage des tâches
    return (
        <div>
            <h2>Liste des tâches</h2>
            <TaskTable tasks={tasks} users={users}/>
        </div>
    )
}

export default TaskList;
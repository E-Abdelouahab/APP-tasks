import {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import * as UserService from "../services/user.service";
import * as TaskService from "../services/task.service";
import User from "../types/User";
import Task from "../types/Task";
import TaskTable from "../components/Task/TaskTable";
import TaskCreateButton from "../components/Task/TaskCreateButton";

const TaskListByUser: FC = () => {
    const {userId} = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);

    // Récupération de l'utilisateur et de ses tâches
    useEffect(() => {
        async function getData() {
            const user: User = await UserService.getUser(userId);
            setUser(user);
            const tasks: Task[] = await TaskService.getTasksByUserId(userId);
            setTasks(tasks);
        }

        getData();

    });

    // Affichage s'il n'y a pas d'utilisateur
    if (!user) {
        return (<div>Loading...</div>);
    }

    // Affichage des tâches
    return (
        <div>
            <h2>Tâches de : {user.email}</h2>
            <TaskCreateButton user={user}/>
            <TaskTable tasks={tasks} users={[user]}/>
        </div>
    );
}

export default TaskListByUser;
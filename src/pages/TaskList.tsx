import React, { FC, useEffect, useState } from "react";
import * as TaskService from "../services/task.service";
import * as UserService from "../services/user.service";
import Task from "../types/Task";
import User from "../types/User";
import TaskTable from "../components/Task/TaskTable";
import '../assets/css/TaskList.css'; // Import your CSS file for styling

const TaskList: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchFinished, setSearchFinished] = useState<boolean | null>(null);

  // Récupération des tâches et des utilisateurs
  useEffect(() => {
    async function getData() {
      const tasks: Task[] = await TaskService.getTasks();
      setTasks(tasks);
      const users: User[] = await UserService.getUsers();
      setUsers(users);
    }
    getData();
  }, []);

  // Function to handle the search
  const handleSearch = async () => {
    const searchCriteria = {
      name: searchQuery,
      finished: searchFinished,
    };

    const searchedTasks: Task[] = await TaskService.searchTasks(searchCriteria);
    setTasks(searchedTasks);
  };

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">Liste des tâches</h2>

      {/* Filtering Interface */}
      <div className="filter-container">
        <input
          type="text"
          className="filter-input"
          placeholder="Filtrer par nom"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <label className="filter-label">
          Tâches terminées:
          <input
            type="checkbox"
            checked={searchFinished === true}
            onChange={() => setSearchFinished(!searchFinished)}
          />
        </label>
        <button className="filter-button" onClick={handleSearch}>
          Filtrer
        </button>
      </div>

      <TaskTable tasks={tasks} users={users} />
    </div>
  );
};

export default TaskList;

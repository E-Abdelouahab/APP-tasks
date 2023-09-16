import React, { FC, useEffect, useState } from "react";
import * as TaskService from "../services/task.service";
import * as UserService from "../services/user.service";
import Task from "../types/Task";
import User from "../types/User";
import TaskTable from "../components/Task/TaskTable";

const TaskList: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchFinished, setSearchFinished] = useState<boolean | null>(null);

  // Récupération des tâches et des utilisateurs
  useEffect(() => {
    async function getData() {
      const fetchedTasks: Task[] = await TaskService.getTasks();
      setTasks(fetchedTasks);
      const fetchedUsers: User[] = await UserService.getUsers();
      setUsers(fetchedUsers);
    }
    getData();
  }, []);

  // Function to handle the search
  const handleSearch = async () => {
    if (searchQuery.trim() === "" && searchFinished === null) {
      // If both search query and finished status are empty, fetch all tasks
      const fetchedTasks: Task[] = await TaskService.getTasks();
      setTasks(fetchedTasks);
    } else {
      // If there's a search query and/or finished status, fetch tasks that match the criteria
      const searchedTasks: Task[] = await TaskService.searchTasks({
        name: searchQuery,
        finished: searchFinished,
      });
      setTasks(searchedTasks);
    }
  };

  return (
    <div>
      <h2>Liste des tâches</h2>
      <div className="search-container">
        <div className="search-input-container">
          {/* Search input for name */}
          <input
            className="search-input"
            type="text"
            placeholder="Search tasks by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="checkbox-label-container">
          {/* Checkbox label and search button */}
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={searchFinished === true}
              onChange={() => setSearchFinished((prev) => !prev)}
            />
            Finished Tasks
          </label>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <TaskTable tasks={tasks} users={users} />
    </div>
  );
};

export default TaskList;

import Task from "../types/Task";

export async function searchTasks(searchCriteria: { name?: string; finished?: boolean | null }) {
    const requestOptions = {
      method: 'GET',
    };
  
    try {
      // Build the search query based on the provided criteria
      const { name, finished } = searchCriteria;
      const queryParameters = [];
  
      if (name) {
        queryParameters.push(`name=${encodeURIComponent(name)}`);
      }
  
      if (finished !== null) {
        queryParameters.push(`finished=${finished}`);
      }
  
      const queryString = queryParameters.join('&');
      const apiUrl = queryString ? `http://localhost:8080/tasks/search?${queryString}` : 'http://localhost:8080/tasks';
  
      const response = await fetch(apiUrl, requestOptions);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  
export async function getTasks()
{
    const requestOptions = {
        method: 'GET',
    };
    try {
        const response = await fetch('http://localhost:8080/tasks', requestOptions);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getTasksByUserId(userId: any)
{
    const requestOptions = {
        method: 'GET',
    };
    try {
        const response = await fetch('http://localhost:8080/users/' + userId + '/tasks', requestOptions);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTasksByUserId(userId: any)
{
    const requestOptions = {
        method: 'DELETE',
    };
    try {
        const response = await fetch('http://localhost:8080/users/' + userId + '/tasks', requestOptions);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function createTask(task: Task)
{
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
    };
    try {
        const response = await fetch('http://localhost:8080/tasks', requestOptions);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function updateTask(task: Task)
{
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
    };
    try {
        const response: Response = await fetch('http://localhost:8080/tasks/' + task._id, requestOptions);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTask(task: Task)
{
    const requestOptions = {
        method: 'DELETE',
    };
    try {
        await fetch('http://localhost:8080/tasks/' + task._id, requestOptions);
    } catch (error) {
        console.log(error);
    }
}
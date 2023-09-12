import User from '../types/User';

export async function getUsers()
{
    const requestOptions = {
        method: 'GET',
    };
    try {
        const response = await fetch('http://localhost:8080/users', requestOptions);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function createUser(user: User)
{
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    try {
        const response = await fetch('http://localhost:8080/users', requestOptions);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getUser(userId: any)
{
    const requestOptions = {
        method: 'GET',
    };
    try {
        const response = await fetch('http://localhost:8080/users/' + userId, requestOptions);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(user: User)
{
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    try {
        const response: Response = await fetch('http://localhost:8080/users/' + user._id, requestOptions);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUser(user: User)
{
    const requestOptions = {
        method: 'DELETE',
    };
    try {
        await fetch('http://localhost:8080/users/' + user._id, requestOptions);
    } catch (error) {
        console.log(error);
    }
}
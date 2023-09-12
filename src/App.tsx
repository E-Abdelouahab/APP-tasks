import {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import UserList from './pages/UserList'
import TaskList from './pages/TaskList';
import TaskListByUser from "./pages/TaskListByUser";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/*Liste des utilisateurs*/}
                    <Route path="/" element={<UserList/>}/>

                    {/*Liste des tâches*/}
                    <Route path="/tasks" element={<TaskList/>}/>

                    {/*Liste des tâches pour un utilisateur*/}
                    <Route path="/users/:userId/tasks" element={<TaskListByUser/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

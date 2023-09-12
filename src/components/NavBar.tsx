import {FC} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar: FC = () => {
    return (
        <nav className='sticky'>
            <ul>
                <li>
                    <Link to="/">
                        Les Utilisateurs
                    </Link>
                </li>
                <li>
                    <Link to="/tasks">
                        Les Tâches
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
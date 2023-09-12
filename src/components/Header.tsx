import {FC} from "react";
import Navbar from "./NavBar";

const Header: FC = () => {
    return (
        <div>
            <div className="hero">
                <h1>Application de gestion de tâches</h1>
            </div>
            <Navbar/>
        </div>
    );
}

export default Header;
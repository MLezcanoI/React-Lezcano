import CartWidget from "../CartWidget/CartWidget";
import { FaShoppingCart } from "react-icons/fa";
import "bulma/css/bulma.css";

const NavBar = () => {
    return (
        <nav className="navbar is-link" style={{ backgroundColor: 'black', color: 'gold' }}>
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h1 className="title" style={{ color: 'gold' }}>Holistic Hole</h1>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start"  style={{justifyContent: 'center', width: '100%'}}>
                    <a className="navbar-item">Sesiones</a>
                    <a className="navbar-item">Productos</a>
                    <a className="navbar-item">Cursos y Talleres</a>
                    <a className="navbar-item">Rituales</a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <FaShoppingCart style={{ fontSize: "2em", color: "gold" }} />
                        <span className="tag is-link">0</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

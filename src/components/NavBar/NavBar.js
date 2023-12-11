import CartWidget from "../CartWidget/CartWidget";
import { FaShoppingCart } from "react-icons/fa";
import "bulma/css/bulma.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar is-link" style={{ backgroundColor: 'black', color: 'gold' }}>
            <div className="navbar-brand">
                <div className="navbar-item">
                    <Link to='/' className="title" style={{ color: 'gold', textDecoration: 'none' }}>
                        <h3>Holistic Hole</h3>
                    </Link>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start" style={{ justifyContent: 'center', width: '100%' }}>
                    <NavLink to={`/category/sesiones`} className="navbar-item" activeClassName="active">sesiones</NavLink>
                    <NavLink to={`/category/productos`} className="navbar-item" activeClassName="active">productos</NavLink>
                    <NavLink to={`/category/cursos`} className="navbar-item" activeClassName="active">cursos</NavLink>
                    <NavLink to={`/category/rituales`} className="navbar-item" activeClassName="active">rituales</NavLink>
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

import CartWidget from "../CartWidget/CartWidget";
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
                    <NavLink to={`/category/sesiones`} activeClassName="active" className="navbar-item">Sesiones</NavLink>
                    <NavLink to={`/category/productos`} activeClassName="active" className="navbar-item">Productos</NavLink>
                    <NavLink to={`/category/cursos`} activeClassName="active" className="navbar-item" >Cursos</NavLink>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <CartWidget style={{ fontSize: "2em", color: "white" }} />
                        <span className="tag is-link"></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

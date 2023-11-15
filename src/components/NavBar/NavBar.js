import CartWidget from "../CartWidget/CartWidget";
import { FaShoppingCart } from "react-icons/fa";
import "bulma/css/bulma.css";
const NavBar = () => {
    return (
        <nav>
            <section className="hero is-link" style={{ backgroundColor: 'black', color: 'gold' }}>
                <div class="hero-body">
                    <h1 className="title" style={{ color: 'gold' }}>Holistic Hole</h1>
                </div>
            </section >
            <div className="container mt-4 mb-4">
                <div className="columns is-centered">
                    <div className="column is-three-quarters">
                        <div className="buttons is-centered">
                            <button className="button is-black is-responsive">Sesiones</button>
                            <button className="button is-black is-responsive">Productos</button>
                            <button className="button is-black is-responsive">Cursos y Talleres</button>
                            <button className="button is-black is-responsive">Rituales</button>
                        </div>
                    </div>
                </div>
            </div>
            <FaShoppingCart style={{ fontSize: "2em" }} />
            0
        </nav>
    )
}

export default NavBar;

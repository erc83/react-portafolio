import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import logo from "../img/logo.png";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed top">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo..."/></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#features">Caracteristicas<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Acerca de mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Mis proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contactame</a>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Acesso directo
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/pokemon">Poke Api</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/books">App Libros</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/abracadabra/juego/eric">Abrakadabra</a>
                            </div>
                        </li>


                        <li className="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="https://www.facebook.com/eric.espinozamansilla/">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="https://www.linkedin.com/in/eric-espinoza-mansilla/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="https://github.com/erc83/">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar

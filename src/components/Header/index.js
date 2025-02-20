import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaHeart, FaSearch } from "react-icons/fa";
import { RiAddLargeLine } from "react-icons/ri";

function Header() {
    return (
        <header className={styles.header}>

            <Link to="/"><span>Movies</span></Link>

            <nav>
                <Link to="/"> Home </Link>
                <Link to="/search">
                    <FaSearch className={styles.Icons} />
                    Pesquisar
                </Link>
                <Link to="/favorites">
                    <FaHeart className={styles.Icons} />
                    Favoritos
                </Link>
                <Link to="/cadastre">
                    <RiAddLargeLine className={styles.Icons} />
                    Cadastrar
                </Link>
            </nav>
        </header>
    );
}

export default Header;
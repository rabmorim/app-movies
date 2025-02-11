import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";

function Header() {
    return (
        <header className={styles.header}>

            <Link to="/"><span>Movies</span></Link>

            <nav>
                <Link to="/"> Home </Link>
                <Link to="/search">
                    <FaSearch className= {styles.searchIcons} />
                    Pesquisar
                </Link>
            </nav>
        </header>
    );
}

export default Header;
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import favoriteIcon from "./favorite.png";
import unFavoriteIcon from "./unfavorite.png";
function Card({ id }) {
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.capa} />
            </Link>
            <figure className={styles.icon}>
                <img src={favoriteIcon} alt="Icone de Favoritar vídeo" />
            </figure>
        </section>
    );
}

export default Card;
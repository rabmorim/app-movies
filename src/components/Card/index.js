import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import favoriteIcon from "./favorite.png"; /*Branco */
import unFavoriteIcon from "./unfavorite.png"; /*Vermelho */
import { useFavoriteContext } from "../../contexts/Favorites";
function Card({ id, page }) {

    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icone = isFavorite ? unFavoriteIcon : favoriteIcon;
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.capa} />
            </Link>
            <figure className={`${page === "home" ? styles.icon : styles.iconsSearch}`}>
                <img
                    src={icone}
                    alt="Icone de Favoritar vídeo"
                    onClick={() => addFavorite({ id })}
                />
            </figure>
        </section>
    );
}

export default Card;
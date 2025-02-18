import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {

    const { favorite } = useFavoriteContext();

    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Lista de Favoritos</h2>
                    {
                        <VideoList
                            videos={favorite}
                            emptyHeading= "Sem Videos favoritos"
                        />
                    }
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;
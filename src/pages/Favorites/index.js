import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

function Favorites() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Lista de Favoritos</h2>
                    Lista de Favoritos
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;